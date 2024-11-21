import React from "react";
import styles from "./style.module.scss";
import { Links, SocialLinks } from "./links";
import { motion } from "framer-motion";

const NavLinks = () => {
  const perspective = {
    initial: {
      opacity: 0,
      rotateX: 90,
      translateY: 80,
      translateX: -20,
    },
    enter: (i: number) => ({
      opacity: 1,
      rotateX: 0,
      translateY: 0,
      translateX: 0,
      transition: {
        duration: 0.65,
        delay: 0.5 + i * 0.1,
      },
      ease: [0.215, 0.61, 0.355, 1],
    }),
    exit: {
      opacity: 0,
      transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
    },
  };
  const slideIn = {
    initial: {
      opacity: 0,
      y: 20,
    },
    enter: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.75 + i * 0.1,
      },
      ease: [0.215, 0.61, 0.355, 1],
    }),
    exit: {
      opacity: 0,
      transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <div className={styles.cont}>
      <div className={styles.links_box}>
        {Links.map((link, i) => {
          return (
            <div key={i} className={styles.link_cont}>
              <motion.ul
                custom={i}
                variants={perspective}
                animate="enter"
                exit="exit"
                initial="initial"
              >
                <li className={styles.links}>{link.title}</li>
              </motion.ul>
            </div>
          );
        })}
      </div>

      <div className={styles.social_box}>
        {SocialLinks.map((social, i) => {
          return (
            <motion.p
              key={`f_${i}`}
              custom={i}
              variants={slideIn}
              animate="enter"
              exit="exit"
              initial="initial"
            >
              {social.title}
            </motion.p>
          );
        })}
      </div>
    </div>
  );
};

export default NavLinks;
