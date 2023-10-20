import React, { useRef, useEffect } from "react";
import "../styles/video.css";

const Video = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, [videoRef]);

  return (
    <div
      className="video-container"
      style={{
        minHeight: "450px",
      }}
    >
      <div className="mask-reference"></div>
      <video autoPlay loop muted playsInline className="video" ref={videoRef}>
        <source src="/img/video1.mp4" type="video/mp4" />
        {/* <source src="https://www.youtube.com/watch?v=CTw1VFeYnHM" type="" /> */}
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
