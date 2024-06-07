import React from "react";
import styles from "../../styles/work.module.css";

function Work() {
  return (
    <div className={styles.container}>
      <div className={styles.firstContainer}>
        <div className={styles.firstFirst}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            maiores nisi cupiditate dolorum, magnam vero.
          </p>
        </div>
        <div className={styles.firstSecond}>
          <div className={styles.imgContainer}>
            <img
              src="https://images.unsplash.com/photo-1717620378082-b2b48c2a8b93?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>

          <div className={styles.liItem}>
            <div className={styles.liInner}>
              <div>
                <i class="fa-solid fa-house"></i>
              </div>
              <div>
                <p>Lorem, ipsum.</p>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
              <div>
                <i class="fa-solid fa-house"></i>
              </div>
              <div>
                <p>Lorem, ipsum.</p>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
              <div>
                <i class="fa-solid fa-house"></i>
              </div>
              <div>
                <p>Lorem, ipsum.</p>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.secondContainer}>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium,
          accusamus.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quod
          enim sapiente quasi quidem asperiores?
        </p>
        <ul className={styles.ulList}>
          <li>Lorem, ipsum.</li>
          <li>Lorem, ipsum.</li>
          <li>Lorem, ipsum.</li>
          <li>Lorem, ipsum.</li>
        </ul>
      </div>
    </div>
  );
}

export default Work;
