"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Context } from "./context/appContext";
import Video from "./components/Video";
import styles from "./globals.css";
import Image from "next/image";
import Link from "next/link";
import FakeNavBar from "./components/FakeNavbar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

const Home = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    const body = document.body;
    const className = "no-scroll";
    const homeBody = document.querySelector(".home-body");

    if (store.isNavOpen || store.showContactModal) {
      body.classList.add(className);
    } else {
      body.classList.remove(className);
    }

    if (homeBody) {
      if (store.isNavOpen || store.showContactModal) {
        homeBody.classList.add(className);
      } else {
        homeBody.classList.remove(className);
      }
    }
  }, [store.isNavOpen, store.showContactModal]);

  // useEffect(() => {
  //   if (store.modalIsOpen) {
  //     document.body.classList.add("modal-open");
  //   } else {
  //     document.body.classList.remove("modal-open");
  //   }
  //   return () => {
  //     document.body.classList.remove("modal-open");
  //   };
  // }, [store.modalIsOpen]);

  useEffect(() => {
    const body = document.body;
    if (store.isNavOpen || store.showContactModal) {
      body.classList.add("no-scroll");
    } else {
      body.classList.remove("no-scroll");
    }
  }, [store.isNavOpen, store.showContactModal]);

  return (
    <>
      <div className="home-body">
        <FakeNavBar />
        <div className="home-page-container">
          <svg width="0" height="0">
            <defs>
              <clipPath id="clip-shape" clipPathUnits="objectBoundingBox">
                <path d="M 0,0 L 1,0 L 1,1 Q 0.5,1 0,1 Z" />
              </clipPath>
            </defs>
          </svg>
          <div className="intro-text">
            <Video />
            <span className="description">
              Austin Multimedia Productions specializes in video production and
              Audio/Video systems to help you market and manage your business.
              We work closely with our clients throughout the planning and
              creative processes to ensure that our service exceeds your
              expectations.
            </span>
            <span className="description">
              Services Include:
              <ul>
                <li>Video Production (Including Editing and Color Grading)</li>
                <li>Audio/Video System design and installation</li>
              </ul>
            </span>
          </div>
          <iframe
            src="https://player.vimeo.com/video/989108526?h=63a653c155"
            width="640"
            height="360"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
          ></iframe>
          <span className="description">
            Mike Garza is an Austin based independent filmmaker and television
            producer. Over the last 12 years Mike has refined his talent working
            on independent film sets and producing live and pre-recorded
            television. In 2020, after 8 years working in the film industry in
            Los Angeles, Mike moved back to the capitol of his home state,
            Austin, Texas. Soon after relocating, Mike began working closely
            with producers at Austin Public (Austin’s public access station
            managed by the Austin Film Society) to plan, strategize, and execute
            their creative vision for broadcast television and online streaming.
            Mike’s expertise include audio, video, lighting, audio & video
            editing, color grading, podcast productions, and A/V systems
            installation.
          </span>
          <Contact />
          <div className="image-container">
            <Image
              height={100}
              width={100}
              layout="responsive"
              quality={100}
              className="amp-1"
              src="/img/amp1.png"
              alt=""
            ></Image>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default Home;
