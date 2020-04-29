import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SideBar from "./SideBar";
import Table from "../utils/Table";
import AddPackageForm from "./AddPackageForm";

export default function Packages() {
  const [dbdata, setDBdata] = useState([]);

  async function fetchData() {
    await fetch("https://express-delivery-api.herokuapp.com/api/v1/packages")
      .then((res) => res.json())
      .then((data) => setDBdata(data.data));
  }

  useEffect(() => {
    fetchData();
  }, []);

  const columns = [
    { Header: "Order ID", accessor: "orderId" },
    { Header: "Product ID", accessor: "productId" },
    { Header: "Unit Price", accessor: "unit_price" },
    { Header: "Quantity", accessor: "quantity" },
  ];

  return (
    <Main>
      <SideBar />
      <Table
        data={dbdata}
        columns={columns}
        title="Packages"
        filterField="orderId"
      />
      <AddPackageForm />
    </Main>
  );
}
const Main = styled.div`
  display: flex;
`;
