import { useEffect, useRef } from "react";

export function useReveal(options = {}) {
  const ref = useRef(null);
  const {
    threshold = 0.15,
    rootMargin = "0px 0px -8% 0px",
    once = true,
  } = options;
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      { threshold, rootMargin },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);
  return ref;
}

export function useRevealGroup(options = {}, deps = []) {
  const ref = useRef(null);
  const { threshold = 0.1, rootMargin = "0px 0px -8% 0px" } = options;
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const children = Array.from(el.querySelectorAll(".reveal"));
    if (typeof IntersectionObserver === "undefined") {
      children.forEach((c) => c.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin },
    );
    children.forEach((c) => observer.observe(c));
    // Fallback: if observer never fires (e.g. already in view during filter),
    // force visible after a tick so filtered cards can never stay hidden.
    const fallback = setTimeout(() => {
      children.forEach((c) => {
        const r = c.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) c.classList.add("is-visible");
      });
    }, 100);
    return () => {
      clearTimeout(fallback);
      observer.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [threshold, rootMargin, ...deps]);
  return ref;
}
