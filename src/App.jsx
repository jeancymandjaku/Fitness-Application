import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ExerciseDetail from "./pages/ExerciceDetail";
import Footer from "./components/Footer";

const App = () => {
  return <>
          <Navbar/>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/exercice/:id" element={<ExerciseDetail/>} />
          </Routes>
          <Footer/>
        </>;
};

export default App;
