import React, { useEffect, useRef, useState } from "react";
import * as pdfjsLib from "pdfjs-dist";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.min.mjs?url";

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

// Shows a PDF slide deck full-screen, one slide at a time, so people can
// read through a presentation on the site instead of downloading the file.
export default function SlideViewer({ src, title, onClose }) {
  const canvasRef = useRef(null);
  const pdfRef = useRef(null);
  const renderTaskRef = useRef(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [error, setError] = useState("");
  const [resizeTick, setResizeTick] = useState(0);

  useEffect(() => {
    let cancelled = false;
    pdfjsLib
      .getDocument(src)
      .promise.then((pdf) => {
        if (cancelled) return;
        pdfRef.current = pdf;
        setPageCount(pdf.numPages);
      })
      .catch(() => setError("Couldn't load this presentation."));
    return () => {
      cancelled = true;
      pdfRef.current?.destroy();
    };
  }, [src]);

  useEffect(() => {
    const pdf = pdfRef.current;
    if (!pdf) return;
    let cancelled = false;
    pdf.getPage(pageNumber).then((page) => {
      if (cancelled) return;
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      const container = canvas.parentElement;
      const availableWidth = container.clientWidth || 900;
      const availableHeight = container.clientHeight || 600;
      const viewport = page.getViewport({ scale: 1 });
      // Fit the whole slide inside the available space — width AND height —
      // so it never needs to be scrolled to be seen in full.
      const scale = Math.min(availableWidth / viewport.width, availableHeight / viewport.height);
      const scaledViewport = page.getViewport({ scale });

      // Render at the screen's real pixel density so text stays sharp, then
      // scale back down to the fitted size with CSS.
      const outputScale = window.devicePixelRatio || 1;
      canvas.width = Math.floor(scaledViewport.width * outputScale);
      canvas.height = Math.floor(scaledViewport.height * outputScale);
      canvas.style.width = `${Math.floor(scaledViewport.width)}px`;
      canvas.style.height = `${Math.floor(scaledViewport.height)}px`;

      // The resize observer below can fire its initial callback around the
      // same time this effect's first render kicks off (e.g. right after the
      // deck loads), starting a second render on the same canvas before the
      // first finishes. Two renders racing on one canvas corrupt its
      // transform state — the classic symptom is the first slide briefly
      // appearing upside down. Cancel any render still in flight first.
      renderTaskRef.current?.cancel();
      const task = page.render({
        canvasContext: context,
        viewport: scaledViewport,
        transform: outputScale !== 1 ? [outputScale, 0, 0, outputScale, 0, 0] : undefined,
      });
      renderTaskRef.current = task;
      task.promise.catch(() => {});
    });
    return () => {
      cancelled = true;
    };
  }, [pageNumber, pageCount, resizeTick]);

  // Re-fit the slide if the window (or the modal itself) changes size —
  // otherwise a slide rendered for one window size overflows after a resize.
  useEffect(() => {
    const wrap = canvasRef.current?.parentElement;
    if (!wrap || typeof ResizeObserver === "undefined") return;
    const observer = new ResizeObserver(() => setResizeTick((n) => n + 1));
    observer.observe(wrap);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    function handleKey(event) {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") setPageNumber((n) => Math.min(n + 1, pageCount || n));
      if (event.key === "ArrowLeft") setPageNumber((n) => Math.max(n - 1, 1));
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [pageCount, onClose]);

  return (
    <div className="slide-viewer-overlay" onClick={onClose}>
      <div className="slide-viewer" onClick={(event) => event.stopPropagation()}>
        <div className="slide-viewer-header">
          <span>{title}</span>
          <button type="button" className="slide-viewer-close" onClick={onClose} aria-label="Close">
            ✕
          </button>
        </div>

        <div className="slide-viewer-canvas-wrap">
          {error ? <p className="slide-viewer-error">{error}</p> : <canvas ref={canvasRef} />}
        </div>

        <div className="slide-viewer-controls">
          <button
            type="button"
            onClick={() => setPageNumber((n) => Math.max(n - 1, 1))}
            disabled={pageNumber <= 1}
          >
            ← Prev
          </button>
          <span>
            {pageCount ? `Slide ${pageNumber} of ${pageCount}` : "Loading…"}
          </span>
          <button
            type="button"
            onClick={() => setPageNumber((n) => Math.min(n + 1, pageCount || n))}
            disabled={pageNumber >= pageCount}
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}
