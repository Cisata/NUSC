import { useEffect } from "react";

export default function useScrollFade() {
  useEffect(() => {
    const root = document.documentElement;
    const revealElements = [...document.querySelectorAll(".reveal")];
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (revealElements.length === 0 || reducedMotion || !("IntersectionObserver" in window)) {
      revealElements.forEach((element) => element.classList.add("reveal--visible"));
      return undefined;
    }

    root.classList.add("scroll-fade-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("reveal--visible", entry.isIntersecting);
        });
      },
      { rootMargin: "-12% 0px -12% 0px", threshold: 0.08 },
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      root.classList.remove("scroll-fade-ready");
      revealElements.forEach((element) => element.classList.remove("reveal--visible"));
    };
  }, []);
}