import React from "react";
import ServicesOffered from "./ServicesOffered";
import styles from "../../styles/serviceOffered.module.css";
import Title from "../common/Title";

function ServicesOfferedRow() {
  const data = [
    {
      title: "Interior Decoration",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, aut!",
      icon: "fa-solid fa-book",
    },
    {
      title: "Interior Decoration",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, aut!",
      icon: "fa-solid fa-house",
    },
    {
      title: "Interior Decoration",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, aut!",
      icon: "fa-solid fa-paint-roller",
    },
  ];

  const component = data.map((value, index) => {
    return <ServicesOffered key={index} value={value} />;
  });
  return (
    <div>
      <Title title="The Services We Offered" />
      <div className={styles.container}>{component}</div>
    </div>
  );
}

export default ServicesOfferedRow;
