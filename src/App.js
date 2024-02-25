import React from "react";
import "./App.scss";
import Layout from "./components/Layout/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" Component={Layout} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
