import React from "react";
import { PageShell, SectionLabel, PrimaryButton } from "./PageParts";

// Planned kits, shown as "coming soon" tiles until the store is live.
const plannedKits = [
  { name: "Bridge Building Kit", topic: "ENGINEERING" },
  { name: "Circuits & Electronics Kit", topic: "ELECTRONICS" },
  { name: "Simple Machines Kit", topic: "PHYSICS" },
  { name: "Design Challenge Kit", topic: "DESIGN" },
];

function Kits() {
  return (
    <PageShell className="kits-page">
      <section className="inner-hero kits-hero">
        <SectionLabel>TECHIDS KITS</SectionLabel>
        <h1>
          Take the workshop
          <br />
          <span>home with you.</span>
        </h1>
        <p>
          We're building take-home engineering kits so kids can buy the
          materials for our workshops and keep learning after the workshop
          ends — no classroom required.
        </p>
      </section>

      <section className="kits-how section">
        <div className="section-heading-row">
          <div>
            <SectionLabel>HOW IT WILL WORK</SectionLabel>
            <h2>
              Buy a kit.
              <br />
              <span>Build the workshop.</span>
            </h2>
          </div>
        </div>
        <p className="kits-intro">
          Each kit will include the real materials from one of our workshops,
          plus step-by-step instructions so kids can follow along with the
          same engineering topics we teach in person — on their own time, at
          home.
        </p>

        <div className="coming-soon-row kits-grid">
          {plannedKits.map((kit) => (
            <div className="coming-soon-tile" key={kit.name}>
              <SectionLabel>{kit.topic}</SectionLabel>
              <span>{kit.name}</span>
              <p>Coming soon</p>
            </div>
          ))}
        </div>
      </section>

      <section className="kits-cta">
        <SectionLabel>WANT TO KNOW WHEN KITS LAUNCH?</SectionLabel>
        <h2>
          We're not selling
          <br />
          <span>kits yet — but soon.</span>
        </h2>
        <p>Reach out and we'll let you know as soon as kits are available.</p>
        <PrimaryButton to="/contact">Contact Us →</PrimaryButton>
      </section>
    </PageShell>
  );
}

export default Kits;
