import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./Shop/Shop";
import "./styles/design.css";
import Navbar from "./components/Navbar";
// import Category from "./components/Category";
const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        {/* <Category /> */}
        <Routes>
          <Route path="/" element={<Shop />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
