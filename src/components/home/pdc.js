import React from 'react'
import vars from '../vars'
import pdc from '../../images/home/pdc.png'

export default function PDC() {

    return (
        <div id="home-pdc" style={{ background: vars.lightGreen }} className="d-flex flex-row justify-content-center align-items-center">
            <div style={{}}>
                <h1 className='header' style={{ color: vars.darkGreen, fontWeight: "700", fontSize: "3rem" }}>Portable Dentistry Unit</h1>
                <p id="home-pdc-description" className='home-text'>With the portable
                    dentistry clinic suitcase, it is possible to take dental care available to any individual, from the
                    elderly who cannot leave their homes, to people living in rural areas without regular access
                    to healthcare. The PDC provides a fully operative dental workspace in minutes, allowing for a dentist to travel to normally inaccessible areas and offer services there.</p>
                <div id="home-pdc-btn" style={vars.darkBtnStyle} className="btn">Know More</div>
            </div>
            <img id="home-pdc-image" src={pdc} alt="" />
        </div>
    )
}
