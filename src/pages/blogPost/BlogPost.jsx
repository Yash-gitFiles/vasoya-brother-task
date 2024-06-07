import React from "react";
import styles from "../../styles/blogPost.module.css";

function BlogPost({ img, title }) {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={img} alt="" />
      </div>
      <div className={styles.inner}>
        <div className={styles.btnContainer}>
          <button className={styles.btn1}>General</button>
          <button className={styles.btn2}>Design Tips</button>
        </div>
        <p className={styles.title}>{title}</p>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
          facilis?
        </p>
      </div>
    </div>
  );
}

export default BlogPost;
