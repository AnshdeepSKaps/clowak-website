import React from 'react'
import vars from './vars'
import css from './navbar.css'
import logo from '../images/logo.png'

export default function Navbar() {

    const aStyle = {
        color: "black",
        fontWeight: "600",
    }

    return (
        <nav class="navbar" style={{ padding: "0", background: vars.lightGreen }}>
            <div style={{ width: "100vw", height: "12vh", }} className="d-flex flex-row justify-content-center align-items-end">

                <img style={{ marginRight: "40px", height: "70px" }} src={logo} alt="CLOWAK LOGO" />

                <div style={{ width: "50vw", }} class="d-flex flex-row justify-content-between align-items-center">
                    <a style={aStyle} href="">HOME</a>
                    <a style={aStyle} href="">ABOUT US</a>
                    <a style={aStyle} href="">PRODUCTS</a>
                    <a style={aStyle} href="">GALLERY</a>
                    <a style={aStyle} href="">CONTACT US</a>
                    <a style={aStyle} href="">JOIN US</a>
                </div>
            </div>
        </nav>
    )
}
