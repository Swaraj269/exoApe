import { Expo } from "gsap";
import { motion } from "motion/react";
import React from "react";
function Landing() {
  return (
    <div className="h-[130vh] relative z-[4] lg:h-[240vh] relative w-full  ">
      <div className="bgphoto h-full w-full overflow-hidden">
        <img
          data-scroll
          data-scroll-speed="-1"
          className="h-full w-full object-cover object-top"
          src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/2400x3395/filters:quality(90)"
          alt=""
        />
      </div>
      <div className="landingoverlay lg:pb-36 lg:px-20 md:px-12 lg:gap-16 sm:px-8 px-4 pb-24 gap-10 text-white font-[light] flex flex-col justify-end absolute top-0 h-full w-full ">
        <div className="paratext ml-2 lg:ml-5 text-pretty lg:text-[1.8vw] font-[400] md:text-[2.5vw] sm:text-[3vw] text-[4vw] leading-[1.2]">
          <p className="overflow-hidden">
            {" "}
            <motion.span
              initial={{ opacity: 0, rotate: 90, y: "100%" }}
              animate={{ opacity: 1, rotate: 0, y: "0%" }}
              transition={{ duration: 0.8, ease: Expo.easeOut }}
              className="inline-block origin-left"
            >
              Global digital design studio partnering with{" "}
            </motion.span>{" "}
          </p>
          <p className="overflow-hidden">
            {" "}
            <motion.span
              initial={{ opacity: 0, rotate: 90, y: "100%" }}
              animate={{ opacity: 1, rotate: 0, y: "0%" }}
              transition={{ delay: 0.1, duration: 0.8, ease: Expo.easeOut }}
              className="inline-block origin-left"
            >
              brands and businesses that create exceptional
            </motion.span>{" "}
          </p>
          <p className="overflow-hidden">
            {" "}
            <motion.span
              initial={{ opacity: 0, rotate: 90, y: "100%" }}
              animate={{ opacity: 1, rotate: 0, y: "0%" }}
              transition={{ delay: 0.2, duration: 0.8, ease: Expo.easeOut }}
              className="inline-block origin-left"
            >
              experiences where people live, work, and unwind.{" "}
            </motion.span>{" "}
          </p>
        </div>
        <div className="landing-text lg:leading-[0.94]  leading-[1] text-[15vw]">
          <h1 className="overflow-hidden py-4 lg:py-5">
            {" "}
            <motion.span
              initial={{ opacity: 0, rotate: 90, y: "100%" }}
              animate={{ opacity: 1, rotate: 0, y: "0%" }}
              transition={{ duration: 0.5, ease: Expo.easeOut }}
              className="inline-block origin-left"
            >
              Digital{" "}
            </motion.span>{" "}
          </h1>
          <h1 className="overflow-hidden py-4 lg:py-5  -mt-7  ">
            {" "}
            <motion.span
              initial={{ opacity: 0, rotate: 90, y: "100%" }}
              animate={{ opacity: 1, rotate: 0, y: "0%" }}
              transition={{ delay: 0.1, duration: 0.5, ease: Expo.easeOut }}
              className="inline-block origin-left"
            >
              Design{" "}
            </motion.span>{" "}
          </h1>
          <h1 className="overflow-hidden py-4 lg:py-5  -mt-7  ">
            {" "}
            <motion.span
              initial={{ opacity: 0, rotate: 90, y: "100%" }}
              animate={{ opacity: 1, rotate: 0, y: "0%" }}
              transition={{ delay: 0.2, duration: 0.5, ease: Expo.easeOut }}
              className="inline-block origin-left"
            >
              Experience{" "}
            </motion.span>{" "}
          </h1>
        </div>
        <div className="secondparatext ml-2 lg:ml-5 font-[200] lg:mt-7 lg:w-[50%] lg:text-[1.8vw] md:w-[75%] text-pretty font-[400] md:text-[2.5vw] sm:text-[3vw] text-[4vw] mt-4 leading-[1.2]">
          <p>
            We help experience-driven companies thrive by making their audience
            feel the refined intricacies of their brand and product in the
            digital space. Unforgettable journeys start with a click.
          </p>
        </div>
        <div className="link cursor-pointer border-b-2 lg:text-[1.2vw] ml-2 lg:ml-5 w-fit md:text-[1.8vw] sm:text-[2vw] text-[3vw]">
          <a>The Studio</a>
        </div>
      </div>
    </div>
  );
}

export default Landing;
