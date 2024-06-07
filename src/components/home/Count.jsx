import React from "react";
import styles from "../../styles/home/counter.module.css";

function Count({ title, countValue }) {
  return (
    <div className={styles.countContainer}>
      <div className={styles.countInnerContainer}>
        <h1>{countValue}+</h1>
        <h2>{title}</h2>
      </div>
    </div>
  );
}

export default Count;
