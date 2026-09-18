import React from "react";
import { PageShell, SectionLabel, PrimaryButton } from "./PageParts";

const galleryItems = [
  {
    title: "Building together",
    category: "WORKSHOPS",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=85",
  },
  {
    title: "Science in action",
    category: "EXPERIMENTS",
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Team problem-solving",
    category: "COLLABORATION",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Engineering ideas",
    category: "ENGINEERING",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Exploring technology",
    category: "TECHNOLOGY",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Learning by doing",
    category: "STEM",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=85",
  },
];

function Gallery() {
  return (
    <PageShell className="gallery-page">
      <section className="inner-hero gallery-hero">
        <SectionLabel>TECHIDS GALLERY</SectionLabel>
        <h1>
          STEM in
          <br />
          <span>action.</span>
        </h1>
        <p>
          A look at the kinds of hands-on learning, collaboration, and
          experimentation that inspire Techids.
        </p>
      </section>

      <section className="gallery-section section">
        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <article
              className={`gallery-card ${index === 0 ? "gallery-card-large" : ""}`}
              key={item.title}
            >
              <img src={item.image} alt={item.title} />
              <div className="gallery-card-overlay">
                <SectionLabel>{item.category}</SectionLabel>
                <h3>{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="gallery-cta">
        <SectionLabel>WANT TO BE PART OF IT?</SectionLabel>
        <h2>
          Bring a Techids
          <br />
          experience <span>to students.</span>
        </h2>
        <PrimaryButton to="/contact">Contact Techids →</PrimaryButton>
      </section>
    </PageShell>
  );
}

export default Gallery;
