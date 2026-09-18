import React from "react";
import { PageShell, SectionLabel, PrimaryButton, ArrowLink } from "./PageParts";

const lessons = [
  {
    number: "01",
    title: "What Is Engineering?",
    topic: "ENGINEERING",
    description:
      "Learn how engineers identify problems, create solutions, test ideas, and improve designs.",
  },
  {
    number: "02",
    title: "Forces & Motion",
    topic: "PHYSICS",
    description:
      "Explore how forces affect objects and discover the physics behind motion.",
  },
  {
    number: "03",
    title: "Electricity Basics",
    topic: "ELECTRONICS",
    description:
      "Understand circuits, current, energy, and the basic parts that make electronics work.",
  },
  {
    number: "04",
    title: "How Rockets Fly",
    topic: "AEROSPACE",
    description:
      "Explore thrust, gravity, drag, and lift through the science of rockets and flight.",
  },
  {
    number: "05",
    title: "Design Thinking",
    topic: "DESIGN",
    description:
      "Practice turning problems into ideas and ideas into testable solutions.",
  },
  {
    number: "06",
    title: "Introduction to Robotics",
    topic: "ROBOTICS",
    description:
      "Discover how sensors, motors, programming, and mechanical design come together.",
  },
];

function Lessons() {
  return (
    <PageShell className="lessons-page">
      <section className="inner-hero lessons-hero">
        <SectionLabel>TECHIDS LESSONS</SectionLabel>
        <h1>
          Learn something.
          <br />
          <span>Then try it.</span>
        </h1>
        <p>
          Educational resources that turn STEM concepts into questions,
          experiments, projects, and ideas students can explore.
        </p>
      </section>

      <section className="lessons-feature section">
        <div className="lessons-feature-visual">
          <div className="lesson-diagram">
            <span>QUESTION</span>
            <b>→</b>
            <span>EXPERIMENT</span>
            <b>→</b>
            <span>DISCOVER</span>
          </div>
        </div>

        <div>
          <SectionLabel>LEARN BY DOING</SectionLabel>
          <h2>
            A lesson should
            <br />
            lead somewhere.
          </h2>
          <p>
            Our lesson ideas are designed to give students more than facts.
            They provide a starting point for exploration and hands-on
            problem-solving.
          </p>
          <PrimaryButton to="/contact">Talk to Techids →</PrimaryButton>
        </div>
      </section>

      <section className="lessons-library section">
        <div className="section-heading-row">
          <div>
            <SectionLabel>LESSON LIBRARY</SectionLabel>
            <h2>
              Pick a topic.
              <br />
              <span>Start exploring.</span>
            </h2>
          </div>
          <p>
            These are examples of the types of STEM concepts Techids can turn
            into student-friendly learning experiences.
          </p>
        </div>

        <div className="lesson-grid">
          {lessons.map((lesson) => (
            <article className="lesson-card" key={lesson.number}>
              <div className="lesson-card-top">
                <span>{lesson.number}</span>
                <SectionLabel>{lesson.topic}</SectionLabel>
              </div>
              <h3>{lesson.title}</h3>
              <p>{lesson.description}</p>
              <ArrowLink to="/contact">Learn more</ArrowLink>
            </article>
          ))}
        </div>
      </section>

      <section className="lessons-teachers">
        <div className="section">
          <SectionLabel>FOR EDUCATORS</SectionLabel>
          <h2>
            Resources that
            <br />
            <span>support curiosity.</span>
          </h2>
          <p>
            Techids can work with teachers and organizations to develop
            hands-on activities that fit their students, classroom, or event.
          </p>
          <PrimaryButton to="/contact">Contact Techids →</PrimaryButton>
        </div>
      </section>
    </PageShell>
  );
}

export default Lessons;
