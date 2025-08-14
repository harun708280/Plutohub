"use client";
import React, { useEffect, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";

import { gsap } from "gsap";
import Buttons from "../../Banner/Buttons";

const Banner = () => {
  const blubRef = useRef<HTMLImageElement>(null);
  

  useEffect(() => {
    // Animate "Design" by character with different animations for each
 

    // Drop and bounce animation for "Develop" - same for all characters
  

    // Loop color changes for "Dominate" every 7 seconds
   

    // Mouse move parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      const banner = document.querySelector(
        ".about_banner_area"
      ) as HTMLElement | null;
      if (banner) {
        banner.style.setProperty("--clientX", `${e.clientX}px`);
        banner.style.setProperty("--clientY", `${e.clientY}px`);
      }

      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const xPos = (clientX / innerWidth - 0.5) * 2;
      const yPos = (clientY / innerHeight - 0.5) * 2;

      if (blubRef.current) {
        gsap.to(blubRef.current, {
          duration: 0.8,
          x: xPos * 20,
          y: yPos * 15,
          rotation: xPos * 5,
          ease: "power2.out",
        });
      }

     
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="about_banner_area about">
      <div
        className="hero-image"
        style={{ backgroundImage: `url('/images/hero-bg.jpg')` }}
      ></div>
      <Image
        src="/images/AboutBannerEl.png"
        width={500}
        height={500}
        alt="screw"
        className="banner-center-img"
      />
      <Container className="pt">
        <Row className="d-flex justify-content-center align-items-center">
          <Col>
            <div className=" ">
              <h6>Home / About us</h6>
              <h2> We Help Brands Launch, Scale, And Lead Through Design</h2>
              <div className="optional_text d-flex flex-column align-items-center justify-content-center text-center">
                <p>
                  We Create Unique Digital Experiences For Global Brands By
                  Integrating AI, Innovative Design, And Advanced Technology.
                </p>
                <Buttons links="#" btnText="Let’s Explore Our Services" />
              </div>
            </div>
          </Col>
          <Col sm={3} className="d-flex justify-content-center align-items-center about_banner_image " style={{ opacity: 0.40 }}>
            <Image
              src="/images/about-p.png"
              width={290}
              height={355}
              alt="screw"
            />
          </Col>
        </Row>
      </Container>
      <div className="spotlight2"></div>
    </section>
  );
};

export default Banner;
