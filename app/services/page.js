"use client";
import React, { useState, useEffect } from "react";
import FakeNavBar from "../components/FakeNavbar";
import Footer from "../components/Footer";
import styles from "./services.css";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";

const Services = () => {
  return (
    <div className="services-container">
      <FakeNavBar />
      <div className="services">
        <span>This is where services will be!</span>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
