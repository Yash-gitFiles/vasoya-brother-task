import React from "react";
import Count from "./Count";
import styles from "../../styles/home/counter.module.css";

function CountRow() {
  const data = [
    { countValue: 550, title: "House Design" },
    { countValue: 23, title: "Our Partner" },
    { countValue: 64, title: "House Package" },
    { countValue: 20, title: "Years of Experiance" },
  ];

  const componet = data.map((value, index) => {
    return (
      <Count key={index} countValue={value.countValue} title={value.title} />
    );
  });
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>{componet}</div>
    </div>
  );
}

export default CountRow;
