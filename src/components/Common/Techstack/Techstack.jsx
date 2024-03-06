// Hooks
import { useLocation } from "react-router-dom";

// Styles
import "./Techstack.css";

// Icon
import {
  DiJavascript,
  DiReact,
  DiGit,
  DiPython,
  DiNodejs,
  DiMysql,
  DiDjango,
  DiSqllite,
  DiFirebase,
  DiPostgresql,
  DiCss3,
  DiHtml5,
  DiBootstrap,
  DiMongodb,
  DiRedis,
  DiAws,
  DiVisualstudio,
} from "react-icons/di";

import {
  SiCsharp,
  SiDjango,
  SiTailwindcss,
  SiTypescript,
  SiVisualstudiocode,
  SiWebpack,
} from "react-icons/si";

const TechStack = (props) => {
  const location = useLocation();

  if (location.pathname === "/" || props.type === "home") {
    return (
      <>
        <div>
          <DiJavascript></DiJavascript>
        </div>
        <div>
          <DiPython></DiPython>
        </div>
        <div>
          <DiReact></DiReact>
        </div>
        <div>
          <DiNodejs></DiNodejs>
        </div>
        <div>
          <DiMysql></DiMysql>
        </div>
        <div>
          <DiSqllite></DiSqllite>
        </div>
        <div>
          <DiGit></DiGit>
        </div>
        <div>
          <DiDjango></DiDjango>
        </div>
        <div>
          <DiFirebase></DiFirebase>
        </div>
        <div>
          <DiPostgresql></DiPostgresql>
        </div>
      </>
    );
  } else if (props.type === "languages") {
    return (
      <>
        <div className="skill_card">
          <div className="skill_logo">
            <DiPython></DiPython>
          </div>
          <div className="skill_description">
            <span>Python</span>
          </div>
        </div>
        <div className="skill_card">
          <div className="skill_logo">
            <DiJavascript></DiJavascript>
          </div>
          <div className="skill_description">
            <span>JavaScript</span>
          </div>
        </div>
        <div className="skill_card">
          <div className="skill_logo">
            <SiCsharp></SiCsharp>
          </div>
          <div className="skill_description">
            <span>CSharp</span>
          </div>
        </div>
      </>
    );
  } else if (props.type === "lib-framework") {
    return (
      <>
        <div className="skill_card">
          <div className="skill_logo">
            <DiReact></DiReact>
          </div>
          <div className="skill_description">
            <span>ReactJs</span>
          </div>
        </div>
        <div className="skill_card">
          <div className="skill_logo">
            <DiNodejs></DiNodejs>
          </div>
          <div className="skill_description">
            <span>NodeJs</span>
          </div>
        </div>
        <div className="skill_card">
          <div className="skill_logo">
            <DiCss3></DiCss3>
          </div>
          <div className="skill_description">
            <span>CSS3</span>
          </div>
        </div>
        <div className="skill_card">
          <div className="skill_logo">
            <DiHtml5></DiHtml5>
          </div>
          <div className="skill_description">
            <span>HTML5</span>
          </div>
        </div>
        <div className="skill_card">
          <div className="skill_logo">
            <SiTypescript></SiTypescript>
          </div>
          <div className="skill_description">
            <span>TypeScript</span>
          </div>
        </div>
        <div className="skill_card">
          <div className="skill_logo">
            <SiWebpack></SiWebpack>
          </div>
          <div className="skill_description">
            <span>Webpack</span>
          </div>
        </div>
        <div className="skill_card">
          <div className="skill_logo">
            <SiDjango></SiDjango>
          </div>
          <div className="skill_description">
            <span>Django</span>
          </div>
        </div>
        <div className="skill_card">
          <div className="skill_logo">
            <DiGit></DiGit>
          </div>
          <div className="skill_description">
            <span>Git</span>
          </div>
        </div>
        <div className="skill_card">
          <div className="skill_logo">
            <DiBootstrap></DiBootstrap>
          </div>
          <div className="skill_description">
            <span>Bootstrap</span>
          </div>
        </div>
        <div className="skill_card">
          <div className="skill_logo">
            <SiTailwindcss></SiTailwindcss>
          </div>
          <div className="skill_description">
            <span>Tailwind</span>
          </div>
        </div>
      </>
    );
  } else if (props.type === "data_banks") {
    return (
      <>
        <div className="skill_card">
          <div className="skill_logo">
            <DiFirebase></DiFirebase>
          </div>
          <div className="skill_description">
            <span>Firebase</span>
          </div>
        </div>
        <div className="skill_card">
          <div className="skill_logo">
            <DiMongodb></DiMongodb>
          </div>
          <div className="skill_description">
            <span>MongoDB</span>
          </div>
        </div>
        <div className="skill_card">
          <div className="skill_logo">
            <DiSqllite></DiSqllite>
          </div>
          <div className="skill_description">
            <span>SQLite</span>
          </div>
        </div>
        <div className="skill_card">
          <div className="skill_logo">
            <DiMysql></DiMysql>
          </div>
          <div className="skill_description">
            <span>MySQL</span>
          </div>
        </div>
        <div className="skill_card">
          <div className="skill_logo">
            <DiRedis></DiRedis>
          </div>
          <div className="skill_description">
            <span>Redis</span>
          </div>
        </div>
        <div className="skill_card">
          <div className="skill_logo">
            <DiPostgresql></DiPostgresql>
          </div>
          <div className="skill_description">
            <span>PostgreSQL</span>
          </div>
        </div>
      </>
    );
  } else if (props.type === "platforms") {
    return (
      <>
        <div className="skill_card">
          <div className="skill_logo">
            <DiAws></DiAws>
          </div>
          <div className="skill_description">
            <span>AWS</span>
          </div>
        </div>
        <div className="skill_card">
          <div className="skill_logo">
            <DiVisualstudio></DiVisualstudio>
          </div>
          <div className="skill_description">
            <span>Visual Studio</span>
          </div>
        </div>
        <div className="skill_card">
          <div className="skill_logo">
            <SiVisualstudiocode></SiVisualstudiocode>
          </div>
          <div className="skill_description">
            <span>VS Code</span>
          </div>
        </div>
      </>
    );
  }
};

export default TechStack;
