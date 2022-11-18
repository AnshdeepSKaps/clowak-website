import React from 'react'
import vars from '../vars'
import aboutus from '../../images/aboutus.png'

export default function Aboutus() {

    const mainDivStyle = {
        width: "80vw",
        margin: "auto",
        marginTop: "10vh",
        gap: "2rem"
    }

    return (
        <div id="about-us" className="d-flex flex-row justify-content-center align-items-center" style={mainDivStyle} >
            <div className='w-50'>
                <h1 style={{ fontWeight: "700", color: vars.darkGreen }} className="header">ABOUT US</h1>
                <p className="mt-5" style={{ textAlign: "justify", fontWeight: "600", fontSize: "1.3rem" }}>We, at Clowak Innovations, strive to create ingenious products that focus on making the
                    lives of our customers easier, affordable, and effortlessly accessible.
                    Our products are made in India, designed by our Indian engineers, and manufactured at our
                    industry in Vellore, Tamil Nadu.
                </p>
                <div style={vars.darkBtnStyle} className="btn about-us-btn">More Details</div>
            </div>
            <img style={{ height: "480px", width: "500px" }} src={aboutus} alt="" />
        </div>
    )
}
