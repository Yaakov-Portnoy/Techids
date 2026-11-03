import React from "react";
import { Link } from "react-router-dom";
import { PageShell, SectionLabel, PrimaryButton, ArrowLink } from "./PageParts";

const bridgeLevels = [
  {
    grade: "ELEMENTARY",
    title: "LEGO Bridge Build",
    duration: "15 minutes",
    description:
      "Teams build a LEGO bridge that spans a 10–12 inch gap, then test how much weight it can hold. Covers why we build bridges and what makes a design strong.",
    fileHref: "/workshops/bridge-building-elementary.pdf",
    fileLabel: "View the presentation (PDF)",
  },
  {
    grade: "MIDDLE SCHOOL",
    title: "Craft-Stick Bridge Build",
    duration: "25 minutes",
    description:
      "Teams design and build a craft-stick bridge on a limited materials budget, using triangles and trusses to resist bending, then run an official load test. Covers compression, tension, and the engineering design cycle.",
    fileHref: "/workshops/bridge-building-middle-school.pptx",
    fileLabel: "View the presentation (PowerPoint)",
  },
];

const comingSoon = ["Robotics", "Physics", "Electronics", "Design"];

function Workshops() {
  return (
    <PageShell className="workshops-page">
      <section className="workshops-hero">
        <div className="workshops-hero-copy">
          <SectionLabel>TECHIDS WORKSHOPS</SectionLabel>

          <h1>
            Don't just learn.
            <br />
            <span>Build it.</span>
          </h1>

          <p>
            Hands-on STEM experiences designed by students, for students.
          </p>

          <div className="button-row">
            <PrimaryButton to="/contact#workshop">Request a Workshop →</PrimaryButton>
          </div>
        </div>

        <div className="workshops-hero-image">
          <img
            src="/gallery/bridge-workshop-1.jpg"
            alt="Techids students building a bridge together at a workshop"
          />
        </div>
      </section>

      <section className="workshops-list section" id="workshop-list">
        <div className="section-heading-row">
          <div>
            <SectionLabel>OUR WORKSHOPS</SectionLabel>
            <h2>
              Learn by
              <br />
              <span>building.</span>
            </h2>
          </div>
        </div>

        <article className="workshop-feature">
          <SectionLabel>ENGINEERING</SectionLabel>
          <h3>Bridge Building &amp; Engineering</h3>
          <p>
            Available in two versions, matched to the group's grade level.
          </p>

          <div className="workshop-levels">
            {bridgeLevels.map((level) => (
              <div className="workshop-level-card" key={level.grade}>
                <span className="workshop-level-grade">{level.grade}</span>
                <h4>{level.title}</h4>
                <p className="workshop-level-duration">{level.duration}</p>
                <p>{level.description}</p>
                <a href={level.fileHref} target="_blank" rel="noreferrer" className="arrow-link">
                  {level.fileLabel} <span>→</span>
                </a>
              </div>
            ))}
          </div>

          <ArrowLink to="/contact#workshop">Ask about this workshop</ArrowLink>
        </article>

        <div className="coming-soon-row">
          {comingSoon.map((name) => (
            <div className="coming-soon-tile" key={name}>
              <span>{name}</span>
              <p>Coming soon</p>
            </div>
          ))}
        </div>
      </section>

      <section className="workshops-final">
        <SectionLabel>READY TO BUILD?</SectionLabel>
        <h2>
          Let's make STEM
          <br />
          <span>hands-on.</span>
        </h2>
        <Link to="/contact#workshop" className="button button-white">
          Request a Workshop →
        </Link>
      </section>
    </PageShell>
  );
}

export default Workshops;
