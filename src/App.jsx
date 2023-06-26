import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Home/Navbar";
import Hero from "./Components/Home/Hero";
import Staff from "./Components/Staff/Staff";
import {
  CEOAboutPage,
  FrontendEngineerAboutPage,
  BackendEngineerAboutPage,
  ProductManagerAboutPage,
  ChiefDesignerAboutPage,
} from "./Components/Staff/AboutMyStaff";

export default function App(props) {
  return (
    <div className="font-poppins">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Hero />} />

          <Route path="staff" element={<Staff />}></Route>
          <Route path="about/ceo" element={<CEOAboutPage />} />
          <Route
            path="about/frontendengineer"
            element={<FrontendEngineerAboutPage />}
          />
          <Route
            path="about/backendengineer"
            element={<BackendEngineerAboutPage />}
          />
          <Route
            path="about/productmanager"
            element={<ProductManagerAboutPage />}
          />
          <Route
            path="about/chiefdesigner"
            element={<ChiefDesignerAboutPage />}
          />
        </Route>
      </Routes>
    </div>
  );
}
