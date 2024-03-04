import { useLocation } from "react-router-dom";

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
} from "react-icons/di";

const TechStack = () => {
  const location = useLocation();

  if (location === "http://localhost:5173/") {
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
  } else {
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
      </>
    );
  }
};

export default TechStack;
