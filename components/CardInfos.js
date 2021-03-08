import React from "react";
import styles from "../styles/Cards.module.css";
import { BsCheckCircle } from "react-icons/bs";

export default function CardInfos({ text }) {
  return (
    <div className={styles.cardMain}>
      {text.aboutTopFeatures.map((feature, index) => (
        <div
          style={{ animationDelay: `${index}s` }}
          className={styles.cardContainer}
          key={index}
        >
          <h3>
            <BsCheckCircle /> {feature.title}
          </h3>
          <span>{feature.desc}</span>
        </div>
      ))}
    </div>
  );
}
