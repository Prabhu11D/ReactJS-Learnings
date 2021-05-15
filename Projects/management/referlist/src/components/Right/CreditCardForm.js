import React, { useState } from "react";
import Card from "../../assets/card.png";
import style from "../../assets/sass/CredirCard.module.scss";

function CreditCardForm() {
  const [value, setValue] = useState({
    CardNumber: "",
    Date: "",
    CVC: "",
  });
  return (
    <form className={style.form}>
      <img className={style.img} alt="creditcard logo" src={Card} />
      <input
        className={style.input}
        style={{
          width: "200px",
        }}
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
        className={style.input}
        style={{
          width: "70px",
        }}
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
      <input
        style={{
          width: "40px",
        }}
        className={style.input}
        type="number"
        max="3"
        placeholder="CVC"
      />
    </form>
  );
}

export default CreditCardForm;
