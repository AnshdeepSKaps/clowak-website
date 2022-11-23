import React from 'react'
import vars from '../vars'

export default function joinUs() {
    return (
        <div>
            <div id="contact-us" className='d-flex align-items-center justify-content-center' style={{ background: vars.lightGreen }}>
                <div>
                    <h1 className='text-center header' style={{ color: vars.darkGreen, fontWeight: "600", fontSize: "3rem" }}>JOIN US</h1>
                    <p className='text-center' style={{ fontWeight: "600" }}>We're looking for passionate people to join our team!</p>
                </div>
            </div>
        </div>
    )
}
