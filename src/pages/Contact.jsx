import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { PageShell, SectionLabel } from "./PageParts";
import { submit } from "../api";

const topics = [
  { key: "workshop", label: "Request a Workshop", endpoint: "/workshops" },
  { key: "involved", label: "Get Involved", endpoint: "/get-involved" },
  { key: "general", label: "General Question", endpoint: "/contact" },
];

function topicFromHash(hash) {
  if (hash === "#workshop") return "workshop";
  if (hash === "#involved") return "involved";
  return "general";
}

function Contact() {
  const location = useLocation();
  const [topic, setTopic] = useState(() => topicFromHash(location.hash));
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const current = topics.find((t) => t.key === topic);

  function switchTopic(key) {
    setTopic(key);
    setSubmitted(false);
    setError("");
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setLoading(true);
    try {
      await submit(current.endpoint, Object.fromEntries(new FormData(event.currentTarget)));
      setSubmitted(true);
    } catch (reason) {
      setError(reason.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <PageShell className="contact-page">
      <section className="inner-hero contact-hero">
        <SectionLabel>CONNECT WITH TECHIDS</SectionLabel>
        <h1>
          Let's start a
          <br />
          <span>conversation.</span>
        </h1>
        <p>
          Request a workshop, volunteer or partner with us, or just ask a
          question. One form, right here.
        </p>
      </section>

      <section className="contact-section section">
        <div className="contact-info">
          <SectionLabel>WHAT ARE YOU HERE FOR?</SectionLabel>
          <h2>
            Pick what fits
            <br />
            <span>best.</span>
          </h2>

          <div className="topic-switch" role="tablist" aria-label="What you're contacting Techids about">
            {topics.map((t) => (
              <button
                key={t.key}
                type="button"
                role="tab"
                aria-selected={topic === t.key}
                className={`topic-tab ${topic === t.key ? "active" : ""}`}
                onClick={() => switchTopic(t.key)}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="contact-detail">
            <span>01</span>
            <div>
              <strong>Schools & workshops</strong>
              <p>Bring hands-on STEM to your students.</p>
            </div>
          </div>
          <div className="contact-detail">
            <span>02</span>
            <div>
              <strong>Volunteers & partners</strong>
              <p>Help us expand access to STEM.</p>
            </div>
          </div>
          <div className="contact-detail">
            <span>03</span>
            <div>
              <strong>General questions</strong>
              <p>Have an idea or something to ask?</p>
            </div>
          </div>
        </div>

        <div className="contact-form-card">
          {submitted ? (
            <div className="form-success">
              <div className="success-icon">✓</div>
              <h2>Thanks — we got it.</h2>
              <p>The Techids team will review your message and follow up.</p>
              <button
                type="button"
                className="button button-primary"
                onClick={() => setSubmitted(false)}
              >
                Send another message
              </button>
            </div>
          ) : topic === "workshop" ? (
            <form onSubmit={handleSubmit}>
              <label>
                School or organization
                <input name="school" required placeholder="School or organization name" />
              </label>
              <div className="form-row">
                <label>
                  Contact name
                  <input name="name" required placeholder="Your name" />
                </label>
                <label>
                  Email
                  <input name="email" type="email" required placeholder="you@example.com" />
                </label>
              </div>
              <div className="form-row">
                <label>
                  Phone
                  <input name="phone" type="tel" placeholder="Optional" />
                </label>
                <label>
                  Approximate group size
                  <input name="students" type="number" min="1" placeholder="e.g. 25" />
                </label>
              </div>
              <div className="form-row">
                <label>
                  Preferred date
                  <input name="preferredDate" type="date" />
                </label>
                <label>
                  Workshop interest
                  <select name="workshopType" defaultValue="Engineering">
                    <option>Engineering</option>
                    <option>Robotics</option>
                    <option>Physics</option>
                    <option>Electronics</option>
                    <option>Design</option>
                    <option>Custom / not sure</option>
                  </select>
                </label>
              </div>
              <label>
                Tell us more
                <textarea name="message" rows="5" placeholder="What would you like students to experience?" />
              </label>
              {error && <p className="form-error" role="alert">{error}</p>}
              <button type="submit" className="button button-primary" disabled={loading}>
                {loading ? "Submitting…" : "Submit Workshop Request →"}
              </button>
            </form>
          ) : topic === "involved" ? (
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <label>
                  Name
                  <input name="name" required placeholder="Your name" />
                </label>
                <label>
                  Email
                  <input name="email" type="email" required placeholder="you@example.com" />
                </label>
              </div>
              <div className="form-row">
                <label>
                  Phone
                  <input name="phone" type="tel" placeholder="Optional" />
                </label>
                <label>
                  How would you like to help?
                  <select name="involvementType" defaultValue="Volunteer">
                    <option>Volunteer</option>
                    <option>School or educator</option>
                    <option>Student</option>
                    <option>Community partner</option>
                    <option>Sponsor or donor</option>
                    <option>Other</option>
                  </select>
                </label>
              </div>
              <label>
                School or organization
                <input name="organization" placeholder="Optional" />
              </label>
              <label>
                Message
                <textarea name="message" rows="5" placeholder="Tell us a little about your interest..." />
              </label>
              {error && <p className="form-error" role="alert">{error}</p>}
              <button className="button button-primary" disabled={loading}>
                {loading ? "Sending…" : "Get Involved →"}
              </button>
            </form>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <label>
                  Name
                  <input name="name" required placeholder="Your name" />
                </label>
                <label>
                  Email
                  <input name="email" type="email" required placeholder="you@example.com" />
                </label>
              </div>
              <label>
                Subject
                <select name="subject" defaultValue="A general question">
                  <option>A general question</option>
                  <option>A school partnership</option>
                  <option>A partnership</option>
                  <option>Other</option>
                </select>
              </label>
              <label>
                Message
                <textarea name="message" rows="6" required placeholder="Tell us a little about what you need..." />
              </label>
              {error && <p className="form-error" role="alert">{error}</p>}
              <button type="submit" className="button button-primary" disabled={loading}>
                {loading ? "Sending…" : "Send Message →"}
              </button>
            </form>
          )}
        </div>
      </section>
    </PageShell>
  );
}

export default Contact;
