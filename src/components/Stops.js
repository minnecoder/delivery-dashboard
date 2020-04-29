import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SideBar from "./SideBar";
import Table from "../utils/Table";
import AddStopForm from "./AddStopForm";

export default function Customers() {
  const [dbdata, setDBdata] = useState([]);

  async function fetchData() {
    await fetch("https://express-delivery-api.herokuapp.com/api/v1/stops")
      .then((res) => res.json())
      .then((data) => setDBdata(data.data));
  }

  useEffect(() => {
    fetchData();
  }, []);

  const columns = [
    { Header: "Customer ID", accessor: "customerId" },
    { Header: "Order ID", accessor: "orderId" },
    { Header: "Delivery Route ID", accessor: "deliveryRouteId" },
    { Header: "Truck ID", accessor: "truckId" },
    { Header: "Driver ID", accessor: "driverId" },
    { Header: "Is Delivered", accessor: "is_delivered" },
    { Header: "Is Signed", accessor: "is_signed" },
    { Header: "Reason Code", accessor: "reason_code" },
    { Header: "Signer Name", accessor: "signer_name" },
    { Header: "Start Time", accessor: "start_time" },
    { Header: "Stop Time", accessor: "stop_time" },
  ];
  return (
    <Main>
      <SideBar />
      <Table
        data={dbdata}
        columns={columns}
        title="Stops"
        filterField="customerId"
      />
      <AddStopForm />
    </Main>
  );
}

const Main = styled.div`
  display: flex;
`;
