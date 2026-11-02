import React from "react";
import {
  PageShell,
  SectionLabel,
  PrimaryButton,
  SecondaryButton,
} from "./PageParts";

function About() {
  return (
    <PageShell className="about-page">
      <section className="inner-hero">
        <SectionLabel>ABOUT TECHIDS</SectionLabel>
        <h1>
          Making STEM
          <br />
          <span>something you do.</span>
        </h1>
        <p>
          Techids is a student-led nonprofit making STEM hands-on and
          accessible for kids.
        </p>
      </section>

      <section className="about-story section">
        <div className="story-side">
          <span>01</span>
          <SectionLabel>WHO WE ARE</SectionLabel>
        </div>

        <div className="story-content">
          <h2>
            Built by students
            <br />
            <span>for students.</span>
          </h2>
          <p>
            STEM is more exciting when you get to experience it yourself.
            Our student leaders build workshops, projects, and lessons that
            encourage younger students to ask questions and build things of
            their own.
          </p>
          <p>
            We're growing from local hands-on programs into a broader
            STEM-learning network for schools, families, and students.
          </p>
        </div>
      </section>

      <section className="about-values">
        <div className="section values-inner">
          <div>
            <SectionLabel>WHAT WE BELIEVE</SectionLabel>
            <h2>
              Curiosity is
              <br />
              <span>the beginning.</span>
            </h2>
          </div>

          <div className="values-list">
            <article>
              <span>01</span>
              <div>
                <h3>Hands-on first</h3>
                <p>Students learn best by experimenting and building.</p>
              </div>
            </article>

            <article>
              <span>02</span>
              <div>
                <h3>Accessible STEM</h3>
                <p>STEM should feel welcoming, not intimidating.</p>
              </div>
            </article>

            <article>
              <span>03</span>
              <div>
                <h3>Student leadership</h3>
                <p>Students creating meaningful opportunities for students.</p>
              </div>
            </article>

            <article>
              <span>04</span>
              <div>
                <h3>Keep improving</h3>
                <p>Great engineering and learning both come from trying again.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="about-team section">
        <div className="section-heading-row">
          <div>
            <SectionLabel>OUR TEAM</SectionLabel>
            <h2>
              Student-led.
              <br />
              <span>Adult-governed.</span>
            </h2>
          </div>

          <p>
            Jacob Portnoy and Asher Hoisman lead the day-to-day work of
            building Techids.
          </p>
        </div>

        <div className="team-grid">
          <article className="team-card team-student">
            <div className="team-photo team-photo-jacob">
              <span>JP</span>
            </div>
            <div className="team-card-content">
              <span className="team-role">STUDENT LEADER</span>
              <h3>Jacob Portnoy</h3>
              <p>
                Leads Techids projects, website development, and workshops.
              </p>
            </div>
          </article>

          <article className="team-card team-student">
            <div className="team-photo team-photo-asher">
              <span>AH</span>
            </div>
            <div className="team-card-content">
              <span className="team-role">STUDENT LEADER</span>
              <h3>Asher Hoisman</h3>
              <p>
                Leads Techids programs and hands-on STEM experiences for
                younger students.
              </p>
            </div>
          </article>
        </div>

        <p className="about-oversight">
          Techids operates under the oversight of parents and legal
          guardians of legal age, and follows a formal set of bylaws that
          govern how the organization is run.
        </p>
      </section>

      <section className="about-purpose section">
        <div className="purpose-number">02</div>
        <div className="purpose-content">
          <SectionLabel>OUR PURPOSE</SectionLabel>
          <h2>
            Give the next
            <br />
            generation a chance
            <br />
            to <span>build.</span>
          </h2>
          <p>
            Techids, Inc. is organized for charitable and educational
            purposes: hands-on STEM programs, workshops, mentoring,
            curriculum, equipment, and community partnerships.
          </p>
        </div>
      </section>

      <section className="about-cta">
        <SectionLabel>WHAT'S NEXT?</SectionLabel>
        <h2>
          See what we're
          <br />
          <span>building.</span>
        </h2>
        <div className="button-row center">
          <PrimaryButton to="/workshops">Explore Workshops →</PrimaryButton>
          <SecondaryButton to="/contact">Contact Us</SecondaryButton>
        </div>
      </section>
    </PageShell>
  );
}

export default About;
