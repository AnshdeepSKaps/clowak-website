import vars from './vars'
import React from 'react'
import logo from "../images/logo.png"
import { NavLink } from 'react-router-dom'
import phone from "../images/home/footer/phone.png"
import youtube from "../images/home/footer/youtube.png"
import message from "../images/home/footer/message.png"
import linkedin from "../images/home/footer/linkedin.png"
import pinpoint from "../images/home/footer/pinpoint.png"
import instagram from "../images/home/footer/instagram.png"

export default function footer() {

    const aStyle = {
        color: "black",
        // fontWeight: "600",
    }

    return (
        <div id="footer" className="d-flex flex-row align-items-center justify-content-around">
            {/* <img src={logo} alt="" /> */}
            <div id="social-channels">
                <div className='text-center'>Check out our social media channels and connect with us</div>
                <div style={{ gap: "20px" }} className="mt-4 d-flex align-items-center justify-content-center">
                    <img src={linkedin} alt="" />
                    <img src={instagram} alt="" />
                    <img src={youtube} alt="" />
                </div>
            </div>

            <div id="quick-links" style={{ gap: "1rem" }} className="d-flex flex-column">
                <div style={{ fontSize: "1rem", fontWeight: "bolder", color: vars.darkGreen }}>Quick Links</div>
                <NavLink className="link" to="/" style={aStyle}>Home</NavLink>
                <NavLink className="link" to="/aboutus" style={aStyle}>About Us</NavLink>
                <NavLink className="link" to="/products" style={aStyle}>Products</NavLink>
                <NavLink className="link" to="/gallery" style={aStyle}>Gallery</NavLink>
                <NavLink className="link" to="/contactus" style={aStyle}>Contact Us</NavLink>
                <NavLink className="link" to="/joinus" style={aStyle}>Join Us</NavLink>
            </div>

            <div id="contact-info" className="d-flex flex-column align-items-center justify-content-around">

                <div className='info-card'>
                    <img style={{ justifySelf: "center" }} src={pinpoint} alt="" />
                    <div className='text-center'>TT 003 Technology Tower VIT University Vellore</div>
                </div>

                <div className='info-card'>
                    <img style={{ justifySelf: "center" }} src={phone} alt="" />
                    <div className='text-center'>+91 8072375909</div>
                </div>

                <div className='info-card'>
                    <img style={{ justifySelf: "center" }} src={message} alt="" />
                    <div className='text-center'>clowakinnovations@gmail.com</div>
                </div>
            </div>
        </div >
    )
}
