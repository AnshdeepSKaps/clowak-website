import React from 'react'
import vars from '../vars'

export default function ourTeam() {

    const mainDivStyle = {
        width: "100vw",
        margin: "auto",
        marginTop: "10vh",
        gap: "2rem",
        background: vars.grey,
        padding: "70px 5vw"
    }

    const circleStyle = {
        width: "17vw",
        height: "17vw",
        borderRadius: "50%",
        background: "white",
        justifySelf: "center",
        boxShadow: "5px 10px 4px rgba(0, 0, 0, 0.25)"
    }

    const grid = {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: "5vw"
    }

    return (
        <div style={mainDivStyle}>
            <h1 className="header text-center" style={{ fontWeight: "700", color: vars.darkGreen }}>MEET OUR TEAM</h1>
            <div style={grid} className='mt-5 align-items-center justify-content-around'>
                <div style={circleStyle}></div>
                <div style={circleStyle}></div>
                <div style={circleStyle}></div>
                <div style={circleStyle}></div>
                <div style={circleStyle}></div>
                <div style={circleStyle}></div>
            </div>
        </div>
    )
}
