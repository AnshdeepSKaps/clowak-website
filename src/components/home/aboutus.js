import React from 'react'
import vars from '../vars'
import aboutus from '../../images/home/aboutus.png'

export default function Aboutus() {

    return (
        <div id="about-us" className="d-flex flex-row justify-content-center align-items-center">
            <div>
                <h1 id="about-us-header" style={{ fontWeight: "700", color: vars.darkGreen }} className="header">ABOUT US</h1>
                <p id="about-us-description" className="mt-5 text-justify home-text">We, at Clowak Innovations, strive to create ingenious products that focus on making the
                    lives of our customers easier, affordable, and effortlessly accessible.
                    Our products are made in India, designed by our Indian engineers, and manufactured at our
                    industry in Vellore, Tamil Nadu.
                </p>
                <div style={vars.darkBtnStyle} className="btn about-us-btn">More Details</div>
            </div>
            <img id='home-about-us-image' src={aboutus} alt="" />
        </div>
    )
}
