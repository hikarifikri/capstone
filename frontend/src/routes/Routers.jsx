import React from "react";
import Home from "../pages/Home";
import Service from "../pages/Service";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Contact from "../pages/Contact";
import Dokter from "../pages/Dokter/Dokter";
import DokterDetail from "../pages/Dokter/DokterDetail";

import { Routes, Route } from "react-router-dom";

const Routers = () => {
    return <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dokter" element={<Dokter />} />
        <Route path="/dokter/:id" element={<DokterDetail />} />
    </Routes>
};

export default Routers;