import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SideBar from "./SideBar";
import Table from "../utils/Table";
import AddTruckForm from "./AddTruckForm";

export default function Trucks() {
  const [dbdata, setDBdata] = useState([]);

  async function fetchData() {
    await fetch("https://express-delivery-api.herokuapp.com/api/v1/trucks")
      .then((res) => res.json())
      .then((data) => setDBdata(data.data));
  }

  useEffect(() => {
    fetchData();
  }, []);

  const columns = [
    { Header: "Truck Year", accessor: "truck_year" },
    { Header: "Truck Make", accessor: "truck_make" },
    { Header: "Truck Model", accessor: "truck_model" },
    { Header: "Truck License Number", accessor: "truck_license_number" },
  ];
  return (
    <Main>
      <SideBar />
      <Table
        data={dbdata}
        columns={columns}
        title="Trucks"
        filterField="customer_name"
      />
      <AddTruckForm />
    </Main>
  );
}

const Main = styled.div`
  display: flex;
`;
