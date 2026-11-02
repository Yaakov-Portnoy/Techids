import React from "react";
import { Link, NavLink } from "react-router-dom";

export function Header() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link to="/" className="site-logo" aria-label="Techids home">
          <img src="/techids-logo.png" alt="Techids" />
        </Link>

        <nav className="site-nav" aria-label="Main navigation">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/workshops">Workshops</NavLink>
          <NavLink to="/lessons">Lessons</NavLink>
          <NavLink to="/gallery">Gallery</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <Link to="/contact#involved" className="header-cta">
          Get Involved <span>→</span>
        </Link>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <img src="/techids-logo.png" alt="Techids" />
          </Link>
          <p>
            Student-led STEM education built around curiosity, creativity, and
            hands-on learning.
          </p>
        </div>

        <div className="footer-column">
          <h3>Explore</h3>
          <Link to="/about">About</Link>
          <Link to="/workshops">Workshops</Link>
          <Link to="/lessons">Lessons</Link>
          <Link to="/gallery">Gallery</Link>
        </div>

        <div className="footer-column">
          <h3>Get involved</h3>
          <Link to="/contact#involved">Get Involved</Link>
          <Link to="/contact#workshop">Request a Workshop</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Techids, Inc.</span>
        <span>Student-led. Adult-governed.</span>
      </div>
    </footer>
  );
}

export function PageShell({ children, className = "" }) {
  return (
    <div className={`page-shell ${className}`}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export function SectionLabel({ children }) {
  return <p className="section-label">{children}</p>;
}

export function PrimaryButton({ to, children }) {
  return (
    <Link to={to} className="button button-primary">
      {children}
    </Link>
  );
}

export function SecondaryButton({ to, children }) {
  return (
    <Link to={to} className="button button-secondary">
      {children}
    </Link>
  );
}

export function ArrowLink({ to, children }) {
  return (
    <Link to={to} className="arrow-link">
      {children} <span>→</span>
    </Link>
  );
}
