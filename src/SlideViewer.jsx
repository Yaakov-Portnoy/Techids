import React, { useEffect, useRef, useState } from "react";
import * as pdfjsLib from "pdfjs-dist";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.min.mjs?url";

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

// Shows a PDF slide deck full-screen, one slide at a time, so people can
// read through a presentation on the site instead of downloading the file.
export default function SlideViewer({ src, title, onClose }) {
  const canvasRef = useRef(null);
  const pdfRef = useRef(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [error, setError] = useState("");

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
      const viewport = page.getViewport({ scale: 1 });
      const scale = Math.min((canvas.parentElement.clientWidth || 900) / viewport.width, 1.6);
      const scaledViewport = page.getViewport({ scale });
      canvas.width = scaledViewport.width;
      canvas.height = scaledViewport.height;
      page.render({ canvasContext: context, viewport: scaledViewport });
    });
    return () => {
      cancelled = true;
    };
  }, [pageNumber, pageCount]);

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
