import React from 'react'
import vars from './vars'
import css from './navbar.css'
import logo from '../images/logo.png'
import { NavLink } from 'react-router-dom'

export default function Navbar() {

    const aStyle = {
        color: "black",
        fontWeight: "600",
    }

    const linkClass = ({ isActive }) => (isActive ? 'link active' : 'link')

    return (
        <nav class="navbar " style={{ padding: "0", background: vars.lightGreen }}>
            <div style={{ width: "100vw", height: "12vh", gap: "30px" }} className="d-flex flex-row justify-content-center align-items-center">
                <img style={{ marginRight: "40px", height: "70px" }} src={logo} alt="CLOWAK LOGO" />
                <NavLink className={linkClass} to="/" style={aStyle}>HOME</NavLink>
                <NavLink className={linkClass} to="/aboutus" style={aStyle}>ABOUT US</NavLink>
                <NavLink className={linkClass} to="/products" style={aStyle}>PRODUCTS</NavLink>
                <NavLink className={linkClass} to="/gallery" style={aStyle}>GALLERY</NavLink>
                <NavLink className={linkClass} to="/contactus" style={aStyle}>CONTACT US</NavLink>
                <NavLink className={linkClass} to="/joinus" style={aStyle}>JOIN US</NavLink>
            </div>
        </nav>
    )
}
