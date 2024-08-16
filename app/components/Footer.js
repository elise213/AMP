"use client";
import React, { useContext, useState, useEffect } from "react";
import styles from "../styles/footer.css";
import { Context } from "../context/appContext";
import EmailList from "./EmailList";
import Link from "next/link";

const Footer = () => {
  const { store, actions } = useContext(Context);
  const [isNavOpen, setIsNavOpen] = useState(store.isNaVOpen);

  useEffect(() => {
    setIsNavOpen(store.isNavOpen);
  }, [store.isNavOpen]);

  return (
    <footer>
      <div className="footer-div-1">
        <div className="sitemap">
          <Link href="/" passHref>
            HOME
          </Link>
          <Link href="/services" passHref>
            SERVICES
          </Link>
          <Link href="/about" passHref>
            ABOUT
          </Link>
          <Link href="/contact" passHref>
            CONTACT
          </Link>
        </div>
        <div className="footer-div-2">
          <div className="socials">
            <p>FOLLOW</p>
            <Link href="https://www.linkedin.com/in/michael-garza-5792581b0/">
              <i className="fa-brands fa-linkedin" />
            </Link>
          </div>
          <EmailList />
        </div>
      </div>
      <p className="footer-text">AUSTIN MULTIMEDIA PRODUCTIONS</p>
    </footer>
  );
};

export default Footer;
