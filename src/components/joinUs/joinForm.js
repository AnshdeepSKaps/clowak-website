import { React, useRef } from 'react'
import vars from '../vars'
import emailjs from '@emailjs/browser';

export default function JoinForm() {

    const form = useRef(0);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_1w5tufo', 'template_9lq2ddj', form.current, 'e3VB3a5w9cJZ1Qv8S')
            .then((result) => {
                alert("Email succesfully sent");;
            }, (error) => { });
        e.target.reset();
    };

    const labelStyle = {
        color: vars.darkGreen,
        fontSize: "1rem",
        fontWeight: "600"
    }

    return (
        <form id="join-form" ref={form} onSubmit={sendEmail}>

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
