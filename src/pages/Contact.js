import Header from "../components/Header";
import Home from "./Home";
import About from "./About";
import { useNavigate, Routes, Route } from "react-router-dom";
import React from 'react'

const Contact = () => {
    let navigate = useNavigate()
    const navigateAbout = () => {
        navigate("/about")
    }
    const navigateHome = () => {
        navigate("/home")
    }

  return (
    <>
    <Header />
    <button onClick={navigateAbout}>About</button>
    <button onClick={navigateHome}>Home</button>
    <h2>Contact Page</h2>
    <Routes>
    <Route path="/about" element={<About />} />
    <Route path="/home" element={<Home />} />
    </Routes>
    </>
    )
}
export default Contact