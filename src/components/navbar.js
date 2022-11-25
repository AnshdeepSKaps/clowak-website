import React from 'react'
import vars from './vars'
import logo from '../images/logo.png'
import clowak from '../images/clowak.png'
import { NavLink } from 'react-router-dom'
import {useState, useEffect } from 'react'

export default function Navbar() {

    const [burger, setBurger] = useState(false)

    const aStyle = {
        color: "black",
        fontWeight: "600",
    }

    const linkClass = ({ isActive }) => (isActive ? 'link active' : 'link')

    const media = async () => {

        const temp = window.matchMedia("(max-width: 600px)").matches;
        setBurger(temp)
        if (temp == true) {
            document.getElementById("nav").classList.add("hidden")
        }
    }

    useEffect(() => {
        media()
    }, [])

    const handleClick = () => {
        document.getElementById("nav").classList.toggle("hidden")
        document.getElementsByClassName("burger")[0].classList.toggle("rotate1")
        document.getElementsByClassName("burger")[1].classList.toggle("rotate2")
    }

    return (
        <div>
            {burger &&
                <div style={{ background: vars.lightGreen }} id="burger-nav" className="d-flex flex-row justify-content-center align-items-center">
                    <div onClick={handleClick} className="burger d-flex flex-column align-items-center justify-content-center">
                        <div className="burger-line"></div>
                        <div className="burger-line"></div>
                        <div className="burger-line"></div>
                    </div>
                    <img src={clowak} style={{ height: "20px" }} alt="" />
                    <div onClick={handleClick} className="burger d-flex flex-column align-items-center justify-content-center">
                        <div className="burger-line"></div>
                        <div className="burger-line"></div>
                        <div className="burger-line"></div>
                    </div>
                </div>
            }

            <nav id="nav">
                <div id="navbar" className="d-flex flex-row justify-content-center align-items-center">
                    <img id="navbar-logo" style={{ height: "70px" }} src={logo} alt="CLOWAK LOGO" />
                    <NavLink className={linkClass} to="/" style={aStyle}>HOME</NavLink>
                    <NavLink className={linkClass} to="/aboutus" style={aStyle}>ABOUT US</NavLink>
                    <NavLink className={linkClass} to="/products" style={aStyle}>PRODUCTS</NavLink>
                    <NavLink className={linkClass} to="/gallery" style={aStyle}>GALLERY</NavLink>
                    <NavLink className={linkClass} to="/contactus" style={aStyle}>CONTACT US</NavLink>
                    <NavLink className={linkClass} to="/joinus" style={aStyle}>JOIN US</NavLink>
                </div>
            </nav >
        </div>
    )


}
