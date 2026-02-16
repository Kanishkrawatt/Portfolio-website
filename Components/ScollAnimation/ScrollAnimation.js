/* eslint-disable react-hooks/exhaustive-deps */

import React, { useState, useEffect } from "react";
import useScrollPosition from "../Hooks/useScreen";
import getPosition from "../Hooks/getPosition";

const ScrollAnimation = (ScrollElements) => {
  const scrollValue = useScrollPosition();

  useEffect(() => {
    ScrollElements.forEach((element) => {
      const elem = document.getElementById(element);
      if (!elem) return; // Skip if element doesn't exist
      
      if (scrollValue > getPosition(element) - getPosition("About") + 100) {
        elem.style.opacity = "1";
        elem.style.transform = "translateY(0px)";
      } else {
        elem.style.opacity = "0";
        elem.style.transform = "translateY(100px)";
      }
    });
  }, [scrollValue]);
};

export default ScrollAnimation;
