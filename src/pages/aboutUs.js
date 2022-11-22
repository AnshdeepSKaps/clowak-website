import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Aboutus from '../components/aboutUs/aboutUs'
import OurTeam from '../components/aboutUs/ourTeam'

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
