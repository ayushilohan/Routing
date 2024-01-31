import Header from "../components/Header";
import Contact from "./Contact";
import About from "./About";
import React from 'react'
import { useNavigate, Routes, Route } from "react-router-dom";

const Home = () => {
    let navigate = useNavigate()
    const navigateAbout = () => {
        navigate("/about")
    }
    const navigateContact = () => {
        navigate("/contact")
    }

  return (
    <>
    <Header />
    <button onClick={navigateAbout}>About</button>
    <button onClick={navigateContact}>Contact</button>
    <h2>Home Page</h2>
    <Routes>
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    </Routes>
    </>
    )
}
export default Home
