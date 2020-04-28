import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SideBar from "./SideBar";
import Table from "../utils/Table";
import AddProductForm from "./AddProductForm";

export default function Products() {
  const [dbdata, setDBdata] = useState([]);

  async function fetchData() {
    await fetch("https://express-delivery-api.herokuapp.com/api/v1/products")
      .then((res) => res.json())
      .then((data) => setDBdata(data.data));
  }

  useEffect(() => {
    fetchData();
  }, []);

  const columns = [
    { Header: "Item", accessor: "item" },
    { Header: "Description", accessor: "description" },
    { Header: "Cost", accessor: "cost" },
    { Header: "Price", accessor: "price" },
    { Header: "On Hand", accessor: "on_hand" },
  ];
  return (
    <Main>
      <SideBar />
      <Table
        data={dbdata}
        columns={columns}
        title="Products"
        filterField="item"
      />
      <AddProductForm />
    </Main>
  );
}

const Main = styled.div`
  display: flex;
`;
