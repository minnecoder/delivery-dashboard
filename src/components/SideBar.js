import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  FiPackage,
  FiUser,
  FiUsers,
  FiTruck,
  FiList,
  FiShoppingCart,
  FiMap,
} from "react-icons/fi";
import { FaRoute, FaBarcode } from "react-icons/fa";
import user from "../images/user.svg";

export default function SideBar() {
  return (
    <SideBarMain>
      <CompanyLink to="/">
        <p>Company Name</p>
      </CompanyLink>
      <SideBarCenter>
        <SideBarSection>
          <SectionTitle>Customer</SectionTitle>
          <SideBarLink to="/customers">
            <span>
              <FiUser />
            </span>
            Customers
          </SideBarLink>
          <SideBarLink to="/orders">
            <span>
              <FiShoppingCart />
            </span>
            Orders
          </SideBarLink>
          <SideBarLink to="/products">
            <span>
              <FaBarcode />
            </span>
            Products
          </SideBarLink>
          <SideBarLink to="/packages">
            <span>
              <FiPackage />
            </span>
            Packages
          </SideBarLink>
        </SideBarSection>
        <SideBarSection>
          <SectionTitle>Orders</SectionTitle>
          <SideBarLink to="/stops">
            <span>
              <FiMap />
            </span>
            Stops
          </SideBarLink>
          <SideBarLink to="/drivers">
            <span>
              <FiUsers />
            </span>
            Drivers
          </SideBarLink>
          <SideBarLink to="/driverreports">
            <span>
              <FiList />
            </span>
            Driver Reports
          </SideBarLink>
          <SideBarLink to="/trucks">
            <span>
              <FiTruck />
            </span>
            Trucks
          </SideBarLink>
          <SideBarLink to="/deliveryroutes">
            <span>
              <FaRoute />
            </span>
            Delivery Routes
          </SideBarLink>
        </SideBarSection>
        <SideBarSection>
          <SectionTitle>Users</SectionTitle>
          <SideBarLink to="/users">
            <span>
              <FiUsers />
            </span>
            Users
          </SideBarLink>
        </SideBarSection>
      </SideBarCenter>
      <User>
        <UserImage src={user} alt="user icon" />
        <UserLink to="/user">
          <p>User Name</p>
        </UserLink>
      </User>
    </SideBarMain>
  );
}

const SideBarLink = styled(Link)`
  text-decoration: none;
  color: black;
  padding: 0.8rem 0;
  // font-weight: 600;
  span {
    padding-right: 0.5rem;
  }
  &:hover {
    background-color: white;
    border-radius: 10px;
  }
`;

const SideBarSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0;
`;

const SectionTitle = styled.p`
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

const SideBarMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 10rem;
  position: fixed;
  border-radius: 10px;
  top: 0;
  left: 0;
  bottom: 0;
  margin-right: 3rem;
  overflow-x: hidden;
  padding: 0 1rem;
  background-color: #eee;
`;

const UserImage = styled.img`
  margin-top: 1.5rem;
  padding: 0 0.75rem;
  height: 1.25rem;
  width: 1.25rem;
`;

const User = styled.div`
  display: flex;
`;

const SideBarCenter = styled.div``;

const CompanyLink = styled(Link)`
  text-decoration: none;
  color: black;
  padding: 0.8rem 0;
  span {
    padding-right: 0.5rem;
  }
`;

const UserLink = styled(Link)`
  text-decoration: none;
  color: black;
  padding: 0.8rem 0;
  span {
    padding-right: 0.5rem;
  }
`;
