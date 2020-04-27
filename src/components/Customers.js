import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SideBar from "./SideBar";
import Table from "../utils/Table";
import AddForm from "./AddForm";

export default function Customers() {
  const [dbdata, setDBdata] = useState([]);

  async function fetchData() {
    await fetch("https://express-delivery-api.herokuapp.com/api/v1/customers")
      .then((res) => res.json())
      .then((data) => setDBdata(data.data));
  }

  useEffect(() => {
    fetchData();
  }, []);

  const columns = [
    { Header: "Customer Name", accessor: "customer_name" },
    { Header: "Address", accessor: "address" },
    { Header: "City", accessor: "city" },
    { Header: "State", accessor: "state" },
    { Header: "Zip", accessor: "zip" },
    { Header: "Phone", accessor: "phone" },
    { Header: "Email", accessor: "email" },
  ];
  return (
    <Main>
      <SideBar />
      <Table
        data={dbdata}
        columns={columns}
        title="Customers"
        filterField="customer_name"
      />
      <AddForm />
    </Main>
  );
}

const Main = styled.div`
  display: flex;
`;
