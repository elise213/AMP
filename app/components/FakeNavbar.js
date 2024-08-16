"use client";
import React, { useContext, useEffect } from "react";
import { Context } from "../context/appContext";
import Link from "next/link";
import styles from "../styles/navbar.css";

const FakeNavbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="fake-navbar">
        <Link
          href="/"
          passHref
          style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
        >
          <span className="amp">AMP</span>
          {/* <img src="/img/CCEA99.png" alt="CCEA Logo" className="navbar-logo" /> */}
        </Link>
      </div>
    </>
  );
};

export default FakeNavbar;
