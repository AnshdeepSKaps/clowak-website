import React from 'react'
import vars from '../vars'

function details(props) {
    return (
        <div className="parent d-flex align-items-center justify-content-center">
            <div className="pimage">
                <img className="case" src={props.image} alt="product_image" />
            </div>
            <div>
                <h1 className="header product-header" style={{ fontWeight: "600", color: vars.darkGreen }}> Portable Dental Clinic</h1>
                <div className="text-justify home-text product-info" >
                    {props.name}

                </div>
            </div>
        </div>
    )
}
export default details;
