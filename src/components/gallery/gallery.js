import React from 'react'
import vars from '../vars'
import clinic1 from '../../images/aboutUs/clinic1.png'
import clinic2 from '../../images/aboutUs/clinic2.png'
import clinic3 from '../../images/aboutUs/clinic3.png'

export default function gallery() {
    return (
        <div>
            <h1 className="header text-center mt-5" style={{ color: vars.darkGreen }}>GALLERY</h1>

            <div id="gallery-box" className="mt-5 mx-auto">

                <h3 className='text-center'>Local Dental Workshop</h3>
                <div className='gallery-row d-flex flex-row align-items-center justify-content-around' style={{ background: vars.lightGreen }} >
                    <img height="300px" width="350px" src={clinic2} alt="" srcset="" />
                    <img height="300px" width="350px" src={clinic1} alt="" srcset="" />
                    <img height="300px" width="350px" src={clinic3} alt="" srcset="" />
                </div>
            </div>


        </div>
    )
}
