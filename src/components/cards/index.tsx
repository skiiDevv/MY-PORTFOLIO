import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";

const PortfolioCard = () => {
  return (
    <div className={styles.card_section}>
      <div className={styles.card_box}>
        <Image src={""} alt="" />
      </div>
      <div className={styles.project}>
        <div className={styles.title_box}>
          <h3 className={styles.title}></h3>
          <div className={styles.role}></div>
        </div>
        <div className={styles.desc_box}>
          <p className={styles.desc}></p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
