import "./App.css";
import earthAnimation from "./utils/three";

// Router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Pages
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";

// Components
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/projects" element={<Projects></Projects>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </>
  );
}
export default App;
