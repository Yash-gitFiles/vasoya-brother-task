import React, { useState } from "react";
import styles from "../styles/layout/navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  function handleShowMenu() {
    setIsVisible(!isVisible);
  }
  return (
    <>
      <div className={styles.outerContainer}>
        <div className={styles.container}>
          <div className={styles.emailOrNumber}>
            <div className={styles.email}>
              <i class="fa-solid fa-envelope"></i>
              <p>Hello@gmail.com</p>
            </div>
            <div className={styles.number}>
              <i class="fa-solid fa-phone"></i>
              <p>+91 1234567890</p>
            </div>
          </div>
          <div className={styles.iconContainer}>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-pinterest"></i>
          </div>
        </div>
      </div>

      {/* second */}
      <div className={styles.mainContainer}>
        <div>
          <h2>INTR</h2>
        </div>
        <ul className={`${styles.ulItems} ${isVisible ? styles.visible : ""}`}>
          <li onClick={handleShowMenu}>
            <Link to="/">Home</Link>
          </li>
          <li onClick={handleShowMenu}>
            <Link to="about">About</Link>
          </li>
          <li onClick={handleShowMenu}>
            <div className={styles.dropDownShop}>
              <a href="#">Our Services</a>
              <div className={styles.dropdownDesc}>
                <li>
                  <Link to="ourServices1">our services-1</Link>
                </li>
                <li>
                  <Link to="ourServices2">our services-2</Link>
                </li>
                <li>
                  <Link to="ourServices3">our services-3</Link>
                </li>
              </div>
            </div>
          </li>
          <li onClick={handleShowMenu}>
            <div className={styles.dropDownShop}>
              <a href="#">Projects</a>
              <div className={styles.dropdownDesc}>
                <li>
                  <Link to="projects1">Projects 1</Link>
                </li>
                <li>
                  <Link to="projects2">Projects 2</Link>
                </li>
                <li>
                  <Link to="projects3">Projects 3</Link>
                </li>
                <li>
                  <Link to="projects4">Projects 4</Link>
                </li>
              </div>
            </div>
          </li>
          <li onClick={handleShowMenu}>
            <div className={styles.dropDownShop}>
              <a href="#">Pages</a>
              <div className={styles.dropdownDesc}>
                <li>
                  <Link to="pages1">Pages 1</Link>
                </li>
                <li>
                  <Link to="pages2">Pages 2</Link>
                </li>
                <li>
                  <Link to="pages3">Pages 3</Link>
                </li>
                <li>
                  <Link to="pages4">Pages 4</Link>
                </li>
              </div>
            </div>
          </li>
        </ul>
        <div className={styles.menuBar} onClick={handleShowMenu}>
          {isVisible ? (
            <i className="fa-solid fa-xmark"></i>
          ) : (
            <i className="fa-solid fa-bars"></i>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
