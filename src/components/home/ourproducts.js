import React from 'react'
import vars from '../vars'
import product1 from '../../images/home/ourproduct1.png'
import product2 from "../../images/home/ourproduct2.png"
import product3 from "../../images/home/ourproduct3.png"

export default function ourproducts() {

    const pStyle = {
        fontWeight: "500"
    }

    return (
        <div id="home-our-products" style={{ background: vars.lightGreen }}>
            <h1 className='text-center' style={{ fontWeight: "700", color: vars.darkGreen }}>OUR PRODUCTS</h1>

            <div id="our-products" className='d-flex flex-row align-items-center justify-content-around'>

                <div className="home-product-item d-flex flex-column align-items-center justify-content-center product">
                    <img style={{ height: "200px" }} src={product1} alt="" />
                    <p style={pStyle} className='text-center product-description'>This product supports mobile dental vehicles which helps to increase the dental
                        service in rural communities, dental camps etc.</p>
                    <div style={vars.lightBtnStyle} className="btn">Know More</div>
                </div>

                <div className="home-product-item d-flex flex-column align-items-center justify-content-center product">
                    <img style={{ height: "300px" }} src={product2} alt="" />
                    <p style={pStyle} className='text-center product-description'>It's a standalone dental kit which can be used in domiciliary, military, humanitarian and
                        normally inaccessible environments. So basically it's a big complete case for dental care
                        treatment.</p>
                    <div style={vars.lightBtnStyle} className="btn">Know More</div>
                </div>

                <div className="home-product-item d-flex flex-column align-items-center justify-content-center product">
                    <img style={{ height: "200px" }} src={product3} alt="" />
                    <p style={pStyle} className='text-center product-description'>It's a compact small case which is effortless to carry everywhere.</p>
                    <div style={vars.lightBtnStyle} className="btn">Know More</div>
                </div>
            </div>
        </div>
    )
}
