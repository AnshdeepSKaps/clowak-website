import React from 'react'
import Navbar from '../components/navbar'
import ContactUs from '../components/contactUs/contactUs'
import ContactForm from '../components/contactUs/contactForm'
import Footer from '../components/footer'

export default function contactUs() {
    return (
        <div>
            <Navbar />
            <ContactUs />
            <ContactForm />
            <Footer />
        </div>
    )
}
