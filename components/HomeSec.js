import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/Home.module.css";
import { DiAndroid } from "react-icons/di";
import { BiLinkExternal } from "react-icons/bi";

export default function HomeSec({ text }) {
  return (
    <section className={styles.homeMain}>
      <div className={styles.homeInner}>
        <div className={styles.homeLeft}>
          <h1>{text.homeTitle}</h1>
          <div className={styles.homeLeftBtns}>
            <Link href="https://play.google.com/store/apps/details?id=com.folpostegro&hl=en">
              <a>
                <span>
                  <DiAndroid />
                  {text.homeButtons[1]}
                </span>
              </a>
            </Link>
            <Link href="/">
              <a>
                <span className={styles.bgGreen}>
                  <BiLinkExternal />
                  {text.homeButtons[2]}
                </span>
              </a>
            </Link>
          </div>
          <div className={styles.homeLeftDesc}>
            {text.homeDescription.map((desc, index) => (
              <p key={index}>{desc}</p>
            ))}
          </div>
        </div>
        <div className="bgFancy">
          <div className={styles.mockImage}>
            <Image quality={50} layout="fill" src="/images/ssmockup.png" />
          </div>
          <div className="fancy-spinner">
            <div className="ring"></div>
            <div className="ring"></div>
            <div className="dot"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
