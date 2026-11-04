import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PageShell, SectionLabel, PrimaryButton, ArrowLink } from "./PageParts";
import SlideViewer from "../SlideViewer";

const workshops = [
  {
    category: "ENGINEERING",
    name: "Bridge Building & Engineering",
    summary: "Available in two versions, matched to the group's grade level.",
    levels: [
      {
        grade: "ELEMENTARY",
        title: "LEGO Bridge Build",
        duration: "15 minutes",
        description:
          "Teams build a LEGO bridge that spans a 10–12 inch gap, then test how much weight it can hold. Covers why we build bridges and what makes a design strong.",
        deckSrc: "/workshops/bridge-building-elementary.pdf",
      },
      {
        grade: "MIDDLE SCHOOL",
        title: "Craft-Stick Bridge Build",
        duration: "25 minutes",
        description:
          "Teams design and build a craft-stick bridge on a limited materials budget, using triangles and trusses to resist bending, then run an official load test. Covers compression, tension, and the engineering design cycle.",
        deckSrc: "/workshops/bridge-building-middle-school.pdf",
      },
    ],
  },
  {
    category: "PHYSICS",
    name: "Water Wheel & Simple Machines",
    summary: "A fast, hands-on team build around energy transfer.",
    levels: [
      {
        grade: "TEAM CHALLENGE",
        title: "Build a Water Wheel",
        duration: "15 minutes",
        description:
          "Teams build a water wheel from cardboard, straws, and a dowel axle, then pour water over it to see how much weight it can lift on a string — heaviest lift wins. Covers energy transfer and the wheel-and-axle simple machine.",
        deckSrc: "/workshops/water-wheel.pdf",
      },
    ],
  },
];

const comingSoon = ["Robotics", "Electronics", "Design"];

function Workshops() {
  const [openDeck, setOpenDeck] = useState(null);
  const [openWorkshopName, setOpenWorkshopName] = useState("");

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

        {workshops.map((workshop) => (
          <article className="workshop-feature" key={workshop.name}>
            <SectionLabel>{workshop.category}</SectionLabel>
            <h3>{workshop.name}</h3>
            <p>{workshop.summary}</p>

            <div className="workshop-levels">
              {workshop.levels.map((level) => (
                <div
                  className={`workshop-level-card ${workshop.levels.length === 1 ? "workshop-level-card-full" : ""}`}
                  key={level.grade}
                >
                  <span className="workshop-level-grade">{level.grade}</span>
                  <h4>{level.title}</h4>
                  <p className="workshop-level-duration">{level.duration}</p>
                  <p>{level.description}</p>
                  <button
                    type="button"
                    className="arrow-link slide-viewer-trigger"
                    onClick={() => {
                      setOpenDeck(level);
                      setOpenWorkshopName(workshop.name);
                    }}
                  >
                    View the slides <span>→</span>
                  </button>
                </div>
              ))}
            </div>

            <ArrowLink to="/contact#workshop">Ask about this workshop</ArrowLink>
          </article>
        ))}

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

      {openDeck && (
        <SlideViewer
          src={openDeck.deckSrc}
          title={`${openWorkshopName} — ${openDeck.grade}`}
          onClose={() => setOpenDeck(null)}
        />
      )}
    </PageShell>
  );
}

export default Workshops;
