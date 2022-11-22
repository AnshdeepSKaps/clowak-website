import React from 'react'
import vars from '../vars'

export default function testimonials() {

    return (
        <div id="testimonials" >
            <h1 className='text-center header' style={{ color: vars.darkGreen, fontWeight: "700", fontSize: "3rem" }}>TESTIMONIALS</h1>
            <div className='mt-5 p-5 d-flex align-items-center justify-content-center'>
                <div className="testimonial-card"></div>
            </div>
        </div>
    )
}
