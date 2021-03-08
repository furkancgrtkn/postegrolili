import styles from "../styles/Footer.module.css";
import Image from "next/image";
import { DiAndroid } from "react-icons/di";
import { IoIosArrowForward } from "react-icons/io";
import { TiSocialInstagram } from "react-icons/ti";
import { TiSocialYoutubeCircular } from "react-icons/ti";

import Link from "next/link";
import { Modal } from "semantic-ui-react";

export default function Footer({ text }) {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerTop}>
        <div className={styles.footerLogo}>
          <Image
            quality={65}
            layout="fill"
            src="/images/logo.png"
            alt="Postegro"
          />
        </div>
        <h4>{text.footerTopTitles[0]}</h4>
        <h3>{text.footerTopTitles[1]}</h3>
        <div className={styles.footerTopButton}>
          <DiAndroid />
          <Link href="https://play.google.com/store/apps/details?id=com.folpostegro&hl=en">
            <a>{text.footerTopButtons[1]}</a>
          </Link>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className={styles.footerBottomLeft}>
          <div className={styles.footerLogo}>
            <Image
              quality={65}
              layout="fill"
              src="/images/logo.png"
              alt="Postegro"
            />
          </div>
          <p>{text.footerContactDescription}</p>
          <p>Email: {text.footerContactEmail}</p>
        </div>
        <div className={styles.footerBottomRight}>
          <ul>
            <h4>{text.footerTitleList[0]}</h4>
            {text.footerServicesList.map((list, index) => (
              <li key={index}>
                <IoIosArrowForward />
                <Link href={list.href}>
                  <a>{list.name}</a>
                </Link>
              </li>
            ))}
          </ul>
          <ul>
            <h4>{text.footerTitleList[1]}</h4>

            <Modal
              size="large"
              closeIcon
              trigger={
                <li>
                  <IoIosArrowForward />
                  <span>{text.footerSupportList[0]}</span>
                </li>
              }
            >
              {text.policy.map((pol, index) => (
                <div key={index} className={styles.polCss}>
                  <h6>{pol.title}</h6>
                  <p>{pol.desc}</p>
                </div>
              ))}
            </Modal>

            <Modal
              size="large"
              closeIcon
              trigger={
                <li>
                  <IoIosArrowForward />
                  <span>{text.footerSupportList[1]}</span>
                </li>
              }
            >
              {text.terms.map((pol, index) => (
                <div key={index} className={styles.polCss}>
                  <h6>{pol.title}</h6>
                  <p>{pol.desc}</p>
                </div>
              ))}
            </Modal>
          </ul>
        </div>
      </div>
      <div className={styles.footerCopyRight}>
        <p>
          {text.footerCopyRight[0]}{" "}
          <Link href="/">
            <a>Postegro</a>
          </Link>
          {text.footerCopyRight[1]}postegro
        </p>
        <ul>
          <li>
            <Link href="/">
              <a>
                <TiSocialInstagram />
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>
                <TiSocialYoutubeCircular style={{ paddingRight: "2px" }} />
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
