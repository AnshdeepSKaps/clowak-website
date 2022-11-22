import React from 'react'
import vars from '../vars'
import vit from '../../images/vit.png'
import gdc from '../../images/home/gdc.png'
import stanford from '../../images/home/stanford.png'
import dstnidhi from '../../images/home/dstnidhi.png'

export default function awards() {

    return (
        <div>
            <h1 className='text-center' style={{ fontSize: "3rem", marginTop: "10vh", fontWeight: "700", color: vars.darkGreen }}>AWARDS AND RECOGNITIONS </h1>
            <div id="awards" style={{ background: vars.lightGreen }} className="mt-5 d-flex flex-row align-items-center justify-content-around">
                <img src={vit} alt="" />
                <img src={stanford} alt="" />
                <img src={gdc} alt="" />
                <img src={dstnidhi} alt="" />
            </div>
        </div>
    )
}
