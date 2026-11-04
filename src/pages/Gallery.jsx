import React, { useState } from "react";
import { PageShell, SectionLabel, PrimaryButton } from "./PageParts";
import Lightbox from "../Lightbox";

const galleryItems = [
  {
    title: "Building together",
    category: "BRIDGE WORKSHOP",
    image: "/gallery/bridge-workshop-1.jpg",
  },
  {
    title: "Hands-on mentoring",
    category: "BRIDGE WORKSHOP",
    image: "/gallery/bridge-workshop-2.jpg",
  },
  {
    title: "Testing a design",
    category: "BRIDGE WORKSHOP",
    image: "/gallery/bridge-workshop-3.jpg",
  },
  {
    title: "Problem-solving as a team",
    category: "BRIDGE WORKSHOP",
    image: "/gallery/bridge-workshop-4.jpg",
  },
  {
    title: "Planning the build",
    category: "BRIDGE WORKSHOP",
    image: "/gallery/bridge-workshop-5.jpg",
  },
  {
    title: "Student leaders guiding the way",
    category: "BRIDGE WORKSHOP",
    image: "/gallery/bridge-workshop-6.jpg",
  },
  {
    title: "A bridge takes shape",
    category: "BRIDGE WORKSHOP",
    image: "/gallery/bridge-workshop-7.jpg",
  },
  {
    title: "Load-testing the finished bridge",
    category: "BRIDGE WORKSHOP",
    image: "/gallery/bridge-workshop-8.jpg",
  },
];

function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <PageShell className="gallery-page">
      <section className="inner-hero gallery-hero">
        <SectionLabel>TECHIDS GALLERY</SectionLabel>
        <h1>
          STEM in
          <br />
          <span>action.</span>
        </h1>
        <p>Real moments from our workshops with students.</p>
      </section>

      <section className="gallery-section section">
        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <article
              className={`gallery-card ${index === 0 ? "gallery-card-large" : ""}`}
              key={item.image}
              onClick={() => setActiveIndex(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") setActiveIndex(index);
              }}
            >
              <img src={item.image} alt={item.title} loading="lazy" />
              <div className="gallery-card-overlay">
                <SectionLabel>{item.category}</SectionLabel>
                <h3>{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      {activeIndex !== null && (
        <Lightbox
          items={galleryItems}
          index={activeIndex}
          onClose={() => setActiveIndex(null)}
          onNavigate={setActiveIndex}
        />
      )}

      <section className="gallery-cta">
        <SectionLabel>WANT TO BE PART OF IT?</SectionLabel>
        <h2>
          Bring a Techids
          <br />
          experience <span>to students.</span>
        </h2>
        <PrimaryButton to="/workshops">Explore Workshops →</PrimaryButton>
      </section>
    </PageShell>
  );
}

export default Gallery;
