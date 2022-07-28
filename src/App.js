import "./App.css";
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import Landing from "./components/Landing";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
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
            
                  <Route path="/*" element={<Navigate to ="/"/>} />
                </Routes>
              </BrowserRouter>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
