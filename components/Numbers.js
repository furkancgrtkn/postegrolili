import React, { useState, useEffect } from "react";
import { Modal } from "semantic-ui-react";

import styles from "../styles/Numbers.module.css";
import Image from "next/image";
import { FiPlay } from "react-icons/fi";
import { HiOutlineInboxIn } from "react-icons/hi";
import { GiTrophyCup } from "react-icons/gi";
import { RiTeamLine } from "react-icons/ri";
import { FaRegThumbsUp } from "react-icons/fa";

export default function Numbers({ text }) {
  const [download, setDownload] = useState(0);
  const [achivement, setAchivement] = useState(0);
  const [visitor, setVisitor] = useState(0);
  const [review, setReview] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (download === 100) {
    } else {
      setTimeout(() => {
        setDownload(download + 1);
      }, 50);
    }
  }, [download]);

  useEffect(() => {
    if (achivement === 1000) {
    } else {
      setTimeout(() => {
        setAchivement(achivement + 1);
      }, 5);
    }
  }, [achivement]);

  useEffect(() => {
    if (visitor === 50) {
    } else {
      setTimeout(() => {
        setVisitor(visitor + 1);
      }, 100);
    }
  }, [visitor]);

  useEffect(() => {
    if (review === 10) {
    } else {
      setTimeout(() => {
        setReview(review + 1);
      }, 500);
    }
  }, [review]);

  return (
    <div style={{ backgroundColor: "#f5f9fb" }}>
      <div className={styles.numbersContainer}>
        <div className={styles.circleWrapper}>
          <div className={styles.circleImg}>
            <Image
              quality={65}
              layout="fill"
              src="/images/videoThumb.jpg"
              alt="Postegro"
            />
          </div>
          <FiPlay
            onClick={() => {
              setOpen(true);
            }}
          />
          <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            size="mini"
            className="ytModalContainer"
          >
            <div className={styles.ytModal}>
              <iframe
                src={`https://www.youtube.com/embed/nG3XckuhXhg`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
              />
            </div>
          </Modal>
          <span></span>
        </div>

        <div className={styles.numberBoxes}>
          <div className={styles.numberBox}>
            <HiOutlineInboxIn />
            <span className={styles.numberText}>{download}K+</span>
            <span className={styles.numberTitle}>{text.numbersTitles[0]}</span>
          </div>
          <div className={styles.numberBox}>
            <GiTrophyCup />
            <span className={styles.numberText}>{achivement}K+</span>
            <span className={styles.numberTitle}>{text.numbersTitles[1]}</span>
          </div>
          <div className={styles.numberBox}>
            <RiTeamLine />
            <span className={styles.numberText}>{visitor}K+</span>
            <span className={styles.numberTitle}>{text.numbersTitles[2]}</span>
          </div>
          <div className={styles.numberBox}>
            <FaRegThumbsUp />
            <span className={styles.numberText}>{review}K+</span>
            <span className={styles.numberTitle}>{text.numbersTitles[3]}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
