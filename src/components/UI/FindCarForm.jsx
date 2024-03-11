import React from "react";
import "../../styles/find-car-form.css";
import "../../styles/find-car-form.css";
import { Form, FormGroup } from "reactstrap";

const FindCarForm = () => {
  return (
    <Form className="form">
      <div className=" d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group">
          <input type="text" placeholder="Адрес" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="text" placeholder="Адрес доставки" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="date" placeholder="Дата поездки" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input
            className="journey__time"
            type="time"
            placeholder="Дата поездки"
            required
          />
        </FormGroup>
        <FormGroup className="select__group">
          <select>
            <option value="ac">Автомобиль с кондиционером</option>
            <option value="non-ac">Автомобиль без кондиционера</option>
          </select>
        </FormGroup>

        <FormGroup className="form__group">
          <button className="btn find__car-btn">Найти машину</button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindCarForm;
