import React from "react";
import styles from "./style.module.scss";
import PortfolioButton from "@/components/buttons";

const HeroSection = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.hero_box}>
          <div className={styles.title_box}>
            <h1 className={styles.intro}>
              Creating beautiful and engaging digital experiences through clean
              and maintainable code.
            </h1>{" "}
            <br /> <br />
            <p className={styles.desc}>
              Hi, I&apos;m Urah Abraham - A software developer specialized in the frontend who stays updated
              with the latest technologies to deliver high-performance websites
              good for the users and the project.
            </p>
            <br /> <br />
            <div>
              <PortfolioButton label="CONTACT ME" variant="outline" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
