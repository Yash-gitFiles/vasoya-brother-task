import React from "react";
import styles from "../../styles/clientReview.module.css";
import Title from "../common/Title";

function ClientReviews() {
  return (
    <>
      <Title title="Greatest Client Reviews" />

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
              <div className={styles.icon}>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
                laudantium.
              </p>
              <div className={styles.imgDesc}>
                <div className={styles.imgContainer}>
                  <img
                    src="https://images.unsplash.com/photo-1717620378082-b2b48c2a8b93?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="aaa"
                  />
                </div>
                <div className={styles.contactContainer}>
                  <p>Mr.Loeem Lorem</p>
                  <p>+91 1234567890</p>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div className={styles.icon}>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minima, laudantium.
                </p>
                <div className={styles.imgDesc}>
                  <div className={styles.imgContainer}>
                    <img
                      src="https://images.unsplash.com/photo-1717620378082-b2b48c2a8b93?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="aaa"
                    />
                  </div>
                  <div className={styles.contactContainer}>
                    <p>Mr.Loeem Lorem</p>
                    <p>+91 1234567890</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ClientReviews;
