import React from "react";
import SingleProject from "./SingleProject";
import MyPorfolio from "../assets/MyPorfolio.png";
import RaveUniversal from "../assets/RaveUniversal.png";
import MarketColonyBot from "../assets/MarketColonyBot.png";
import ElectroEcom from "../assets/ElectroEcom.png";

const Projects = () => {
  return (
    <section className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
      <SingleProject
        image={RaveUniversal}
        githubLink={"https://github.com/kejiahp/RaveUniversalPolls"}
        projectLink={"https://theraveuniversal.com/"}
        name="The Rave Universal"
        techUsed={["Django ", "Bootstrap ", "Jinja Templates"]}
      />

      <SingleProject
        image={MyPorfolio}
        githubLink={"https://github.com/kejiahp/portfolio-webapp"}
        projectLink={"https://portfolio-webapp-lime.vercel.app/"}
        name="My Porfolio"
        techUsed={[
          "Nextjs ",
          "MongoDb ",
          "React-Query ",
          "AOS ",
          "Axios ",
          "Nodemailer ",
          "Yup ",
        ]}
      />

      <SingleProject
        image={MarketColonyBot}
        githubLink={"https://github.com/kejiahp/market-colony-chatbot"}
        projectLink={""}
        name="FaceBook ChatBot"
        techUsed={["Typescript ", "Nodejs ", "MongoDB ", "Express ", "EJS "]}
      />

      <SingleProject
        image={ElectroEcom}
        githubLink={
          "https://github.com/kejiahp/electro-electronics-store-react-app"
        }
        projectLink={""}
        name="FaceBook ChatBot"
        techUsed={[
          "React ",
          "React-Router ",
          "Styled-Components ",
          "React-Query ",
        ]}
      />

      <div data-aos="fade-up">
        <h1 className="font-bold md:text-5xl text-3xl text-custGreen hover:text-custBlack-400 transition-all duration-200 ease-in">
          <a href="https://github.com/kejiahp">ViEw RePOSiTOrY</a>
        </h1>
      </div>
    </section>
  );
};

export default Projects;
