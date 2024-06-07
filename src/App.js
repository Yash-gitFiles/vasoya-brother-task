import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import About from "./pages/About";
import OurServices1 from "./pages/ourServices/OurServices1";
import OurServices2 from "./pages/ourServices/OurServices2";
import OurServices3 from "./pages/ourServices/OurServices3";
import Projects1 from "./pages/projects/Projects1";
import Projects2 from "./pages/projects/Projects2";
import Projects3 from "./pages/projects/Projects3";
import Projects4 from "./pages/projects/Projects4";
import Pages2 from "./pages/pagesInner/Pages2";
import Pages1 from "./pages/pagesInner/Pages1";
import Pages3 from "./pages/pagesInner/Pages3";
import Pages4 from "./pages/pagesInner/Pages4";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="ourServices1" element={<OurServices1 />} />
          <Route path="ourServices2" element={<OurServices2 />} />
          <Route path="ourServices3" element={<OurServices3 />} />
          <Route path="projects1" element={<Projects1 />} />
          <Route path="projects2" element={<Projects2 />} />
          <Route path="projects3" element={<Projects3 />} />
          <Route path="projects4" element={<Projects4 />} />
          <Route path="pages1" element={<Pages1 />} />
          <Route path="pages2" element={<Pages2 />} />
          <Route path="pages3" element={<Pages3 />} />
          <Route path="pages4" element={<Pages4 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
