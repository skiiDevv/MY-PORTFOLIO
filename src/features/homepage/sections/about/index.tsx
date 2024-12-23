import React from "react";
import styles from "./style.module.scss";
import PortfolioTools from "@/components/tools";

const AboutSection = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.hero_box}>
          <div className={styles.title_box}>
            <h1 className={styles.title}>About</h1>
            <p>
              Hi I&apos;m Urah Abraham Negedu. If you haven&apos;t already
              gathered that by now, I&apos;m an architect turned Sowfware
              developer based in Abuja, Nigeria. I specialize in the frontend
              with over 19 months of experience building enganging, beautiful,
              responsive and accessible websites, primarily HTML, CSS,
              JavaScript and React, but I love building with whatever tools are
              right for the project.
              <br /> <br />
              Web development is hardly or never a solo effort, building and
              developing a functional and beautiful website requires
              collaboration with other team members needed for the project. One
              of my key strengths as a frontend developer is my ability to work
              collaboratively with teams. Whether I&apos;m collaborating
              with UX/UI designers to bring their creative vision to life,
              coordinating with backend developers to ensure seamless
              integration, or aligning with project managers to meet deadlines,
              I thrive in team environments. I make an effort to actively listen
              to feedback, share ideas, and proffer solutions that align with both
              the technical and creative goals of the project. My experience
              working in agile teams has taught me the importance of
              adaptability, prioritizing tasks, and supporting teammates to
              overcome blockers collectively to ensure the best outcomes for
              both the team and the product. Ultimately, my ability to
              collaborate effectively allows me to add to a positive team
              culture while delivering great frontend solutions that meet
              user and project needs.
              <br /> <br />
              Outside of work, I still love to create and improve things that
              don&apos;t exist or already exist. Any given free time you will
              find me reading or listening to materials that helps to strengthen
              my productivity.
            </p>
          </div>

          <div className={styles.tools}>
            <PortfolioTools />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
