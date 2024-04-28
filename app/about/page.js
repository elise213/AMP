import React from "react";
import Link from "next/link";
import styles from "./about.css";
import Image from "next/image";
import FakeNavBar from "../components/FakeNavbar";

const About = () => {
  return (
    <>
      <FakeNavBar />
      <div className="about-container">
        <div className="about">
          <span className="">
            The Center for Cinematic and Experimental Arts is a nonprofit
            501(c)3 offering workshops, fiscal-sponsorship, and legal consulting
            for independent artists.
          </span>
        </div>
      </div>
    </>
  );
};

export default About;
