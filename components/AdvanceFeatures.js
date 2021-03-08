import React, { useState, useEffect } from "react";

import styles from "../styles/AdvanceFeatures.module.css";
import Image from "next/image";
import { BiDonateHeart } from "react-icons/bi";
import { FaTools } from "react-icons/fa";
import { FaHandsHelping } from "react-icons/fa";
import { GiSandsOfTime } from "react-icons/gi";

import { IoEllipsisHorizontalOutline } from "react-icons/io5";
import { BiFullscreen } from "react-icons/bi";

export default function AdvanceFeatures({ text }) {
  const [className1, setClassName1] = useState(true);
  const [className2, setClassName2] = useState(false);
  // useEffect(() => {
  //   setInterval(() => {
  //     setClassName1(!className1);
  //     setClassName2(!className2);
  //   }, 5000);
  // });

  return (
    <div className={styles.featuresContainer}>
      <h1>{text.advanceFeatures}</h1>
      <div className={styles.featuresSvg}>
        <IoEllipsisHorizontalOutline />
        <IoEllipsisHorizontalOutline />
        <BiFullscreen />
        <IoEllipsisHorizontalOutline />
        <IoEllipsisHorizontalOutline />
      </div>
      <div className={styles.featuresBottom}>
        <ul className={styles.description}>
          <li>
            <div className={styles.svgContainer}></div>
            <BiDonateHeart />
            {text.advanceFeaturesList[0]}
          </li>
          <li>
            <div className={styles.svgContainer}></div>
            <FaTools />
            {text.advanceFeaturesList[1]}
          </li>
          <li>
            <div className={styles.svgContainer}></div>
            <FaHandsHelping />
            {text.advanceFeaturesList[2]}
          </li>
          <li>
            <div className={styles.svgContainer}></div>
            <GiSandsOfTime />
            {text.advanceFeaturesList[3]}
          </li>
        </ul>
        <div className={styles.rightWrapper}>
          <div
            className={
              className1
                ? "tm-service-image-1 is-visible"
                : "tm-service-image-1"
            }
          >
            <div className={styles.rightImg}>
              <Image
                quality={65}
                layout="fill"
                src="/images/ss1.jpeg"
                alt="Postegro"
              />
            </div>
          </div>
          <div
            className={
              className2
                ? "tm-service-image-2 is-visible"
                : "tm-service-image-2"
            }
          >
            <div className={styles.rightImg}>
              <Image
                quality={65}
                layout="fill"
                src="/images/ss3.jpeg"
                alt="Postegro"
              />
            </div>
          </div>
          <div className={styles.circles}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}
