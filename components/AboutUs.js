import React from "react";
import styles from "../styles/About.module.css";
import { BiFullscreen } from "react-icons/bi";
import { IoEllipsisHorizontalOutline } from "react-icons/io5";
import Image from "next/image";
import { BsBookmarkCheck } from "react-icons/bs";
import Link from "next/link";
export default function AboutUs({ text }) {
  return (
    <div className={styles.aboutBg}>
      <div className={styles.aboutUsMain}>
        <h2 style={{ paddingTop: 60 }}>{text.aboutPostegro}</h2>
        <div className={styles.aboutSvg}>
          <IoEllipsisHorizontalOutline />
          <IoEllipsisHorizontalOutline />
          <BiFullscreen />
          <IoEllipsisHorizontalOutline />
          <IoEllipsisHorizontalOutline />
        </div>
        <div className={styles.aboutUsContent}>
          <div className={styles.aboutUsContentL}>
            <div className={styles.aboutImg}>
              <Image layout="fill" src="/images/aboutsec.png" quality={65} />
            </div>
          </div>
          <div className={styles.aboutUsContentR}>
            <h3>{text.aboutPostegroTitle}</h3>
            <p>{text.aboutPostegroDescription}</p>
            <ul>
              {text.aboutPostegroList.map((list, index) => (
                <li key={index}>
                  <BsBookmarkCheck />
                  <span>{list}</span>
                </li>
              ))}
            </ul>
            <div className={styles.aboutDownBtn}>
              <Link href="https://play.google.com/store/apps/details?id=com.folpostegro&hl=en">
                <a>
                  <span>{text.aboutButton}</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
