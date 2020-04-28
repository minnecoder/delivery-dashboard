import React, { useState } from "react";
import styled from "styled-components";
import currentDate from "../utils/helpers";

export default function AddForm() {
  const [values, setValues] = useState({});

  async function addCustomer() {
    await fetch(`https://express-delivery-api.herokuapp.com/api/v1/products`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        item: values.item,
        description: values.description,
        cost: values.cost,
        price: values.price,
        on_hand: values.onHand,
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
          name="item"
          type="text"
          value={values.item}
          onChange={handleChange}
          placeholder="Item"
        />
        <input
          name="description"
          type="text"
          value={values.description}
          onChange={handleChange}
          placeholder="Description"
        />
        <input
          name="cost"
          type="text"
          value={values.cost}
          onChange={handleChange}
          placeholder="Cost"
        />
        <input
          name="price"
          type="text"
          value={values.price}
          onChange={handleChange}
          placeholder="Price"
        />
        <input
          name="onHand"
          type="text"
          value={values.onHand}
          onChange={handleChange}
          placeholder="On Hand"
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
