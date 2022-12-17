import React from 'react'
import vars from '../vars'
import Details from './details'
import product1 from "../../images/home/ourproduct1.png"
import product2 from "../../images/home/ourproduct2.png"
import product3 from "../../images/home/ourproduct3.png"

export default function product() {
  return (
    <div>
      <h1 className="header text-center mt-5" style={{ marginBottom: "100px", color: vars.darkGreen }}>OUR PRODUCTS</h1>
      <Details name="Lorem Ipsum is simply dummy text of the printing and typesetting
       industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and scrambled it
         to make a type specimen book. It has survived not only five centuries, but also 
         the leap into electronic typesetting, remaining essentially 
      unchanged. It was popularised in the 1960s with the 
      release of Letraset sheets containing Lorem Ipsum passages" image={product1} />;
      <Details name=" Lorem Ipsum is simply dummy text of the printing and typesetting
       industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and scrambled it
         to make a type specimen book. It has survived not only five centuries, but also 
         the leap into electronic typesetting, remaining essentially 
      unchanged. It was popularised in the 1960s with the 
      release of Letraset sheets containing Lorem Ipsum passages" image={product2} />;
      <Details name="Lorem Ipsum is simply dummy text of the printing and typesetting
       industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and scrambled it
         to make a type specimen book. It has survived not only five centuries, but also 
         the leap into electronic typesetting, remaining essentially 
      unchanged. It was popularised in the 1960s with the 
      release of Letraset sheets containing Lorem Ipsum passages" image={product3} />;
    </div>
  );
}
