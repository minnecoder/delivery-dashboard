import React, { useState } from "react";
import styled from "styled-components";
import currentDate from "../utils/helpers";

export default function AddForm() {
  const [values, setValues] = useState({});

  async function addCustomer() {
    await fetch(`https://express-delivery-api.herokuapp.com/api/v1/trucks`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        truck_year: values.custId,
        truck_make: values.orderNumber,
        truck_model: values.orderDate,
        truck_license_number: values.orderStatus,
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
          name="truckYear"
          type="text"
          value={values.truckYear}
          onChange={handleChange}
          placeholder="Truck Year"
        />
        <input
          name="truckMake"
          type="text"
          value={values.truckMake}
          onChange={handleChange}
          placeholder="Truck Make"
        />
        <input
          name="truckModel"
          type="text"
          value={values.truckModel}
          onChange={handleChange}
          placeholder="Truck Model"
        />
        <input
          name="truckLicenseNumber"
          type="text"
          value={values.truckLicenseNumber}
          onChange={handleChange}
          placeholder="Truck License Number"
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
