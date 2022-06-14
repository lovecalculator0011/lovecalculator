import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Calculator from "./Calculator";
import Fool from "./Fool";
import Signup from "./Signup";
import "./style.scss"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route exact path="/calculator" element={<Calculator />} />
        <Route exact path="/fool" element={<Fool />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
