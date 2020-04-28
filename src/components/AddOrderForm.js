import React, { useState } from "react";
import styled from "styled-components";
import currentDate from "../utils/helpers";

export default function AddForm() {
  const [values, setValues] = useState({});

  async function addCustomer() {
    await fetch(`https://express-delivery-api.herokuapp.com/api/v1/orders`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        customerId: values.custId,
        order_number: values.orderNumber,
        order_date: values.orderDate,
        order_status: values.orderStatus,
        order_total: values.orderTotal,
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
          name="customerId"
          type="text"
          value={values.customerId}
          onChange={handleChange}
          placeholder="Customer ID"
        />
        <input
          name="orderNumber"
          type="text"
          value={values.orderNumber}
          onChange={handleChange}
          placeholder="Order Number"
        />
        <input
          name="orderDate"
          type="text"
          value={values.orderDate}
          onChange={handleChange}
          placeholder="Order Date"
        />
        <input
          name="orderStatus"
          type="text"
          value={values.orderStatus}
          onChange={handleChange}
          placeholder="Order Status"
        />
        <input
          name="orderTotal"
          type="text"
          value={values.orderTotal}
          onChange={handleChange}
          placeholder="Order Total"
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
