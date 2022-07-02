import React from "react";
import "./App.css";
import Home from "./components/Home/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import Appointment from "./components/Appointment/Appointment/Appointment";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/Appointment" element={<Appointment />} />
                    <Route path="/about" element={<AboutUs />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
