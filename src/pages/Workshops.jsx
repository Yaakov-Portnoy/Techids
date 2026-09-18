import React from "react";
import { Link } from "react-router-dom";
import {
  PageShell,
  SectionLabel,
  PrimaryButton,
  SecondaryButton,
  ArrowLink,
} from "./PageParts";

const workshops = [
  {
    number: "01",
    title: "Bridge Builders",
    category: "ENGINEERING",
    description:
      "Design and build a bridge while exploring forces, structures, balance, and materials.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    number: "02",
    title: "Robotics Challenge",
    category: "ROBOTICS",
    description:
      "Design, build, test, and improve a machine that solves a hands-on challenge.",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    number: "03",
    title: "Forces in Action",
    category: "PHYSICS",
    description:
      "Explore force, motion, energy, and gravity through experiments students can experience.",
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    number: "04",
    title: "Build a Circuit",
    category: "ELECTRONICS",
    description:
      "Learn how electricity works by designing and testing a simple working circuit.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
  },
  {
    number: "05",
    title: "Rocket Science",
    category: "AEROSPACE",
    description:
      "Explore propulsion, aerodynamics, forces, and motion while designing a rocket.",
    image:
      "https://images.unsplash.com/photo-1517976547714-720226b864c1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    number: "06",
    title: "Engineering Challenge",
    category: "DESIGN",
    description:
      "Work as a team to solve a real-world engineering problem and improve your design.",
    image:
      "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=1200&q=80",
  },
];

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
            Hands-on STEM experiences designed by students, for students. We
            bring science, engineering, technology, and problem-solving to life
            through projects students can actually build.
          </p>

          <div className="button-row">
            <PrimaryButton to="/request">Request a Workshop →</PrimaryButton>
            <SecondaryButton to="#workshop-list">
              Explore Workshops
            </SecondaryButton>
          </div>
        </div>

        <div className="workshops-hero-image">
          <img
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1800&q=85"
            alt="Students working together on a STEM project"
          />
        </div>
      </section>

      <section className="workshops-why">
        <div className="section">
          <div className="workshops-why-number">01</div>
          <div className="workshops-why-copy">
            <SectionLabel>WHY HANDS-ON?</SectionLabel>
            <h2>
              The best way to
              <br />
              understand STEM is to
              <br />
              <span>experience it.</span>
            </h2>
            <p>
              A Techids workshop isn't a lecture. Students receive a challenge,
              explore the science behind it, build something, test it, figure
              out what went wrong, and try again.
            </p>
          </div>
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
          <p>
            Every experience combines science, engineering, creativity, and
            teamwork.
          </p>
        </div>

        <div className="workshops-grid">
          {workshops.map((workshop) => (
            <article className="workshop-card" key={workshop.number}>
              <div className="workshop-card-image">
                <img src={workshop.image} alt={workshop.title} />
                <span>{workshop.number}</span>
              </div>

              <div className="workshop-card-content">
                <SectionLabel>{workshop.category}</SectionLabel>
                <h3>{workshop.title}</h3>
                <p>{workshop.description}</p>
                <ArrowLink to="/contact">Ask about this workshop</ArrowLink>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="workshops-process">
        <div className="section">
          <SectionLabel>THE TECHIDS METHOD</SectionLabel>

          <h2>
            Discover.
            <br />
            Build.
            <br />
            Test.
            <br />
            <span>Improve.</span>
          </h2>

          <div className="process-grid">
            <div>
              <span>01</span>
              <h3>Discover</h3>
              <p>Understand the challenge and explore the science behind it.</p>
            </div>
            <div>
              <span>02</span>
              <h3>Build</h3>
              <p>Turn an idea into something real using materials and creativity.</p>
            </div>
            <div>
              <span>03</span>
              <h3>Test</h3>
              <p>Put the design to work and learn from the results.</p>
            </div>
            <div>
              <span>04</span>
              <h3>Improve</h3>
              <p>Make changes, try again, and build something better.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="workshops-school section">
        <div className="school-card">
          <div className="school-card-copy">
            <SectionLabel>FOR SCHOOLS</SectionLabel>
            <h2>
              Bring Techids
              <br />
              <span>to your school.</span>
            </h2>
            <p>
              We work with schools, teachers, and community organizations to
              bring hands-on STEM experiences directly to students.
            </p>
            <PrimaryButton to="/request">Request a Workshop →</PrimaryButton>
          </div>

          <div className="school-card-visual">
            <div className="school-visual-circle">STEM</div>
          </div>
        </div>
      </section>

      <section className="workshops-faq section">
        <SectionLabel>FAQ</SectionLabel>
        <h2>
          Questions?
          <br />
          <span>We've got answers.</span>
        </h2>

        <div className="faq-grid">
          <article>
            <h3>Who are the workshops for?</h3>
            <p>
              Our workshops are designed primarily for younger students and
              can be adapted for different ages and experience levels.
            </p>
          </article>

          <article>
            <h3>How long is a workshop?</h3>
            <p>
              Most workshops can be completed in approximately 60–90 minutes,
              depending on the project and group.
            </p>
          </article>

          <article>
            <h3>Do students need STEM experience?</h3>
            <p>
              No. Students do not need previous STEM experience to participate.
            </p>
          </article>

          <article>
            <h3>Can a school request one?</h3>
            <p>
              Yes. Use our contact page to tell us about your school,
              organization, group, or event.
            </p>
          </article>
        </div>
      </section>

      <section className="workshops-final">
        <SectionLabel>READY TO BUILD?</SectionLabel>
        <h2>
          Let's make STEM
          <br />
          <span>hands-on.</span>
        </h2>
        <p>Tell us what you're looking for and we'll start the conversation.</p>
          <Link to="/request" className="button button-white">
          Request a Workshop →
        </Link>
      </section>
    </PageShell>
  );
}

export default Workshops;
