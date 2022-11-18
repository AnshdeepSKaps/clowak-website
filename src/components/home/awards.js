import React from 'react'
import vars from '../vars'
import vit from '../../images/vit.png'
import gdc from '../../images/gdc.png'
import stanford from '../../images/stanford.png'
import dstnidhi from '../../images/dstnidhi.png'

export default function awards() {

    const mainDivStyle = {
        height: "fit-content",
        width: "100vw",
        background: vars.lightGreen,
        margin: "auto",
        padding: "5vh 0",
        flexWrap: "wrap"
    }

    return (
        <div>
            <h1 className='text-center' style={{ fontSize: "3rem", marginTop: "10vh", fontWeight: "700", color: vars.darkGreen }}>AWARDS AND RECOGNITIONS </h1>
            <div style={mainDivStyle} className="mt-5 d-flex flex-row align-items-center justify-content-around">
                <img src={vit} alt="" />
                <img src={stanford} alt="" />
                <img src={gdc} alt="" />
                <img src={dstnidhi} alt="" />
            </div>
        </div>
    )
}
