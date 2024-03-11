// Styles
import "./App.css";

// Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Hooks
import { useEffect, useState } from "react";

// Pages
import Home from "./pages/Home/Home";
import OtherProjects from "./pages/OtherProjects/OtherProjects";
import MoreAbout from "./pages/MoreAbout/MoreAbout";

// Components
import Footer from "./components/Common/Footer/Footer";
import Navbar from "./components/Common/Navbar/Navbar";
import ScrollTop from "./components/Common/ScrollTop/ScrollTop";
import Loader from "./components/Common/Loader/Loader";

function App() {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1000);
  // }, []);

  return (
    <>
      {/* {loading && <Loader />} */}
      <BrowserRouter>
        {/* {!loading && (
          <> */}
            <ScrollTop></ScrollTop>
            <Navbar></Navbar>
            <Routes>
              <Route path="/" element={<Home></Home>}></Route>
              <Route
                path="/projects"
                element={<OtherProjects></OtherProjects>}
              ></Route>
              <Route
                path="/more-about"
                element={<MoreAbout></MoreAbout>}
              ></Route>
            </Routes>
            <Footer></Footer>
          {/* </>
        )} */}
      </BrowserRouter>
    </>
  );
}
export default App;
