import React from 'react'
import vars from '../vars'

export default function contactForm() {

    const labelStyle = {
        color: vars.darkGreen,
        fontSize: "1rem",
        fontWeight: "600"
    }

    return (
        <form id="contact-form" className="">

            <div className="d-flex flex-column form-child">
                <label style={labelStyle} htmlFor="">Your Name:</label>
                <input className="form-input" type="text" />
            </div>

            <div className="d-flex flex-column form-child">
                <label style={labelStyle} htmlFor="">Phone No.:</label>
                <input className="form-input" type="text" />
            </div>

            <div className="d-flex flex-column form-child">
                <label style={labelStyle} htmlFor="">Subject:</label>
                <input className="form-input" type="text" />
            </div>

            <div className="d-flex flex-column form-child">
                <label style={labelStyle} htmlFor="">Message:</label>
                <textarea className="form-input" type="text" style={{ textAlign: "start", height: "300px" }} />
            </div>

            <button style={vars.darkBtnStyle} className="mt-3">Submit</button>
        </form>
    )
}
