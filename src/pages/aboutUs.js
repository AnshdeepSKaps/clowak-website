import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Aboutus from '../components/aboutUs/aboutUs'
import OurTeam from '../components/aboutUs/ourTeam'
import css from '../components/aboutUs/mediaAboutUs.css'

export default function aboutUs() {
    return (
        <div>
            <Navbar />
            <Aboutus />
            <OurTeam />
            <Footer />
        </div>
    )
}
