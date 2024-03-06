// Styles
import "./App.css";

// Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home/Home";
import OtherProjects from "./pages/OtherProjects/OtherProjects";
import MoreAbout from "./pages/MoreAbout/MoreAbout";

// Components
import Footer from "./components/Common/Footer/Footer";
import Navbar from "./components/Common/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="/projects"
            element={<OtherProjects></OtherProjects>}
          ></Route>
          <Route path="/more-about" element={<MoreAbout></MoreAbout>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </>
  );
}
export default App;
