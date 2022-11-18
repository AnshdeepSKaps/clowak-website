import React from 'react'
import vars from '../vars'
import aboutus from '../../images/aboutus.png'
import clinic1 from '../../images/aboutUs/clinic1.png'
import clinic2 from '../../images/aboutUs/clinic2.png'
import clinic3 from '../../images/aboutUs/clinic3.png'

export default function Aboutus() {

    const mainDivStyle = {
        width: "80vw",
        margin: "auto",
        marginTop: "10vh",
        gap: "2rem"
    }

    const imgStyle = {
        height: "80%",
        // width: "100%"
    }

    return (
        <div id="about-us" className="d-flex flex-column justify-content-between align-items-center" style={mainDivStyle} >
            <h1 className="header text-center" style={{ fontWeight: "700", color: vars.darkGreen }}>ABOUT US</h1>
            <p className="mt-3 text-center" style={{ textAlign: "justify", fontWeight: "600", fontSize: "1.3rem" }}>We, at Clowak Innovations, strive to create ingenious products that focus on making the
                lives of our customers easier, affordable, and effortlessly accessible.
                Our products are made in India, designed by our Indian engineers, and manufactured at our
                industry in Vellore, Tamil Nadu.
                Our engineering team has an extensive skill set with expertise in electrical and mechanical
                fields, and because all our engineers are on-site, the guarantee of fast and effective service
                is assured.
            </p>

            <div className='d-flex flex-row align-items-center justify-content-around' style={{ width: "100vw", gap: "30px" }}>
                <img style={imgStyle} src={clinic2} alt="" srcset="" />
                <img style={imgStyle} src={clinic1} alt="" srcset="" />
                <img style={imgStyle} src={clinic3} alt="" srcset="" />
            </div>

        </div>
    )
}
