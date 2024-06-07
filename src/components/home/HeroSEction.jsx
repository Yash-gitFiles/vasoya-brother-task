import React from "react";
import styles from "../../styles/heroSection.module.css";

function HeroSEction() {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.mainContainer}>
        <img
          src="https://images.unsplash.com/photo-1717620378082-b2b48c2a8b93?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <div className={styles.descContainer}>
          <h1>Let's Redesign Your Interipor Design Right Now</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus et
            sint, dicta aliquid facere officia cum qui omnis quod sequi?
          </p>
          <button>Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default HeroSEction;
