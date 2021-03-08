import React, { useState, useEffect } from "react";

import styles from "../styles/AppGallery.module.css";
import Image from "next/image";
import { BiFullscreen } from "react-icons/bi";
import { IoEllipsisHorizontalOutline } from "react-icons/io5";

import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { EffectCoverflow, Navigation } from "swiper";
import "swiper/swiper-bundle.css";

SwiperCore.use([EffectCoverflow, Navigation]);

export default function AppGallery({ text }) {
  const [perView, setPerView] = useState(5);

  useEffect(() => {
    window.innerWidth < 1520 ? setPerView(3) : null;
    window.innerWidth < 920 ? setPerView(1) : null;
  }, []);

  return (
    <div className={styles.galleryContainer}>
      <h1>{text.appScreenShot}</h1>
      <div className={styles.gallerySvg}>
        <IoEllipsisHorizontalOutline />
        <IoEllipsisHorizontalOutline />
        <BiFullscreen />
        <IoEllipsisHorizontalOutline />
        <IoEllipsisHorizontalOutline />
      </div>
      <div className={styles.gallerySwiper}>
        <Swiper
          className="gallerySwiper"
          loop
          navigation
          slidesPerView={perView}
          effect="coverflow"
        >
          <SwiperSlide>
            <div className={styles.screenShotImg}>
              <Image
                quality={65}
                layout="fill"
                src="/images/ss1.jpeg"
                alt="Postegro"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.screenShotImg}>
              <Image
                quality={65}
                layout="fill"
                src="/images/ss2.jpeg"
                alt="Postegro"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.screenShotImg}>
              <Image
                quality={65}
                layout="fill"
                src="/images/ss3.jpeg"
                alt="Postegro"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.screenShotImg}>
              <Image
                quality={65}
                layout="fill"
                src="/images/ss4.jpeg"
                alt="Postegro"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.screenShotImg}>
              <Image
                quality={65}
                layout="fill"
                src="/images/ss3.jpeg"
                alt="Postegro"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
