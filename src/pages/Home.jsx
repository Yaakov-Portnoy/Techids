import React from "react";
import { Link } from "react-router-dom";
import {
  PageShell,
  SectionLabel,
  PrimaryButton,
  SecondaryButton,
  ArrowLink,
} from "./PageParts";

function Home() {
  return (
    <PageShell className="home-page">
      <section className="home-hero">
        <div className="home-hero-copy">
          <div className="hero-pill">
            <span className="hero-pill-dot" />
            Student-Led STEM Education
          </div>

          <h1>
            Kids don't just
            <br />
            <span>learn STEM.</span>
            <br />
            They <span>build it.</span>
          </h1>

          <p>Hands-on STEM education, built and led by students.</p>

          <div className="button-row">
            <PrimaryButton to="/workshops">Explore Workshops →</PrimaryButton>
            <SecondaryButton to="/about">Learn About Techids</SecondaryButton>
          </div>
        </div>

        <div className="home-hero-visual" aria-label="STEM creativity graphic">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbit orbit-three" />

          <div className="hero-core">
            <span>TECHIDS</span>
            <strong>STEM</strong>
            <small>+ CREATIVITY</small>
          </div>

          <div className="floating-card card-engineer">
            <span>⚙️</span>
            <strong>ENGINEER</strong>
          </div>

          <div className="floating-card card-create">
            <span>💡</span>
            <strong>CREATE</strong>
          </div>

          <div className="floating-card card-imagine">
            <span>🚀</span>
            <strong>IMAGINE</strong>
          </div>

          <div className="floating-card card-build">
            <span>🔧</span>
            <strong>BUILD</strong>
          </div>
        </div>
      </section>

      <section className="home-intro section">
        <div className="home-intro-number">01</div>
        <div>
          <SectionLabel>WHY TECHIDS?</SectionLabel>
          <h2>
            STEM should feel
            <br />
            <span>possible.</span>
          </h2>
          <p className="large-copy">
            Kids learn best by turning an idea into something real. Techids
            gives them the chance to build, experiment, and discover what
            they can do.
          </p>
        </div>
      </section>

      <section className="home-programs section">
        <div className="section-heading-row">
          <div>
            <SectionLabel>WHAT WE DO</SectionLabel>
            <h2>
              Learn.
              <br />
              <span>Build.</span>
              <br />
              Discover.
            </h2>
          </div>
          <p>Practical ways for students to experience STEM.</p>
        </div>

        <div className="program-grid">
          <article className="program-card program-card-blue">
            <span className="program-number">01</span>
            <div>
              <h3>Workshops</h3>
              <p>Students build and experiment together.</p>
              <ArrowLink to="/workshops">Explore workshops</ArrowLink>
            </div>
          </article>

          <article className="program-card">
            <span className="program-number">02</span>
            <div>
              <h3>Lessons</h3>
              <p>STEM concepts explained in plain language.</p>
              <ArrowLink to="/lessons">Explore lessons</ArrowLink>
            </div>
          </article>

          <article className="program-card">
            <span className="program-number">03</span>
            <div>
              <h3>Community</h3>
              <p>Partnerships that bring STEM to more students.</p>
              <ArrowLink to="/get-involved">Get involved</ArrowLink>
            </div>
          </article>
        </div>
      </section>

      <section className="home-feature section">
        <div className="feature-image feature-image-workshop">
          <div className="image-overlay-label">HANDS-ON LEARNING</div>
        </div>

        <div className="feature-copy">
          <SectionLabel>THE TECHIDS APPROACH</SectionLabel>
          <h2>
            Don't just
            <br />
            <span>watch.</span>
          </h2>
          <p>
            Students get a challenge, build a solution, test it, and improve
            it — the same process real engineers use.
          </p>
          <PrimaryButton to="/workshops">See Our Workshops →</PrimaryButton>
        </div>
      </section>

      <section className="home-stats">
        <div>
          <strong>STEM</strong>
          <span>Science · Technology · Engineering · Mathematics</span>
        </div>
        <div>
          <strong>BUILD</strong>
          <span>Learn through projects and experimentation</span>
        </div>
        <div>
          <strong>GROW</strong>
          <span>Give students confidence to keep exploring</span>
        </div>
      </section>

      <section className="home-cta">
        <SectionLabel>START SOMETHING</SectionLabel>
        <h2>
          Let's make
          <br />
          STEM <span>hands-on.</span>
        </h2>
        <p>Students, teachers, and schools — there's a way to get involved.</p>
        <div className="button-row center">
          <PrimaryButton to="/get-involved">Get Involved →</PrimaryButton>
          <SecondaryButton to="/contact">Contact Techids</SecondaryButton>
        </div>
      </section>
    </PageShell>
  );
}

export default Home;
