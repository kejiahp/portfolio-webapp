import Contact from "../src/components/Contact";
import NavBar from "../src/components/NavBar";
import Welcome from "../src/components/Welcome";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <>
      <ToastContainer />
      <NavBar />
      <Welcome />
      <Contact />
    </>
  );
}
