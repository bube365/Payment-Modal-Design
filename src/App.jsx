import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Home/Navbar";
import Hero from "./Components/Home/Hero";
import Staff from "./Components/Staff/Staff";
import CEO from "./Components/Staff/AboutMyStaff/CEO";
import FrontendEngineer from "./Components/Staff/AboutMyStaff/FrontendEngineer";
import BackendEngineer from "./Components/Staff/AboutMyStaff/BackendEngineer";
import ProductManager from "./Components/Staff/AboutMyStaff/ProductManager";
import ChiefDesigner from "./Components/Staff/AboutMyStaff/ChiefDesigner";

export default function App(props) {
  return (
    <div className="font-poppins">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Hero />} />

          <Route path="staff" element={<Staff />}></Route>
          <Route path="about/ceo" element={<CEO />} />
          <Route path="about/frontendengineer" element={<FrontendEngineer />} />
          <Route path="about/backendengineer" element={<BackendEngineer />} />
          <Route path="about/productmanager" element={<ProductManager />} />
          <Route path="about/chiefdesigner" element={<ChiefDesigner />} />
        </Route>
      </Routes>
    </div>
  );
}
