import React from "react";
import Navbar from "./Components/Navbar";
import Landing from "./Components/Landing";
import Work from "./Components/Work";
import PlayReel from "./Components/PlayReel";
import Images from "./Components/Images";
import News from "./Components/News";
import Footer from "./Components/Footer";
import LocomotiveScroll from "locomotive-scroll";
function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="w-full min-h-screen bg-[#0D0E13]">
      <Navbar />
      <Landing />
      <Work />
      <PlayReel />
      <Images />
      <News />
      <Footer />
    </div>
  );
}

export default App;
