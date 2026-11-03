import React from "react";
import { PageShell, SectionLabel, PrimaryButton } from "./PageParts";

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
          Techids is a student-led nonprofit, built by students for
          students, making STEM hands-on and accessible for kids.
        </p>
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

      <section className="about-cta">
        <SectionLabel>WHAT'S NEXT?</SectionLabel>
        <h2>
          See what we're
          <br />
          <span>building.</span>
        </h2>
        <div className="button-row center">
          <PrimaryButton to="/workshops">Explore Workshops →</PrimaryButton>
        </div>
      </section>
    </PageShell>
  );
}

export default About;
