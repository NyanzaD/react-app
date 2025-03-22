import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import GetInvolved from "./pages/GetInvolved";
import Programs from "./pages/Programs";
import Footer from "./components/Footer";
import Header1 from "./components/Header1";
import Header2 from "./components/Header2";

function App() {
  return (
  <BrowserRouter>
      <Header1 />
      <Header2 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/getinvolved" element={<GetInvolved />} />
        <Route path="/programs" element={<Programs />} />
      </Routes>
       <Footer />

    </BrowserRouter>

  );
}

export default App;
