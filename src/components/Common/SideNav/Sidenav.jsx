import "./Sidenav.css";

const Sidenav = () => {
  return (
    <div className="sidenav">
      <div className="sidenav_icons">
        <a href="#about">
          <img src="src\assets\images\icons\github_ico.svg" alt="github" />
        </a>
        <a href="#projects">
          <img src="src\assets\images\icons\linkedin_ico.svg" alt="linkedin" />
        </a>
      </div>
      <div className="sidenav_line"></div>
    </div>
  );
};

export default Sidenav;
