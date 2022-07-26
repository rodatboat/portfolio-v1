import "./App.css";
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import Landing from "./components/Landing";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-2 text-center arrows">
            <span className="arrow">{"<"}</span>
          </div>
          <div className="col content align-items-center">
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
          <div className="col-2 text-center arrows">
            <span className="arrow">{">"}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
