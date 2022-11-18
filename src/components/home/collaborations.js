import React from 'react'
import vars from '../vars'
import vit2 from '../../images/collaborations/vit2.png'
import vdc from '../../images/collaborations/vdc.png'
import idk from '../../images/collaborations/idk.png'
import government from '../../images/collaborations/government.png'
import nafter from '../../images/collaborations/nafter.png'
import nohp from '../../images/collaborations/nohp.png'
import startupIndia from '../../images/collaborations/startupindia.png'
import startupTN from '../../images/collaborations/startuptn.png'

export default function collaborations() {

    const mainDivStyle = {
        // border: "2px solid red",
        background: vars.lightGreen,
        height: "fit-content",
        width: "100vw",
        marginTop: "5vh",
        padding: "20px 5vw",
        // filter: "drop-shadow(0px 15px 15px rgba(0, 0, 0, 0.25))"
    }

    const imgStyle = {

        filter: "drop-shadow(0px 15px 15px rgba(0, 0, 0, 0.25))"
    }

    return (
        <div>
            <h1 className='text-center' style={{ marginTop: "10vh", color: vars.darkGreen, fontWeight: "700", fontSize: "3rem" }}>OUR COLLABORATIONS</h1>
            <div style={mainDivStyle}>
                <div style={{ gap: "96px", flexWrap: "wrap" }} className="d-flex flex-row align-items-center justify-content-around">
                    <img style={imgStyle} src={vit2} alt="" />
                    <img style={imgStyle} src={government} alt="" />
                    <img style={imgStyle} src={idk} alt="" />
                    <img style={imgStyle} src={nafter} alt="" />
                    <img style={imgStyle} src={nohp} alt="" />
                    <img style={imgStyle} src={startupIndia} alt="" />
                    <img style={imgStyle} src={startupTN} alt="" />
                    <img style={imgStyle} src={vdc} alt="" />
                </div>
            </div>
        </div >
    )
}
