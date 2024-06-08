import React from "react";
import CountRow from "../components/home/CountRow";
import BlogPostRow from "./blogPost/BlogPostRow";
import HeroSEction from "../components/home/HeroSEction";
import ServicesOfferedRow from "../components/home/ServicesOfferedRow";
import Work from "../components/home/Work";
import CurrentProjects from "../components/home/CurrentProjects";
import Trust from "../components/home/Trust";
import MainHero from "../components/home/MainHero";
import ClientReviews from "../components/home/ClientReviews";
import Greetings from "../components/home/Greetings";

function Home() {
  return (
    <div>
      <MainHero />
      <CountRow />
      <Trust />
      <Greetings />
      <ServicesOfferedRow />
      <Work />
      <CurrentProjects />
      <ClientReviews />
      <HeroSEction />
      <BlogPostRow />
    </div>
  );
}

export default Home;
