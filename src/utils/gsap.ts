"use client"
import { useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ActiveType, useActiveSection } from "@/utils"; // adjust path


gsap.registerPlugin(ScrollTrigger);

export function useGsapSectionTracker(sections: ActiveType[]) {
  const setActive = useActiveSection((s) => s.setActive);

  useLayoutEffect(() => {
    sections.forEach((sectionId) => {
      ScrollTrigger.create({
        trigger: `#${sectionId}`,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActive(sectionId),
        onEnterBack: () => setActive(sectionId),
        // Optional:
        // markers: true,
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [sections, setActive]);
}
