import React from 'react'
import logo from "../images/logo.png"
import instagram from "../images/footer/instagram.png"
import linkedin from "../images/footer/linkedin.png"
import youtube from "../images/footer/youtube.png"
import pinpoint from "../images/footer/pinpoint.png"
import phone from "../images/footer/phone.png"
import message from "../images/footer/message.png"
import vars from './vars'

export default function footer() {

    const mainDivStyle = {
        height: "fit-content",
        width: "100vw",
        background: vars.lightGreen,
        margin: "auto",
        padding: "15vh 0",
        marginTop: "15vh"
    }

    const innerStyle = {
        display: "grid",
        gridTemplateColumns: ".15fr 1fr",
        gap: "1rem"
    }

    return (
        <div className="d-flex flex-row align-items-center justify-content-around" style={mainDivStyle}>
            <img src={logo} alt="" />
            <div style={{ width: "15vw" }}>
                <div className='text-center'>Check out our social media channels and connect with us</div>
                <div className="mt-4 d-flex align-items-center justify-content-around">
                    <img src={linkedin} alt="" />
                    <img src={instagram} alt="" />
                    <img src={youtube} alt="" />
                </div>
            </div>

            <div style={{ gap: "1rem" }} className="d-flex flex-column">
                <a style={{ color: "black" }} href="">Quick Links</a>
                <a style={{ color: "black" }} href="">Home</a>
                <a style={{ color: "black" }} href="">About Us</a>
                <a style={{ color: "black" }} href="">Products</a>
                <a style={{ color: "black" }} href="">Contact Us</a>
                <a style={{ color: "black" }} href="">Join Us</a>
                <a style={{ color: "black" }} href="">Gallery</a>
            </div>

            <div style={{ gap: "2rem" }} className="d-flex flex-column">
                <div style={innerStyle}>
                    <img src={pinpoint} alt="" />
                    <div>TT 003 Technology Tower VIT University Vellore</div>
                </div>

                <div style={innerStyle}>
                    <img src={phone} alt="" />
                    <div> +91 8072375909</div>
                </div>

                <div style={innerStyle}>
                    <img src={message} alt="" />
                    <div>clowakinnovations@gmail.com</div>
                </div>
            </div>
        </div>
    )
}
