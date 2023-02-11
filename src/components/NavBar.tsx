import Link from "next/link";
import { Github, Twitter, Linkedin } from "../assets/NavBar/svgs";

const NavBar = () => {
  return (
    <div className="flex md:justify-between py-5 px-12 lg:px-24 md:flex-row flex-col justify-center items-center pb-24 md:pb-8 z-40 relative">
      <div className="font-bold text-3xl text-custBlack-400 cursor-pointer">
        <Link href={"/"}>kejiah</Link>
      </div>
      <div className=" flex w-48 justify-between items-center mt-5 md:mt-0">
        <a target={"_blank"} rel="noreferrer" href="https://github.com/kejiahp">
          <Github style="w-6 h-6 cursor-pointer hover:scale-125 transition ease-in delay-100" />
        </a>
        <a
          target={"_blank"}
          rel="noreferrer"
          href="https://www.linkedin.com/in/morenikeji-popoola-a80257253/"
        >
          <Linkedin style="w-6 h-6 cursor-pointer hover:scale-125 transition ease-in delay-100" />
        </a>
        <a
          target={"_blank"}
          rel="noreferrer"
          href="https://twitter.com/kejiah_"
        >
          <Twitter style="w-6 h-6 cursor-pointer hover:scale-125 transition ease-in delay-100" />
        </a>
      </div>
    </div>
  );
};

export default NavBar;
