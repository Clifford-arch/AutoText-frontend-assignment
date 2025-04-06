import React from "react";
import Header from "./components/Header";
import Postlist from "./components/Postlist";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WeatherWidget from "./components/WeatherWidget";
import "./App.css";
import Footer from "./components/Footer";
import HomePage from "./components/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="app-container">
          <div className="app-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/post" element={<Postlist />} />
              <Route path="/weather" element={<WeatherWidget />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
