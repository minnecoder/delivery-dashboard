import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SideBar from "./SideBar";
import Table from "../utils/Table";
import AddDriverForm from "./AddDriverForm";

export default function Drivers() {
  const [dbdata, setDBdata] = useState([]);

  async function fetchData() {
    await fetch("https://express-delivery-api.herokuapp.com/api/v1/drivers")
      .then((res) => res.json())
      .then((data) => setDBdata(data.data));
  }

  useEffect(() => {
    fetchData();
  }, []);

  const columns = [
    { Header: "First Name", accessor: "first_name" },
    { Header: "Last Name", accessor: "last_name" },
  ];
  return (
    <Main>
      <SideBar />
      <Table
        data={dbdata}
        columns={columns}
        title="Drivers"
        filterField="last_name"
      />
      <AddDriverForm />
    </Main>
  );
}

const Main = styled.div`
  display: flex;
`;
