import React from "react";
import styles from "../../styles/greetings.module.css";
import Title from "../common/Title";

function Greetings() {
  return (
    <div className={styles.container}>
      <div className={styles.firstContainer}>
        <div className={styles.img1}>
          <img
            src="https://images.unsplash.com/photo-1717620378082-b2b48c2a8b93?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className={styles.img2}>
          <img
            src="https://images.unsplash.com/photo-1606337321936-02d1b1a4d5ef?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className={styles.clientsContainer}>
          <p>
            99 <sup>%</sup>
          </p>
          <p>Happy Clients</p>
        </div>
      </div>
      <div className={styles.secondContainer}>
        <Title title="Greetings From Our Home Interior Design Form" />
        <div className={styles.secondInner}>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora,
            incidunt.
          </p>
          <div className={styles.ulList}>
            <div>
              <i
                className="fa-solid fa-envelope"
                style={{ fontSize: "1.2rem" }}
              ></i>
            </div>
            <div>
              <div>43+ Winnings Awards</div>
              <div>Lorem ipsum dolor sit amet.</div>
            </div>
          </div>
          <div className={styles.ulList}>
            <div>
              <i
                class="fa-solid fa-calendar-days"
                style={{ fontSize: "1.2rem" }}
              ></i>
            </div>
            <div>
              <div>20+ Years of Experiance</div>
              <div>Lorem ipsum dolor sit amet.</div>
            </div>
          </div>
          <button>Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default Greetings;
