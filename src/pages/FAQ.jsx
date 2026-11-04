import React from "react";
import { PageShell, SectionLabel } from "./PageParts";

const faqs = [
  {
    question: "Who runs Techids?",
    answer:
      "Techids is student-led and adult-governed — students run the workshops and teach the lessons, with adult oversight behind the scenes.",
  },
  {
    question: "Who are the workshops for?",
    answer:
      "Students of all ages. Most of our workshops have an elementary-level version and a middle-school-level version, so the material fits the group.",
  },
  {
    question: "How do we book a workshop?",
    answer:
      'Go to the Contact page and fill out the "Request a Workshop" section with your school or group details, and we\'ll follow up with you.',
  },
  {
    question: "Is there a cost?",
    answer:
      "Reach out through the Contact page and we'll go over details, including cost, for your group.",
  },
  {
    question: "Can I get involved as a volunteer or partner?",
    answer:
      "Yes — use the Contact page to let us know how you'd like to get involved, and we'll reach out.",
  },
  {
    question: "Are the take-home kits available yet?",
    answer:
      "Not yet. Visit the Kits page for a preview of what's coming, and contact us if you'd like to be notified when they launch.",
  },
];

function FAQ() {
  return (
    <PageShell className="faq-page">
      <section className="inner-hero faq-hero">
        <SectionLabel>FREQUENTLY ASKED QUESTIONS</SectionLabel>
        <h1>
          Got questions?
          <br />
          <span>We've got answers.</span>
        </h1>
      </section>

      <section className="faq-list section">
        {faqs.map((faq) => (
          <details className="faq-item" key={faq.question}>
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </section>
    </PageShell>
  );
}

export default FAQ;
