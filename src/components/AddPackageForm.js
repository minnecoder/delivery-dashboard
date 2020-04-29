import React, { useState } from "react";
import styled from "styled-components";
import currentDate from "../utils/helpers";

export default function AddForm() {
  const [values, setValues] = useState({});

  async function addCustomer() {
    await fetch(`https://express-delivery-api.herokuapp.com/api/v1/packages`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        orderId: values.orderId,
        productId: values.productId,
        unit_price: values.unitPrice,
        quantity: values.quantity,
        createdAt: currentDate(),
        updatedAt: currentDate(),
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  const handleChange = (event) => {
    event.persist();
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    addCustomer();
  };

  return (
    <div>
      <CustForm onSubmit={handleSubmit}>
        <input
          name="orderId"
          type="text"
          value={values.orderId}
          onChange={handleChange}
          placeholder="Order ID"
        />
        <input
          name="productId"
          type="text"
          value={values.productId}
          onChange={handleChange}
          placeholder="Product ID"
        />
        <input
          name="unitPrice"
          type="text"
          value={values.unitPrice}
          onChange={handleChange}
          placeholder="Unit Price"
        />
        <input
          name="quantity"
          type="text"
          value={values.quantity}
          onChange={handleChange}
          placeholder="Quantity"
        />
        <input type="submit" value="Add" />
      </CustForm>
    </div>
  );
}

const CustForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
  margin-left: 2rem;
  width: 35rem;
  input {
    margin: 0.5rem 0;
    padding: 1rem 0;
  }
`;
