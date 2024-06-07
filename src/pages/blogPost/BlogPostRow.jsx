import React from "react";
import BlogPost from "./BlogPost";
import styles from "../../styles/blogPost.module.css";
import Title from "../../components/common/Title";

function BlogPostRow() {
  const data = [
    {
      img: "https://images.unsplash.com/photo-1717620378082-b2b48c2a8b93?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Tips & tricks Get Best Interior Design",
    },
    {
      img: "https://images.unsplash.com/photo-1717620378082-b2b48c2a8b93?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Best Villa Interior Design Inspiration Tips",
    },
    {
      img: "https://images.unsplash.com/photo-1717620378082-b2b48c2a8b93?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Best Family Room For Own House Design",
    },
  ];

  const component = data.map((value) => {
    return <BlogPost img={value.img} title={value.title} />;
  });
  return (
    <div>
      <Title title="Blog post & Latest News" />
      <div className={styles.rowContainer}>{component} </div>
    </div>
  );
}

export default BlogPostRow;
