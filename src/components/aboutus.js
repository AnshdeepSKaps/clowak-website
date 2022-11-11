import React from 'react'
import vars from './vars'
import aboutus from '../images/aboutus.png'

export default function Aboutus() {

    const mainDivStyle = {
        width: "70vw",
        margin: "auto",
        marginTop: "10vh",
        gap: "2rem"
    }

    return (
        <div className="d-flex flex-row justify-content-between align-items-center" style={mainDivStyle} >
            <div>
                <h1 style={{ fontWeight: "600", color: vars.darkGreen }}>ABOUT US</h1>
                <p className="mt-5" style={{ fontWeight: "600", fontSize: "1.3rem" }}>We, at Clowak Innovations, strive to create ingenious products that focus on making the
                    lives of our customers easier, affordable, and effortlessly accessible.
                    Our products are made in India, designed by our Indian engineers, and manufactured at our
                    industry in Vellore, Tamil Nadu.
                </p>
                <div style={vars.btnStyle} className="btn">More Details</div>
            </div>
            <img src={aboutus} alt="" />
        </div>
    )
}
