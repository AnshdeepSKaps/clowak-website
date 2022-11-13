import React from 'react'
import Navbar from '../components/navbar'
import PDC from '../components/pdc'
import Whypdc from '../components/whypdc'
import Aboutus from '../components/aboutus'
import Ourproducts from '../components/ourproducts'
import Testimonials from '../components/testimonials'
import Awards from '../components/awards'
import Collaborations from '../components/collaborations'

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
        </div>
    )
}
