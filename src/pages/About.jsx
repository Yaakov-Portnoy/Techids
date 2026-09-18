import React from "react";
import { Link } from "react-router-dom";
import {
  PageShell,
  SectionLabel,
  PrimaryButton,
  SecondaryButton,
  ArrowLink,
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
          Techids is a student-led nonprofit STEM education organization
          designed to make science, technology, engineering, and mathematics
          accessible, engaging, and hands-on for children.
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
            Techids was created around a simple idea: STEM becomes more
            exciting when students get to experience it for themselves.
          </p>
          <p>
            Our student leaders develop workshops, projects, lessons, and
            educational experiences that encourage younger students to ask
            questions and try building things of their own.
          </p>
          <p>
            We are working to grow from local hands-on programs into a broader
            STEM-learning network serving schools, community organizations,
            families, and individual students.
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
                <p>
                  Students should have opportunities to experiment, build, and
                  learn through doing.
                </p>
              </div>
            </article>

            <article>
              <span>02</span>
              <div>
                <h3>Accessible STEM</h3>
                <p>
                  STEM should feel welcoming and understandable, not distant
                  or intimidating.
                </p>
              </div>
            </article>

            <article>
              <span>03</span>
              <div>
                <h3>Student leadership</h3>
                <p>
                  Students can create meaningful educational opportunities for
                  other students.
                </p>
              </div>
            </article>

            <article>
              <span>04</span>
              <div>
                <h3>Keep improving</h3>
                <p>
                  Great engineering and great learning both come from testing,
                  learning, and trying again.
                </p>
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
            Jacob and Asher are the student leaders doing the day-to-day work
            of developing Techids. Our adult Board of Directors provides
            governance, oversight, guidance, and supervision.
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
                Helps lead Techids projects, website development, workshops,
                and the organization's student-focused direction.
              </p>
            </div>
          </article>

          <article className="team-card team-student">
            <div className="team-photo team-photo-asher">
              <span>AH</span>
            </div>
            <div className="team-card-content">
              <span className="team-role">STUDENT LEADER</span>
              <h3>Asher Heusman</h3>
              <p>
                Helps lead Techids programs and works with Jacob to develop
                hands-on STEM experiences for younger students.
              </p>
            </div>
          </article>

          <article className="team-card team-adult">
            <div className="team-photo">
              <span>DH</span>
            </div>
            <div className="team-card-content">
              <span className="team-role">ADULT BOARD</span>
              <h3>Danny Hoisman</h3>
              <p>
                Serves as an adult member of Techids' Board of Directors.
              </p>
            </div>
          </article>

          <article className="team-card team-adult">
            <div className="team-photo">
              <span>DP</span>
            </div>
            <div className="team-card-content">
              <span className="team-role">ADULT BOARD</span>
              <h3>David Portnoy</h3>
              <p>
                Serves as an adult member of Techids' Board of Directors.
              </p>
            </div>
          </article>

          <article className="team-card team-adult">
            <div className="team-photo">
              <span>RH</span>
            </div>
            <div className="team-card-content">
              <span className="team-role">ADULT BOARD</span>
              <h3>Rachel Hoisman</h3>
              <p>
                Serves as an adult member of Techids' Board of Directors.
              </p>
            </div>
          </article>

          <article className="team-card team-advisor">
            <div className="team-photo">
              <span>SM</span>
            </div>
            <div className="team-card-content">
              <span className="team-role">ADVISOR</span>
              <h3>Sam Muttkadapa</h3>
              <p>
                Supports Techids with guidance as an advisor to the student
                leadership.
              </p>
            </div>
          </article>
        </div>
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
            Techids, Inc. is organized for charitable and educational purposes,
            including expanding access to engaging, hands-on STEM education,
            programs, workshops, courses, mentoring, curriculum, projects,
            equipment, resources, community outreach, partnerships, and related
            educational opportunities.
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
