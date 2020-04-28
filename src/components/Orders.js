import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SideBar from "./SideBar";
import Table from "../utils/Table";
import AddOrderForm from "./AddOrderForm";

export default function Orders() {
  const [dbdata, setDBdata] = useState([]);

  async function fetchData() {
    await fetch("https://express-delivery-api.herokuapp.com/api/v1/orders")
      .then((res) => res.json())
      .then((data) => setDBdata(data.data));
  }

  useEffect(() => {
    fetchData();
  }, []);

  const columns = [
    { Header: "Customer ID", accessor: "customerId" },
    { Header: "Order Number", accessor: "order_number" },
    { Header: "Order Date", accessor: "order_date" },
    { Header: "Order Status", accessor: "order_status" },
    { Header: "Order Total", accessor: "order_total" },
  ];

  return (
    <Main>
      <SideBar />
      <Table
        data={dbdata}
        columns={columns}
        title="Orders"
        filterField="order"
      />
      <AddOrderForm />
    </Main>
  );
}
const Main = styled.div`
  display: flex;
`;
