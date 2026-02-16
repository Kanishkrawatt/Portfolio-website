/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  AboutPageContainer,
  AboutPara,
  AboutMe,
  AboutContent,
  AboutImg,
} from "./aboutComponents";
import { ShowMore } from "../Project/Task/TaskComponents";
import Link from "next/link";
import ScrollAnimation from "../ScollAnimation/ScrollAnimation";

function About({ data }) {
  const ScrollElements = ["AboutMe", "AboutImg", "AboutPara", "Resume"];
  ScrollAnimation(ScrollElements);
  return (
    <section id="About">
      <AboutPageContainer>
        <AboutMe id="AboutMe">About</AboutMe>
        <AboutContent>
          <AboutImg id="AboutImg">
            <Image
              src="/Profile.png"
              alt="img"
              fill
              sizes="(max-width: 480px) 100vw, (max-width: 768px) 100vw, 33vw"
            />
          </AboutImg>
          <AboutPara id="AboutPara">
            {data.AboutPara}
            <Link
              style={{ textDecoration: "none", color: "black" }}
              href={`${data.Resume}`}
              target="_blank"
            >
              <ShowMore id="Resume" color="#D9F8C4">
                Resume
              </ShowMore>
            </Link>
          </AboutPara>
        </AboutContent>
      </AboutPageContainer>
    </section>
  );
}

export default About;
