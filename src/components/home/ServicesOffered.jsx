import React from "react";
import styles from "../../styles/serviceOffered.module.css";

function ServicesOffered({ value }) {
  return (
    <div className={styles.cardContainer}>
      <i className={value.icon}></i>
      <p className={styles.title}>{value.title}</p>
      <p className={styles.desc}>{value.desc}</p>
      <button>Learn More</button>
    </div>
  );
}

export default ServicesOffered;
