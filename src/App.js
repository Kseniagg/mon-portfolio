import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/main.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Contacts from "./pages/Contacts";
import ScrollToTop from "./utils/scrollToTop";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project-details/:id" element={<ProjectDetails />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </Router>


    </div>
  );
}

export default App;
