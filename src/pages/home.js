import React from 'react'
import PDC from '../components/home/pdc'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Awards from '../components/home/awards'
import Whypdc from '../components/home/whypdc'
import css from "../components/home/media.css"
import Aboutus from '../components/home/aboutus'
import Ourproducts from '../components/home/ourproducts'
import Testimonials from '../components/home/testimonials'
import Collaborations from '../components/home/collaborations'

export default function home() {

    return (
        <div>
            <Navbar />
            <PDC />
            <Whypdc />
            <Aboutus />
            <Ourproducts />
            <Testimonials />
            <Awards />
            <Collaborations />
            <Footer />
        </div>
    )
}
