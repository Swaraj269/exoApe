import gsap, { Power4 } from "gsap";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function Images() {
  const parent = useRef();
  const first = useRef();
  const second = useRef();
  const third = useRef();
  const forth = useRef();
  useEffect(() => {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: parent.current,
        start: "top 90%",
        scrub: 1,
        ease: Power4,
      },
    });
    tl.to(
      first.current,
      {
        x: "-40%",
      },
      "a"
    )
      .to(
        second.current,
        {
          x: "40%",
        },
        "a"
      )
      .to(
        third.current,
        {
          x: "-20%",
        },
        "a"
      )
      .to(
        forth.current,
        {
          x: "30%",
        },
        "a"
      );
  });
  return (
    <div
      ref={parent}
      className="h-[70vh]  relative z-[4] lg:h-[160vh] w-full  bg-white overflow-hidden flex flex-col items-center justify-center"
    >
      <div className="imagediv lg:h-[50vw] mt-[-10%] lg:mt-[-17%] lg:w-[25%] md:h-96 md:w-56  relative h-72 w-40">
        <div
          ref={first}
          className="absoluteimages absolute left-[-75%] top-[30%] lg:w-96  md:w-56 w-36 aspect-video"
        >
          <video
            autoPlay
            muted
            loop
            src="https://a.storyblok.com/f/133769/x/9c433c7aac/home-news-diesel-be-a-follower.mp4"
          ></video>
        </div>
        <div
          ref={second}
          className="absoluteimages absolute md:right-[-30%] right-[-25%] top-[10%] lg:h-72 lg:w-52 md:h-32 md:w-24 h-24 w-16 "
        >
          <img
            className="h-full w-full object-cover"
            src="https://a.storyblok.com/f/133769/348x494/21becfd449/home-news-3.jpg/m/1200x1703/filters:quality(90)"
            alt=""
          />
        </div>
        <div
          ref={third}
          className="absoluteimages absolute md:w-60 md:h-32 lg:w-[30vw] lg:h-72  w-44 h-24 top-[80%] left-[-100%] "
        >
          <img
            className="h-full w-full object-cover"
            src="https://a.storyblok.com/f/133769/758x508/8a1ff60d00/home-news-4.jpg/m/1200x804/filters:quality(90)"
            alt=""
          />
        </div>
        <div
          ref={forth}
          className="absoluteimages absolute right-[-80%] top-[85%] lg:h-96 aspect-auto md:h-52 h-40"
        >
          <video
            muted
            autoPlay
            loop
            className="h-full w-full object-cover"
            src="https://a.storyblok.com/f/133769/x/88b4bf7989/news-rino-pelle.mp4"
          ></video>
        </div>
        <img
          className="h-full w-full object-cover"
          src="https://a.storyblok.com/f/133769/748x1278/5784aa7150/home-news-1.jpg/m/1200x2050/filters:quality(90)"
          alt=""
        />
      </div>
    </div>
  );
}

export default Images;
