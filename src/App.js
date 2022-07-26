import "./App.css";
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import Landing from "./components/Landing";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="container">
        <Navbar />
        <div className="row align-items-center content-row">
          <div className="col content align-items-center container">
            <div className="content-wrapper ">
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Landing />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/resume" element={<Resume />} />
                  <Route path="/contact" element={<Contact />} />
            
                  <Route path="/*" element={<Navigate to ="/"/>} />
                </Routes>
              </BrowserRouter>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
