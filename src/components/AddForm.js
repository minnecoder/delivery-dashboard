import React, { useState } from "react";
import styled from "styled-components";

export default function AddForm() {
  const [values, setValues] = useState({});
  const currentDate = () => {
    const today = new Date();
    return `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`;
  };
  async function addCustomer() {
    await fetch(`https://express-delivery-api.herokuapp.com/api/v1/customers`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        customer_name: values.custName,
        address: values.address,
        city: values.city,
        state: values.state,
        zip: values.zip,
        phone: values.phone,
        email: values.email,
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
          name="custName"
          type="text"
          value={values.custName}
          onChange={handleChange}
          placeholder="Customer Name"
        />
        <input
          name="address"
          type="text"
          value={values.address}
          onChange={handleChange}
          placeholder="Address"
        />
        <input
          name="city"
          type="text"
          value={values.city}
          onChange={handleChange}
          placeholder="City"
        />
        <input
          name="state"
          type="text"
          value={values.state}
          onChange={handleChange}
          placeholder="State"
        />
        <input
          name="zip"
          type="text"
          value={values.zip}
          onChange={handleChange}
          placeholder="Zip"
        />
        <input
          name="phone"
          type="text"
          value={values.phone}
          onChange={handleChange}
          placeholder="Phone"
        />
        <input
          name="email"
          type="text"
          value={values.email}
          onChange={handleChange}
          placeholder="Email"
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
