import React from 'react'
import whypdc from '../images/whypdc.png'
import vars from './vars'

export default function Whypdc() {

    const mainDivStyle = {
        height: "fit-content",
        width: "80vw",
        paddingTop: "10vh",
        margin: "auto"
    }

    return (
        <div style={mainDivStyle} className="">

            <h1 className='text-center' style={{ fontWeight: "700", color: vars.darkGreen }}>WHY PDC?</h1>
            <p className="text-center mt-5" style={{ margin: "auto", width: "70vw", fontWeight: "600", fontSize: "1.3rem" }}>Certain people face difficulty in getting regular dental checkups. They may be elderly, unable
                to leave their home, or they may live in a rural area, where consistent dental care is not
                usually accessible. Clowak Innovation aims to solve these problems with the help of the
                portable dentistry clinic suitcase (PDC). The PDC makes dental care accessible to everyone,
                as it provides a fully operative dental workspace within a small, portable suitcase that can be carried around with ease.
            </p>
            <div className='d-flex justify-content-center align-items-center'>
                <img className='mt-5' style={{ width: "50vw" }} src={whypdc} alt="" />
            </div>
        </div>
    )
}
