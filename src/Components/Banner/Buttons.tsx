"use client";

import React from "react";
import { HiArrowUp } from "react-icons/hi";
import Link from "next/link";

const Buttons = ({ btnText = "Explore more", links = "/" }) => {
  return (
    <a href={links} target="_blank" className="theme_btn">{btnText} <div className="arrow_icon"><HiArrowUp/></div></a>
  );
};

export default Buttons;
