"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./styles.css";
import GlowingFadedTextReveal from "@/components/glwoing-faded-text-reveal/glowing-faded-text-reveal";

export default function page() {
  return (
    <>
      <style></style>
      <div>
        <section className="hero">
          <img src="/chair3.jpg" alt="chair1" />
        </section>

        <section className="about">
          <h1>A new chapter is Engineered systems</h1>
          <div className="copy">
            <GlowingFadedTextReveal>
              <p>
                In an era defined by precision and speed, innovation reshapes
                the foundation of modern engineering. Engineered systems, the
                intricate dance of technology and design, are revolutionizing
                industries across the globe. From aerospace to automotive, these systems are the backbone of progress, driving efficiency, sustainability,
              </p>
            </GlowingFadedTextReveal>
          </div>
        </section>

        <section className="banner-img">
          <img src="/chair2.jpg" alt="chair1" />
        </section>

        <section className="services">
          <div className="service">
            <div className="col">
              <div className="service-copy">
                <h3>Precision Engineering</h3>
                <GlowingFadedTextReveal>
                  <p>
                    Our precision engineering solutions ensure the highest
                    standards of accuracy and quality in every project. a
                    commitment to excellence that drives us to deliver
                    exceptional results, meeting the unique needs of our clients
                    with meticulous attention to detail.
                  </p>
                </GlowingFadedTextReveal>
              </div>
            </div>
            <div className="col">
              <img src="/chair4.jpg" alt="" />
            </div>
          </div>
          <div className="service">
            <div className="col">
              <div className="service-copy">
                <h3>Precision Engineering</h3>
                <GlowingFadedTextReveal>
                  <p>
                    Our precision engineering solutions ensure the highest
                    standards of accuracy and quality in every project. a
                    commitment to excellence that drives us to deliver
                    exceptional results, meeting the unique needs of our clients
                    with meticulous attention to detail.
                  </p>
                </GlowingFadedTextReveal>
              </div>
            </div>
            <div className="col">
              <img src="/chair4.jpg" alt="" />
            </div>
          </div>
          <div className="service">
            <div className="col">
              <div className="service-copy">
                <h3>Precision Engineering</h3>
                <GlowingFadedTextReveal>
                  <p>
                    Our precision engineering solutions ensure the highest
                    standards of accuracy and quality in every project. a
                    commitment to excellence that drives us to deliver
                    exceptional results, meeting the unique needs of our clients
                    with meticulous attention to detail.
                  </p>
                </GlowingFadedTextReveal>
              </div>
            </div>
            <div className="col">
              <img src="/chair4.jpg" alt="" />
            </div>
          </div>
        </section>

        <section className="outro">
          <h1>Engineered systems, the future of innovation</h1>
          <GlowingFadedTextReveal>
            <p>
              As we look towards the future, engineered systems will continue to
              play a pivotal role in shaping the world around us. Their impact
              will be felt across all industries, driving progress and creating
              new possibilities. The journey ahead is filled with excitement and
              potential, and we are thrilled to be at the forefront of this
              exciting evolution.
            </p>
          </GlowingFadedTextReveal>
        </section>
      </div>
    </>
  );
}
