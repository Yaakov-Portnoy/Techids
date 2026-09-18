import React from "react";
import { Link } from "react-router-dom";
import { PageShell, SectionLabel } from "./PageParts";

function NotFound() {
  return (
    <PageShell className="not-found-page">
      <section className="not-found">
        <SectionLabel>404</SectionLabel>
        <h1>
          This page
          <br />
          <span>isn't built yet.</span>
        </h1>
        <p>
          The page you're looking for doesn't exist at this address.
        </p>
        <Link to="/" className="button button-primary">
          Back to Home →
        </Link>
      </section>
    </PageShell>
  );
}

export default NotFound;
