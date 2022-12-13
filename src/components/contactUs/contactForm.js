
import vars from '../vars';
import React ,{useRef}from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {

    const form = useRef(0);

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_1w5tufo', 'template_9lq2ddj', form.current, 'e3VB3a5w9cJZ1Qv8S')
        .then((result) => {
          alert("Email succesfully sent");
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    };

    const labelStyle = {
        color: vars.darkGreen,
        fontSize: "1rem",
        fontWeight: "600"
    }

    return (
        <form id="contact-form" className="" ref={form} onSubmit={sendEmail}>

            <div className="d-flex flex-column form-child">
                <label style={labelStyle} htmlFor="">Your Name:</label>
                <input className="form-input" type="text" name="user_name" />
            </div>

            <div className="d-flex flex-column form-child">
                <label style={labelStyle} htmlFor="">Phone No.:</label>
                <input className="form-input" type="text" name="phone_no" />
            </div>

            <div className="d-flex flex-column form-child">
                <label style={labelStyle} htmlFor="">Your Email</label>
                <input className="form-input" type="text" name="user_email" />
            </div>

            <div className="d-flex flex-column form-child">
                <label style={labelStyle} htmlFor="">Subject:</label>
                <input className="form-input" type="text"  name="subject"/>
            </div>

            <div className="d-flex flex-column form-child">
                <label style={labelStyle} htmlFor="">Message:</label>
                <textarea className="form-input" type="text" style={{ textAlign: "start", height: "300px" }} name="message" />
            </div>

            <button style={vars.darkBtnStyle} className="mt-3">Submit</button>
        </form>
    )
}



// const App = () => {
 

//   return (
//     <form ref={form} onSubmit={sendEmail}>
//       <div>Name</div>
//       <input type="text" name="user_name" />
//       <div>Email</div>
//       <input type="email" name="user_email" /><br/>
//       <div>Message</div>
//       <textarea name="message" /><br/>
//       <input type="submit" value="Send" />
//     </form>
//   );
// };
