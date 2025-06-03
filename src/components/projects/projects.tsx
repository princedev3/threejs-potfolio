"use client"
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div  id="work" className="scroll-mt-28">
    <h1 className="text-3xl mt-10 capitalize  text-white-50 grid justify-center w-fit rounded-2xl py-3 px-4 font-semibold mx-auto bg-black-50">works</h1>
     <div id="work"  ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <Link href={"https://entobo.com/"} target="_blank" ref={rydeRef} className="first-project-wrapper cursot-pointer">
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="Ryde App Interface" />
            </div>
            <div className="text-content">
              <h2 className="text-2xl">
               Entobo combines relationship management, team collaboration, and service delivery into one smart, unified platform
              </h2>
            </div>
          </Link>

          <div className="project-list-wrapper overflow-hidden">
            <Link href={"https://www.goziri.com/"} target="_blank" className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/project2.png"
                  alt="Library Management Platform"
                />
              </div>
              <h2>
Health Insurance
Management Platform
              </h2>
            </Link>

            <Link href={"https://www.lollycollection.store/"} target="_blank" className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/project3.png" alt="YC Directory App" />
              </div>
              <h2>Lolly Collections.. Where Fashion meets taste</h2>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Projects