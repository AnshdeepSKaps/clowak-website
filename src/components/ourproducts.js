import React from 'react'
import vars from './vars'
import product1 from '../images/ourproduct1.png'
import product2 from "../images/ourproduct2.png"
import product3 from "../images/ourproduct3.png"

export default function ourproducts() {

    const mainDivStyle = {
        height: "fit-content",
        width: "100vw",
        background: vars.lightGreen,
        margin: "auto",
        marginTop: '10vh',
        paddingTop: "5vh"
    }

    const productStyle = {
        width: "20vw",
        gap: "3rem",
        justifySelf: "center"
    }

    const pStyle = {
        fontWeight: "500"
    }


    return (
        <div style={mainDivStyle}>
            <h1 className='text-center' style={{ fontWeight: "600", color: vars.darkGreen }}>Our Products</h1>

            <div className='d-flex flex-row align-items-center justify-content-around'>

                <div style={productStyle} className="d-flex flex-column align-items-center justify-content-center">
                    <img src={product1} alt="" />
                    <p style={pStyle} className='mt-3 text-center'>This product supports mobile dental vehicles which helps to increase the dental
                        service in rural communities, dental camps etc.</p>
                    <div style={vars.lightBtnStyle} className="btn">Know More</div>
                </div>

                <div style={productStyle} className="d-flex flex-column align-items-center justify-content-center">
                    <img src={product2} alt="" />
                    <p style={pStyle} className='mt-3 text-center'>It's a standalone dental kit which can be used in domiciliary, military, humanitarian and
                        normally inaccessible environments. So basically it's a big complete case for dental care
                        treatment.</p>
                    <div style={vars.lightBtnStyle} className="btn">Know More</div>
                </div>

                <div style={productStyle} className="d-flex flex-column align-items-center justify-content-center">
                    <img src={product3} alt="" />
                    <p style={pStyle} className='mt-3 text-center'>It's a compact small case which is effortless to carry everywhere.</p>
                    <div style={vars.lightBtnStyle} className="btn">Know More</div>
                </div>
            </div>
        </div>
    )
}