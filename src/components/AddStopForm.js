import React, { useState } from "react";
import styled from "styled-components";
import currentDate from "../utils/helpers";

export default function AddForm() {
  const [values, setValues] = useState({});

  async function addCustomer() {
    await fetch(`https://express-delivery-api.herokuapp.com/api/v1/stops`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        customerId: values.custId,
        orderId: values.orderId,
        deliveryRouteId: values.deliveryRouteId,
        truckId: values.truckId,
        driverId: values.driverId,
        is_delivered: values.isDelivered,
        is_signed: values.isSigned,
        reason_code: values.reasonCode,
        signer_name: values.signerName,
        start_time: values.startTime,
        stop_time: values.stopTime,
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
          name="orderId"
          type="text"
          value={values.orderId}
          onChange={handleChange}
          placeholder="Order ID"
        />
        <input
          name="deliveryRouteId"
          type="text"
          value={values.deliveryRouteId}
          onChange={handleChange}
          placeholder="Delivery Route ID"
        />
        <input
          name="truckId"
          type="text"
          value={values.truckId}
          onChange={handleChange}
          placeholder="Truck ID"
        />
        <input
          name="driverId"
          type="text"
          value={values.driverId}
          onChange={handleChange}
          placeholder="Driver ID"
        />
        <input
          name="isDelivered"
          type="text"
          value={values.isDelivered}
          onChange={handleChange}
          placeholder="Is Delivered"
        />
        <input
          name="isSigned"
          type="text"
          value={values.isSigned}
          onChange={handleChange}
          placeholder="Is Signed"
        />
        <input
          name="reasonCode"
          type="text"
          value={values.reasonCode}
          onChange={handleChange}
          placeholder="Reason Code"
        />
        <input
          name="signerName"
          type="text"
          value={values.signerName}
          onChange={handleChange}
          placeholder="Signer Name"
        />
        <input
          name="startTime"
          type="text"
          value={values.startTime}
          onChange={handleChange}
          placeholder="Start Time"
        />
        <input
          name="stopTime"
          type="text"
          value={values.stopTime}
          onChange={handleChange}
          placeholder="Stop Time"
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
