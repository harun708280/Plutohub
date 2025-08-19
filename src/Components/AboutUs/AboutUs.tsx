"use client";
import dynamic from "next/dynamic";

import Drives from "./Drives/Drives";
import IndustriesServe from "./IndustriesServe/IndustriesServe";
import Services from "./AboutServices/AboutServices";
import Team from "./Team/Team";
import WeHelp from "./We-Help/WeHelp";
import WhyPlutohub from "./why/WhyPlutohub";

const Banner = dynamic(() => import("./Banner/Banner"), { ssr: false });
const AboutUs = () => {
  return (
    <div >
      <Banner />
      {/* <WeHelp /> */}
      <Services />
      <Drives />
      <WhyPlutohub />
      <IndustriesServe />
      <Team />
    </div>
  );
};

export default AboutUs;
