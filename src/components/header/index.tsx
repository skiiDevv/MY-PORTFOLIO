"use client";
import React, { useState } from "react";
import styles from "./style.module.scss";
import { LogoIcon } from "../icons";
import NavMenu from "./nav-menu";
import { AnimatePresence, delay, motion } from "framer-motion";
import NavLinks from "./nav-links";

const PortfolioHeader = () => {
  const variant = {
    open: {
      width: "100%",
      height: "100vh",
      // left: "0px",
      top: "0px",
      right: "0px",
      borderRadius: 0,
      transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
    },
    closed: {
      height: 40,
      width: 100,
      borderRadius: 25,
      top: 8,
      // left: 0,
      right: "max(min(1.5534vw + 1.13592rem, 3rem))",
      transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
    },
  };

  const [isActive, setIsActive] = useState<boolean>(false);
  return (
    <nav className={styles.header} id="header">
      <div className={styles.nav_content}>
        <div className={styles.logo}>
          <LogoIcon
            color="var(--color-surface-white)"
            height={120}
            width={120}
          />
        </div>

        <motion.div
          variants={variant}
          animate={isActive ? "open" : "closed"}
          initial="closed"
          className={styles.menu}
        >
          <AnimatePresence>{isActive && <NavLinks />}</AnimatePresence>
        </motion.div>

        <div className={styles.btn}>
          <NavMenu isActive={isActive} setIsActive={setIsActive} />
        </div>

        {/* <motion.div
          variants={variant}
          animate={isActive ? "open" : "closed"}
          initial="closed"
          className={styles.menu}
        >
          <AnimatePresence>{isActive && <NavLinks />}</AnimatePresence>
        </motion.div> */}
      </div>
    </nav>
  );
};

export default PortfolioHeader;
