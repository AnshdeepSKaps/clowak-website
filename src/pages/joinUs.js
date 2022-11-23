import React from 'react'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import JoinUs from '../components/joinUs/joinUs'
import JoinForm from '../components/joinUs/joinForm'

export default function joinUs() {

    return (
        <div>
            <Navbar />
            <JoinUs />
            <JoinForm />
            <Footer />
        </div>
    )
}
