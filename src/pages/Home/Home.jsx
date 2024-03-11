// Styles
import "./Home.css";

// Hooks
import { useEffect, useState } from "react";

// Functions
import typewriting from "../../utils/typewriting";

// Components
import Background from "../../components/Common/Background/Background";
import Landing from "../../components/Common/Landing/Landing";
import About from "../../components/Common/About/About";
import Projects from "../../components/Common/Projects/Projects";
import Contact from "../../components/Common/Contact/Contact";
import Sidenav from "../../components/Common/SideNav/Sidenav";

const Home = () => {

  const [vercelURL, setVercelUrl] = useState("")

  useEffect(() => {
    typewriting();

    setVercelUrl(process.env.VERCEL_URL);
  }, [location]);

  return (
    <div className="container_initial">
      <Background></Background>
      <Sidenav></Sidenav>
      <Landing></Landing>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
};

export default Home;
