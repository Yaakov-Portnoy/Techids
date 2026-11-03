import React from "react";
import { PageShell, SectionLabel, PrimaryButton } from "./PageParts";

// Add a real video by setting youtubeId to the video's ID (the part of the
// URL after "v="). Leave it null and the card shows a "coming soon" state.
const lessons = [
  {
    number: "01",
    title: "What Is Engineering?",
    topic: "ENGINEERING",
    youtubeId: null,
  },
  {
    number: "02",
    title: "Forces & Motion",
    topic: "PHYSICS",
    youtubeId: null,
  },
  {
    number: "03",
    title: "Electricity Basics",
    topic: "ELECTRONICS",
    youtubeId: null,
  },
  {
    number: "04",
    title: "Design Thinking",
    topic: "DESIGN",
    youtubeId: null,
  },
];

function LessonVideo({ youtubeId, title }) {
  if (youtubeId) {
    return (
      <div className="lesson-video">
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }
  return (
    <div className="lesson-video lesson-video-placeholder">
      <span>▶</span>
      <p>Video coming soon</p>
    </div>
  );
}

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
          Short videos of us teaching real engineering concepts, with hands-on
          ideas to try yourself.
        </p>
      </section>

      <section className="lessons-library section">
        <div className="section-heading-row">
          <div>
            <SectionLabel>LESSON LIBRARY</SectionLabel>
            <h2>
              Pick a topic.
              <br />
              <span>Start watching.</span>
            </h2>
          </div>
        </div>

        <div className="lesson-grid">
          {lessons.map((lesson) => (
            <article className="lesson-card" key={lesson.number}>
              <LessonVideo youtubeId={lesson.youtubeId} title={lesson.title} />
              <div className="lesson-card-top">
                <span>{lesson.number}</span>
                <SectionLabel>{lesson.topic}</SectionLabel>
              </div>
              <h3>{lesson.title}</h3>
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
            Techids can work with teachers and organizations to fit these
            lessons to their classroom or event.
          </p>
          <PrimaryButton to="/workshops">Explore Workshops →</PrimaryButton>
        </div>
      </section>
    </PageShell>
  );
}

export default Lessons;
