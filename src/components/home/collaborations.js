import React from 'react'
import vars from '../vars'
import vdc from '../../images/home/collaborations/vdc.png'
import idk from '../../images/home/collaborations/idk.png'
import nohp from '../../images/home/collaborations/nohp.png'
import vit2 from '../../images/home/collaborations/vit2.png'
import nafter from '../../images/home/collaborations/nafter.png'
import startupTN from '../../images/home/collaborations/startuptn.png'
import government from '../../images/home/collaborations/government.png'
import startupIndia from '../../images/home/collaborations/startupindia.png'

export default function collaborations() {

    const imgStyle = {
        filter: "drop-shadow(0px 15px 15px rgba(0, 0, 0, 0.25))",
        justifySelf: "center"
    }

    return (
        <div>
            <h1 className='text-center header' style={{ marginTop: "10vh", color: vars.darkGreen, fontWeight: "700", fontSize: "3rem" }}>OUR COLLABORATIONS</h1>
            <div className="align-items-center justify-content-around" id="collaborations" style={{background: vars.lightGreen }}>

                <img style={imgStyle} src={vit2} alt="" />
                <img style={imgStyle} src={government} alt="" />
                <img style={imgStyle} src={idk} alt="" />
                <img style={imgStyle} src={nohp} alt="" />
                <img style={imgStyle} src={startupIndia} alt="" />
                <img style={imgStyle} src={startupTN} alt="" />
                <img style={imgStyle} src={vdc} alt="" />
                <img style={imgStyle} src={nafter} alt="" />

            </div>
        </div >
    )
}
