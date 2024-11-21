import React from "react";
import styles from "./style.module.scss";
import { motion } from "framer-motion";

const NavMenu = ({
  isActive,
  setIsActive,
}: {
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div onClick={() => setIsActive(!isActive)} className={`${ isActive ? styles.active_btn : styles.btn}`}>
      <motion.div
        animate={{ top: isActive ? "-100%" : "0" }}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
        className={styles.slider}
      >
        <div className={styles.el}>Menu</div>

        <div className={styles.el}>Close</div>
      </motion.div>
    </div>
  );
};

export default NavMenu;
