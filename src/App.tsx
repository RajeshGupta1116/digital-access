import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Platform from "./pages/Platform";
import About from "./pages/About";
import Blog from "./pages/Blog";
import DevOpsAccessibility from "./pages/Blog/DevOpsAccessibility";
import WCAG22Enterprise from "./pages/Blog/WCAG22Enterprise";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
		  <Route path="/Blog/devops-accessibility" element={<DevOpsAccessibility />} />
		  <Route path="/Blog/wcag-22-enterprise" element={<WCAG22Enterprise />} />
        </Routes>
      </div>
	  <div className="pt-20">
        <Footer />
	  </div>
    </Router>
  );
}