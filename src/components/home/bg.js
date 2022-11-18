import React from 'react'
import vars from './vars'

export default function bg() {

    const bgStyle = {
        height: "90vh",
        width: "100vw",
        background: `${vars.lightGreen}`
    }

    return (
        <div style={bgStyle}>

        </div>
    )
}
