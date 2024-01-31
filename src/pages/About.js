import Header from "../components/Header";
import { useNavigate, Routes, Route } from "react-router-dom";
import Contact from "./Contact";
import Home from "./Home";
import React from "react";

const About = () => {
    let navigate = useNavigate()
    const navigateContact = () => {
        navigate("/contact")
    }
    const navigateHome = () => {
        navigate("/home")
    }
  return (
    <>
    <Header />
    <button onClick={navigateContact}>Contact</button>
    <button onClick={navigateHome}>Home</button>
    <h2>About Page</h2>
    <Routes>
    <Route path="/contact" element={<Contact />} />
    <Route path="/home" element={<Home />} />
    </Routes>
    </>
    )
}
export default About