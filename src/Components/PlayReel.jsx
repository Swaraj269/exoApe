import gsap, { Power4 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);
function PlayReel() {
  const parent = useRef();
  const videoRef = useRef();
  const textRef = useRef();
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: parent.current,
        pin: true,
        start: "top 0%",
        end: "top -100%",
        scrub: 1,
        ease: Power4,
      },
    });
    tl.to(
      videoRef.current,
      {
        scale: 4,
      },
      "a"
    ).to(
      textRef.current,
      {
        gap: "1vw",
        fontSize: "2vw",
      },
      "a"
    );
  }, []);
  return (
    <div
      ref={parent}
      className="h-screen relative z-[4] overflow-hidden  w-full lg:py-12 bg-[#0D0E13] lg:px-20 md:px-12 sm:px-8 px-6 flex items-center flex-col justify-between py-20 "
    >
      <div className="workinprogress ">
        <div className="workinmotion flex gap-2">
          <svg
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="icon text-white w-3"
            data-v-669b4a84=""
          >
            <path
              d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
              fill="currentColor"
              data-v-669b4a84=""
            ></path>
          </svg>
          <h3 className="text-white text-md font-[light]">Work in motion</h3>
        </div>
      </div>
      <div className="playreel relative">
        <div className="video absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] sm:h-96 sm:w-72 w-44 lg:w-96 lg:h-auto aspect-video  ">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            src="https://player.vimeo.com/progressive_redirect/playback/914803778/rendition/1080p/file.mp4?loc=external&log_user=0&signature=5344c0e4fea63ca54bb433621ca0be7b9470b475583fa68b26de2b6e380a390a"
            className="w-full opacity-[0.8] h-full object-cover"
          ></video>
        </div>
        <h1
          ref={textRef}
          className="flex relative z-[3] lg:gap-[45vw] text-white sm:gap-60 gap-28"
        >
          <div className="play lg:text-[10vw]  text-7xl font-[light]">Play</div>
          <div className="reel lg:text-[10vw]   text-7xl font-[light] ">
            Reel
          </div>
        </h1>
      </div>
      <div className="workinprogresspara flex justify-center">
        <p className="text-center lg:text-sm lg:w-[60%] sm:w-[50%] text-white text-md text-pretty leading-[1.3]">
          Our work is best experienced in motion. Don't forget to put on your
          headphones.
        </p>
      </div>
    </div>
  );
}

export default PlayReel;
