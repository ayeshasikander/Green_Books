import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Intro = () => {
  const introRef = useRef(null)
  useEffect(() => {
    const element = introRef.current;
    gsap.fromTo(element,
      {},
      {
        y:-200,
        opacity:0,
        duration: 0.5,
        ease: "power4",
        scrollTrigger:{
          trigger:element,
          scrub:true
          
        }
      });
  })


  return (
    <div className="bg-gray relative">
      <div className="mx-auto max-w-2xl py-5 sm:py-10 lg:py-20 lg:w-1/2">
        <div className="intro text-center px-5" ref={introRef}>
          <h1 className="font-italianno tracking-wide	font-bold text-[40px] text-white sm:text-6xl">
            Shaping the Future of Publishing
          </h1>
          <p className="mt-3 text-lg leading-8 text-white">

            Shaping the Future of Publishing:How Web Books Are Reshaping
            Literary
            Horizons. Unleashing Creativity: The Author's Guide to Digital
            Independence in
            Publishing.
          </p>
          <div className="mt-5 flex items-center justify-center gap-x-6">
            <a
              href="/aboutUs"
              className="text-md font-semibold leading-6 text-[#3d2312]"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
