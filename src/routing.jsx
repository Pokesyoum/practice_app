import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Rsp from "./pages/rsp";

export default function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rsp" element={<Rsp />} />
      </Routes>
    </BrowserRouter>
  );
}
