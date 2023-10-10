import React from "react";
import SingleProject from "./SingleProject";
import MyPorfolio from "../assets/MyPorfolio.png";
import RaveUniversal from "../assets/RaveUniversal.png";
import MarketColonyBot from "../assets/MarketColonyBot.png";
import ElectroEcom from "../assets/ElectroEcom.png";
import TylerMovies from "../assets/TylerMoviesEmpire.png";
import SequentialJobs from "../assets/SequentialJobs.png";
import TodoList from "../assets/TodoList.png";
import EmetricsSuite from "../assets/EmetricsSuite.png";
import KilogramChatApp from "../assets/KilogramChatApp.png";
import ManHouse from "../assets/ManHouse.png";

const Projects = () => {
  return (
    <section className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
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
        image={KilogramChatApp}
        githubLink={"https://github.com/kejiahp/next13-realtime-chatapp"}
        projectLink={"https://kilogramchatting.vercel.app"}
        name="Kilogram Realtime Chatting"
        techUsed={["React ", "Nextjs ", "Tailwind ", "Socket.io", "Zod", "SWR"]}
      />

      <SingleProject
        image={TylerMovies}
        githubLink={""}
        projectLink={"https://tylermoviesempire.com"}
        name="Tyler Movies Website"
        techUsed={["React ", "Nextjs ", "Tailwind ", "Mongoose ", "MongoDB"]}
      />

      <SingleProject
        image={SequentialJobs}
        githubLink={""}
        projectLink={"https://www.sequentialjobs.com"}
        name="Sequential Jobs"
        techUsed={[
          "React ",
          "Nextjs ",
          "Stitches ",
          "Django ",
          "Postgres ",
          "Django Rest Framework",
        ]}
      />

      <SingleProject
        image={ManHouse}
        githubLink={""}
        projectLink={"https://www.manufacturersnigeria.org"}
        name="Manufactures Association of Nigeria"
        techUsed={[
          "React ",
          "Material UI ",
          "Scss ",
          "Django Rest Framework",
          "Postgres ",
          "Cloud computing",
        ]}
      />

      <SingleProject
        image={TodoList}
        githubLink={"https://github.com/kejiahp/date-filtered-todo-list"}
        projectLink={"https://date-filtered-todo-list.up.railway.app"}
        name="ToDo List"
        techUsed={["React ", "Tailwind "]}
      />

      <SingleProject
        image={EmetricsSuite}
        githubLink={""}
        projectLink={"https://emetricsuite.com"}
        name="Emetrics Suite"
        techUsed={["React ", "Nextjs ", "Stiches "]}
      />

      <SingleProject
        image={RaveUniversal}
        githubLink={"https://github.com/kejiahp/RaveUniversalPolls"}
        projectLink={"https://theraveuniversal.com/"}
        name="The Rave Universal"
        techUsed={["Django ", "Bootstrap ", "Jinja Templates"]}
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
        name="Electro Ecommerce Website"
        techUsed={[
          "React ",
          "React-Router ",
          "Styled-Components ",
          "React-Query ",
        ]}
      />

      <div data-aos="fade-up">
        <h1 className="font-bold md:text-5xl text-3xl text-custGreen hover:text-custBlack-400 transition-all duration-200 ease-in">
          <a
            target={"_blank"}
            rel="noreferrer"
            href="https://github.com/kejiahp"
          >
            ViEw RePOSiTOrY
          </a>
        </h1>
      </div>
    </section>
  );
};

export default Projects;
