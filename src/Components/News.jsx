import { Expo } from "gsap";
import { motion } from "motion/react";
import React from "react";

function News() {
  return (
    <div className=" relative z-[4] h-[55vh] md:h-[45vh] lg:h-[90vh] flex flex-col py-12 lg:px-20 md:px-12 sm:px-8 px-6 items-center w-full bg-white">
      <div className="workinprogress">
        <div className="workinmotion flex gap-2">
          <svg
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="icon w-3"
            data-v-669b4a84=""
          >
            <path
              d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
              fill="currentColor"
              data-v-669b4a84=""
            ></path>
          </svg>
          <h3 className="text-md font-[light]">In the media</h3>
        </div>
      </div>
      <div className="heading md:text-8xl lg:text-[10vw] text-6xl text-center my-5">
        <h1 className="overflow-hidden">
          <motion.span
            initial={{ opacity: 0, rotate: 90, y: "40%" }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, rotate: 0, y: "0%" }}
            transition={{ duration: 0.65, ease: Expo.easeOut }}
            className="inline-block origin-left"
          >
            Spread{" "}
          </motion.span>
        </h1>
        <h1 className="overflow-hidden">
          <motion.span
            initial={{ opacity: 0, rotate: 90, y: "40%" }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, rotate: 0, y: "0%" }}
            transition={{ delay: 0.1, duration: 0.65, ease: Expo.easeOut }}
            className="inline-block origin-left"
          >
            the News{" "}
          </motion.span>
        </h1>
      </div>
      <div className="para w-[80%]  lg:w-[35%]   md:w-[50%] py-4 text-pretty text-center ">
        <p className="text-lg lg:text-2xl leading-[1.2]">
          Find out more about our work on these leading design and technology
          platforms.
        </p>
      </div>
      <div className="link w-fit md:mt-5 cursor-pointer mt-2 border-b-2 border-b-[#10101022]">
        <h3 className="text-xs lg:text-lg font-[light] md:text-xs">
          Browse all news
        </h3>
      </div>
    </div>
  );
}

export default News;
