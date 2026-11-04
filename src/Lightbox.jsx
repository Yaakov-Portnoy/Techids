import React, { useEffect } from "react";

// Full-screen image viewer for the gallery, with Prev/Next arrows and
// keyboard navigation (Escape to close, arrow keys to move between photos).
export default function Lightbox({ items, index, onClose, onNavigate }) {
  const item = items[index];

  useEffect(() => {
    function handleKey(event) {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onNavigate((index + 1) % items.length);
      if (event.key === "ArrowLeft") onNavigate((index - 1 + items.length) % items.length);
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [index, items.length, onClose, onNavigate]);

  if (!item) return null;

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <button type="button" className="lightbox-close" onClick={onClose} aria-label="Close">
        ✕
      </button>
      <button
        type="button"
        className="lightbox-arrow lightbox-arrow-left"
        aria-label="Previous photo"
        onClick={(event) => {
          event.stopPropagation();
          onNavigate((index - 1 + items.length) % items.length);
        }}
      >
        ←
      </button>
      <figure className="lightbox-content" onClick={(event) => event.stopPropagation()}>
        <img src={item.image} alt={item.title} />
        <figcaption>
          <span>{item.category}</span>
          <h3>{item.title}</h3>
        </figcaption>
      </figure>
      <button
        type="button"
        className="lightbox-arrow lightbox-arrow-right"
        aria-label="Next photo"
        onClick={(event) => {
          event.stopPropagation();
          onNavigate((index + 1) % items.length);
        }}
      >
        →
      </button>
    </div>
  );
}
