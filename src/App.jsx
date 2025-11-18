import { Suspense, use, useState } from "react";
import "./App.css";
import Home from "./pages/home";
import About from "./pages/about";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
