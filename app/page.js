'use client'
import React, { useContext, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Video from "../app/components/Video";
import styles from './globals.css';
import { Context } from './context/appContext';
import MovieCard from './components/MovieCard';
import FrontPageCard from './components/FrontPageCard';
import Image from 'next/image';

const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <main className={styles.main}>
      <div className="home-body">
        <div className="welcome">
          <Video />
        </div>
        <div className="scroll-search-results">
          <ul style={{ listStyleType: "none" }}>
            {store.movies.map((result, i) => (
              <li key={i}>
                <div>
                  {/* <Image
                    src="https://asset.cloudinary.com/dc9mjjs2a/6eccc473d5a6d346cfc7684e4d28cbaf"
                    width={300}
                    height={450}
                    alt=""></Image> */}
                  <FrontPageCard id={i} result={result} />
                </div>
              </li>
            ))}
          </ul>
        </div>
        {/* <div className='category'>
          <span className='category-title'>SUSPENSE</span>
        </div>
        <div className="scroll-search-results">
          <ul style={{ listStyleType: "none" }}>
            {store.movies
              .filter((movie) => movie.category === "suspense")
              .map((result, i) => (
                <li key={i}>
                  <div>
                    <FrontPageCard result={result} />
                  </div>
                </li>
              ))}
          </ul>
        </div>
        <div className='category'>
          <span className='category-title'>HORROR</span>
        </div>
        <div className="scroll-search-results">
          <ul style={{ listStyleType: "none" }}>
            {store.movies
              .filter((movie) => movie.category === "horror")
              .map((result, i) => (
                <li key={i}>
                  <div>
                    <FrontPageCard result={result} />
                  </div>
                </li>
              ))}
          </ul>
        </div>
        */}
      </div>


    </main>
  )
}
export default Home;
