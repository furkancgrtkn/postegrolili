import React, { useState, useEffect } from "react";
import useScrollPosition from "../hooks/useScrollPosition.js";
import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { CgMenuRight, CgClose } from "react-icons/cg";
export default function Navbar({ navLinks }) {
  const [openMenu, setOpenMenu] = useState(false);
  const scrollPos = useScrollPosition();
  const [pos, setPos] = useState(false);
  useEffect(() => {
    setPos(scrollPos);
  }, [scrollPos]);
  return (
    <nav
      // style={
      //   pos && pos !== 0
      //     ? { background: "linear-gradient(90deg, #8e2de2 0%, #4a00e0 100%)" }
      //     : null
      // }
      className={pos > 2 ? styles.nvbScroll : styles.navbar}
    >
      <div className={styles.navbarInner}>
        <div className={styles.navbarLeft}>
          <div className={styles.navLogo}>
            <Image
              quality={65}
              layout="fill"
              src="/images/logo.png"
              alt="Postegro"
            />
          </div>
          <Link href="/">
            <a>
              <h1>POSTEGRO</h1>
            </a>
          </Link>
        </div>
        <ul className={styles.navLinks}>
          {navLinks
            ? navLinks.slice(0, 3).map((link, index) => (
                <Link key={index} href={link.href}>
                  <a>
                    <li>{link.name}</li>
                  </a>
                </Link>
              ))
            : null}
          <Link href="/" locale={navLinks[3].href}>
            <a>
              <li>{navLinks[3].name}</li>
            </a>
          </Link>
        </ul>
        <div className={styles.mobileMenu}>
          {openMenu ? (
            <CgClose
              onClick={() => {
                setOpenMenu(!openMenu);
                // window.scrollTo(0, 2);
              }}
            />
          ) : (
            <CgMenuRight
              onClick={() => {
                setOpenMenu(!openMenu);
                // window.scrollTo(0, 2);
              }}
            />
          )}

          {openMenu ? (
            <ul className={styles.mobileNavLinks}>
              {navLinks
                ? navLinks.slice(0, 3).map((link, index) => (
                    <Link key={index} href={link.href}>
                      <a>
                        <li
                          onClick={() => {
                            setOpenMenu(!openMenu);
                            // window.scrollTo(0, 2);
                          }}
                        >
                          {link.name}
                        </li>
                      </a>
                    </Link>
                  ))
                : null}
              <Link href="/" locale={navLinks[3].href}>
                <a>
                  <li
                    onClick={() => {
                      setOpenMenu(!openMenu);
                      // window.scrollTo(0, 2);
                    }}
                  >
                    {navLinks[3].name}
                  </li>
                </a>
              </Link>
            </ul>
          ) : null}
        </div>
      </div>
    </nav>
  );
}
