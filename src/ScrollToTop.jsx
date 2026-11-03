import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// React Router does not reset scroll position on navigation by default, so
// clicking a link while scrolled down on one page lands mid-page on the next.
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
