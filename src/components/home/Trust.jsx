import React from "react";
import styles from "../../styles/trust.module.css";
import Title from "../common/Title";

function Trust() {
  return (
    <>
      <Title title="we are Exerts in interior Design, So Trust Us" />
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <div className={styles.cardContainer}>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consequatur asperiores, quasi quibusdam in accusantium quisquam
              maxime ducimus ratione rerum minima.
            </p>
          </div>
          <div className={styles.imagesContainer}>
            <div>
              <img
                src="https://images.unsplash.com/photo-1717620378082-b2b48c2a8b93?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="aaa"
              />
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1717620378082-b2b48c2a8b93?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="aaa"
              />
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1717620378082-b2b48c2a8b93?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="aaa"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Trust;
