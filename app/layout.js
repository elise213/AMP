"use client";
import React from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import injectContext from "./context/appContext";
const inter = Inter({ subsets: ["latin"] });
import "font-awesome/css/font-awesome.min.css";
import SEO from "./components/SEO";

function RootLayout({ children }) {
  return (
    <html>
      <head>
        <meta property="og:title" content="Austin Multimedia Productions" />
        <meta
          property="og:description"
          content="Austin Multimedia Productions"
        />
        <meta property="og:image" content="/img/AMP-mask.png" />
      </head>
      <body className={inter.className}>
        <div className="wrapper">
          <Navbar />
          <main className="content">{children}</main>
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}

export default injectContext(RootLayout);
