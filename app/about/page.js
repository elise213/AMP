import React from "react";
import Link from "next/link";
import styles from "./about.css";
import FakeNavBar from "../components/FakeNavbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <div className="about-page">
        <FakeNavBar />
        <div className="about-div">
          <span className="">
            Austin Multimedia Productions is a production company based in
            AUSTIN, TEXAS specializing in videography and photography services
            to help you market and manage your business. We work closely with
            our clients throughout the creative process to ensure we meet your
            expectations.
            <ul>
              <li>Video Production</li>
              <li>Digital and Film Photography</li>
              <li> Color Grading </li>
              <li>Music Composition</li>
              <li>Multicam Live Event Coverage</li>
            </ul>
          </span>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default About;
