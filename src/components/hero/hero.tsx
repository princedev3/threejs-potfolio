"use client";
import { words } from "@/constant";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Button from "../button";
import HeroExperience from "./hero-experience";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  return (
    <section id="home" className="relative overflow-hidden text-white scroll-mt-28">
  
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/bg.png"
          alt="background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full gap-5 px-5 md:px-20 pt-10 pb-16">
        <header className="w-full lg:w-1/2 flex flex-col justify-center">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Crafting
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt="person"
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Live Projects</h1>
              <h1>that Deliver Results</h1>
            </div>

            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              Hi, I’m Prince, a developer based in Finland with a passion for
              code.
            </p>

            <Button

              text="Download CV"
              className="md:w-80 md:h-16 w-full h-12"
              id="counter"
            />
          </div>
        </header>

        <figure className="w-full lg:w-1/2 h-[300px] sm:h-[400px] md:h-[500px] flex justify-center items-center">
          <div className="w-full h-full">
            <HeroExperience />
          </div>
        </figure>
      </div>
    </section>
  );
};

export default Hero;
