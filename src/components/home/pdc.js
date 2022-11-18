import React from 'react'
import vars from '../vars'
import pdc from '../../images/pdc.png'

export default function PDC() {

    const mainDivStyle = {
        // border: "2px solid red",
        background: vars.lightGreen,
        height: "70vh",
        width: "100vw",
        padding: "0 20px",
        margin: "0 auto"
    }

    return (
        <div style={mainDivStyle} className="d-flex flex-row justify-content-center align-items-center">
            <div style={{ width: "55vw" }}>
                <h1 style={{ color: vars.darkGreen, fontWeight: "700", fontSize: "3rem" }}>Portable Dentistry Unit</h1>
                <p style={{ fontWeight: "700", fontSize: "1rem" }}>With the portable
                    dentistry clinic suitcase, it is possible to take dental care available to any individual, from the
                    elderly who cannot leave their homes, to people living in rural areas without regular access
                    to healthcare. The PDC provides a fully operative dental workspace in minutes, allowing for a dentist to travel to normally inaccessible areas and offer services there.</p>
                <div style={vars.darkBtnStyle} className="btn">Know More</div>
            </div>
            <img style={{ transform: "translateY(0px)", height: "30vw" }} src={pdc} alt="" />
        </div>
    )
}
