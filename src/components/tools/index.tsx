import React from "react";
import styles from "./style.module.scss";
import { Tools } from "./tools";


const PortfolioTools  = () => {
  return (
    <div className={styles.tools_box}>
      <div className={styles.tools_cont}>
        {Tools.map((item, idx) => (
          <div key={idx} className={styles.tools_btn}>
            {item.tool}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioTools;
