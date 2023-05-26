import React from "react";
import HomePage from "./Components/Home/HomePage";
import { Routes, Route } from "react-router-dom";
import SuccessPage from "./Components/SuccessPage/SuccessPage";

export default function App(props) {
  return (
    <div className="font-poppins">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </div>
  );
}
