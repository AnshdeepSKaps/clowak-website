import React from 'react'
import vars from '../vars'

export default function contactForm() {

    const labelStyle = {
        color: vars.darkGreen,
        fontSize: "1rem",
        fontWeight: "600"
    }

    return (
        <form id="join-form" className="">

            <div className="d-flex flex-column form-child">
                <label style={labelStyle} htmlFor="">Your Name:</label>
                <input className="form-input" type="text" />
            </div>

            <div className="d-flex flex-column form-child">
                <label style={labelStyle} htmlFor="">Phone No.:</label>
                <input className="form-input" type="text" />
            </div>

            <div className="d-flex flex-column form-child">
                <label style={labelStyle} htmlFor="">Email Address:</label>
                <input className="form-input" type="email" />
            </div>

            <div className="d-flex flex-column form-child">
                <label style={labelStyle} htmlFor="">Position You Wish To Apply For:</label>
                <input className="form-input" type="text" />
            </div>

            <div className="d-flex flex-column form-child">
                <label style={labelStyle} htmlFor="">Resume:</label>
                <input className="form-input" type="file" />
            </div>

            <button style={vars.darkBtnStyle} className="mt-3">Submit</button>
        </form>
    )
}
