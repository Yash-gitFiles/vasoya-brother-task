import React from "react";
import styles from "../../styles/common/title.module.css";

function Title({ title }) {
  return (
    <div className={styles.container}>
      <p>{title}</p>
    </div>
  );
}

export default Title;
