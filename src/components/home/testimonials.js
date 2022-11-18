import React from 'react'
import vars from '../vars'

export default function testimonials() {

    const mainDivStyle = {
        height: "fit-content",
        width: "100vw",
        marginTop: "10vh"
    }

    const cardStyle = {
        height: "40vh",
        width: "70%",
        boxShadow: "0px 7px 12px 10px rgba(0, 0, 0, 0.13)",
        borderRadius: "25px 0px",
        margin: 'auto',
    }

    return (
        <div style={mainDivStyle}>
            <h1 className='text-center' style={{ color: vars.darkGreen, fontWeight: "700", fontSize: "3rem" }}>TESTIMONIALS</h1>
            <div className='mt-5 p-5'>
                <div style={cardStyle}></div>
            </div>
        </div>
    )
}
