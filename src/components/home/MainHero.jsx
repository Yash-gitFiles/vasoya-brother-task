import React from "react";
import styles from "../../styles/mainHero.module.css";

function MainHero() {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.mainContainer}>
        <img
          src="https://images.unsplash.com/photo-1717620378082-b2b48c2a8b93?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />

        <div className={styles.descContainer}>
          <h1>Let's Redesign Your Interipor Design Right Now</h1>
          <p>Greetings From Our Home's Interior Design Website</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit,
            molestias soluta. Consectetur quidem alias impedit vero suscipit
            beatae in magnam?
          </p>
          <div className={styles.btn}>
            <button>Our Services</button>
            <button style={{ background: "white", color: "#d15b3e" }}>
              Our Works
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainHero;
