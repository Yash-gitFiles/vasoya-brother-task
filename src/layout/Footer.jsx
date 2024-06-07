import React from "react";
import styles from "../styles/layout/footer.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.first}>
        <div className={styles.firstFirst}>
          <p>INTR</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Blanditiis, accusamus.
          </p>
          <div className={styles.iconContainer}>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-pinterest"></i>
          </div>
        </div>
        <div className={styles.firstSecond}>
          <div>
            <p>Quick Links</p>
          </div>
          <div>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Out Team Work</li>
              <li>Services</li>
              <li>Work Gallery</li>
            </ul>
          </div>
        </div>
        <div className={styles.firstThird}>
          <div>
            <p>Site Links</p>
          </div>
          <div>
            <ul>
              <li>Privacy Policy</li>
              <li>Disclaimer</li>
              <li>Term & Condition</li>
              <li>GDPR</li>
              <li>Cookie Used</li>
            </ul>
          </div>
        </div>
        <div className={styles.firstFourth}>
          <div>
            <p>Stay Turned With Us</p>
          </div>
          <div>
            <div className={styles.addresss}>
              <i
                className="fa-solid fa-location-dot"
                style={{ fontSize: "1.2rem" }}
              ></i>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className={styles.email}>
              <i
                className="fa-solid fa-envelope"
                style={{ fontSize: "1.2rem" }}
              ></i>
              <p>Hello@gmail.com</p>
            </div>
            <div className={styles.number}>
              <i class="fa-solid fa-phone" style={{ fontSize: "1.2rem" }}></i>
              <p>+91 1234567890</p>
            </div>
          </div>
        </div>
        {/* second */}
      </div>
      <div className={styles.second}>Design by @yash-gondaliya</div>
    </div>
  );
}

export default Footer;
