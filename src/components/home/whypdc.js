import React from 'react'
import vars from '../vars'
import whypdc from '../../images/home/whypdc.png'

export default function Whypdc() {

    return (
        <div id="why-pdc" className="">
            <h1 className='text-center header' style={{ fontWeight: "700", color: vars.darkGreen }}>WHY PDC?</h1>
            <p className="home-text text-center mt-5" style={{ margin: "auto" }}>Certain people face difficulty in getting regular dental checkups. They may be elderly, unable
                to leave their home, or they may live in a rural area, where consistent dental care is not
                usually accessible. Clowak Innovation aims to solve these problems with the help of the
                portable dentistry clinic suitcase (PDC). The PDC makes dental care accessible to everyone,
                as it provides a fully operative dental workspace within a small, portable suitcase that can be carried around with ease.
            </p>
            <div className='d-flex justify-content-center align-items-center'>
                <img id="why-pdc-image" className='mt-5' style={{ width: "80vw" }} src={whypdc} alt="" />
            </div>
        </div>
    )
}
