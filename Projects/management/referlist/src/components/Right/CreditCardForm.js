import React, { useState } from "react";
import Card from "../../assets/card.png";

function CreditCardForm() {
  const [value, setValue] = useState({
    CardNumber: "",
    Date: "",
    CVC: "",
  });
  return (
    <form className="form">
      <img className="img" alt="creditcard logo" src={Card} />
      <input
        className="input card-number"
        type="number"
        value={value.CardNumber}
        onChange={(e) => {
          let num = e.target.value;
          setValue({
            ...value,
            CardNumber: num.length > 19 ? "" : num,
          });
        }}
        max="16"
        placeholder="Card number"
      />
      <input
        type="text"
        className="input date"
        value={value.Date}
        onChange={(e) => {
          let num = e.target.value;
          setValue({
            ...value,
            Date: num,
          });
        }}
        type="number"
        max="4"
        placeholder="MM / YY"
      />
      <input className="input cvc" type="number" max="3" placeholder="CVC" />
    </form>
  );
}

export default CreditCardForm;
