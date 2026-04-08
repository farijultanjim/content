"use client";

import Image from "next/image";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { cubicBezier } from "framer-motion";

const slideUp = {
  initial: {
    y: 300,
  },
  enter: {
    y: 0,
    transition: {
      duration: 0.6,
      ease: cubicBezier(0.33, 1, 0.68, 1),
      delay: 2.5,
    },
  },
};

export default function PortfolioHero() {
  const firstText = useRef();
  const secondText = useRef();
  const slider = useRef();
  const xPercentRef = useRef(0);
  const directionRef = useRef(-1);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const animate = () => {
      if (xPercentRef.current < -100) {
        xPercentRef.current = 0;
      } else if (xPercentRef.current > 0) {
        xPercentRef.current = -100;
      }
      gsap.set(firstText.current, { xPercent: xPercentRef.current });
      gsap.set(secondText.current, { xPercent: xPercentRef.current });
      requestAnimationFrame(animate);
      xPercentRef.current += 0.1 * directionRef.current;
    };

    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (directionRef.current = e.direction * -1),
      },
      x: "-500px",
    });

    requestAnimationFrame(animate);
  }, []);

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      animate="enter"
      className="relative flex items-center justify-center bg-[#95999D] h-[105vh] overflow-hidden"
    >
      <div className="h-full w-full ">
        <Image
          src="/heroImage_nobg.png"
          alt="hero"
          width={1920}
          height={1920}
          className="h-full w-full object-contain scale-140 md:scale-100 mt-15 "
        />
      </div>

      {/* texts */}
      <div className="absolute top-[calc(100vh-350px)]">
        <div ref={slider} className="relative whitespace-nowrap font-sans ">
          <p
            ref={firstText}
            className="relative m-0 text-white text-[110px] md:text-[200px] font-normal md:font-medium pr-12.5 "
          >
            Farijul Tanjim -
          </p>
          <p
            ref={secondText}
            className="absolute left-full top-0 m-0 text-white text-[110px] md:text-[200px] font-normal md:font-medium pr-12.5"
          >
            Farijul Tanjim -
          </p>
        </div>
      </div>
    </motion.div>
  );
}
