import React from 'react'
import vars from './vars'
import { useRef, useState, useEffect } from 'react'
import logo from '../images/logo.png'
import clowak from '../images/clowak.png'
import { NavLink } from 'react-router-dom'

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
    }

    return (
        <div>
            {burger &&
                <div style={{ background: vars.grey }} id="burger-nav" className="d-flex flex-row justify-content-center align-items-center">
                    <img src={clowak} style={{ height: "20px" }} alt="" />
                    <div onClick={handleClick} id="burger" className="d-flex flex-column" style={{ gap: "3px", border: `2px solid ${vars.darkGreen}`, padding: "3px", borderRadius: "5px" }}>
                        <div style={{ background: vars.darkGreen, width: "20px", height: "2px", borderRadius: "2px" }}></div>
                        <div style={{ background: vars.darkGreen, width: "20px", height: "2px", borderRadius: "2px" }}></div>
                        <div style={{ background: vars.darkGreen, width: "20px", height: "2px", borderRadius: "2px" }}></div>
                    </div>
                </div>
            }

            <nav id="nav" style={{ padding: "0", background: vars.lightGreen }}>
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
