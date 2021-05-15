import React from "react";

function PriceCard(props) {
  return (
    <div>
      <p className='plan'>{props.plan}</p>
      <p className='price'>{props.price}</p>
      <ul>
        {props.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  );
}

export default PriceCard;
