import React from "react";

import Белкарт from "../../assets/all-images/Белкарт .jpg";
import МИР from "../../assets/all-images/МИР .jpg";
import "../../styles/payment-method.css";

const PaymentMethod = () => {
  return (
    <>
        <div className="payment mt-1">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio" /> МИР
        </label>
        <img src={МИР} alt="" />
      </div>

      <div className="payment mt-2">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio" /> Белкарт
        </label>
        <img src={Белкарт} alt="" />
      </div>
      
      <div className="payment text-end mt-5">
        <button>Зарезервировать</button>
      </div>
    </>
  );
};

export default PaymentMethod;
