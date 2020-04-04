import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  FiPackage,
  FiUser,
  FiUsers,
  FiTruck,
  FiList,
  FiShoppingCart,
  FiMap,
} from 'react-icons/fi';
import {
  FaRoute,
  FaSearch,
  FaBarcode,
} from 'react-icons/fa';

export default function SideBar() {
  return (
    <SideBarMain>
      <SideBarSection>
        <SectionTitle>Customer</SectionTitle>

        <SideBarLink to="/customers">
          <span>
            {' '}
            <FiUser />
          </span>
          Customers
        </SideBarLink>
        <SideBarLink to="/orders">
          <span><FiShoppingCart /></span>
          Orders
        </SideBarLink>
        <SideBarLink to="/products">
          <span><FaBarcode /></span>
          Products
        </SideBarLink>
        <SideBarLink to="/packages">
          <span><FiPackage /></span>
          Packages
        </SideBarLink>
      </SideBarSection>
      <SideBarSection>
        <SectionTitle>Orders</SectionTitle>
        <SideBarLink to="/stops">
          <span><FiMap /></span>
          Stops
        </SideBarLink>
        <SideBarLink to="/drivers">
          <span><FiUsers /></span>
          Drivers
        </SideBarLink>
        <SideBarLink to="/driverreports">
          <span><FiList /></span>
          Driver Reports
        </SideBarLink>
        <SideBarLink to="/trucks">
          <span><FiTruck /></span>
          Trucks
        </SideBarLink>
        <SideBarLink to="/deliveryroutes">
          <span><FaRoute /></span>
          Delivery Routes
        </SideBarLink>
      </SideBarSection>
      <SideBarSection>
        <SectionTitle>Users</SectionTitle>
        <SideBarLink to="/users">
          <span><FiUsers /></span>
          Users

        </SideBarLink>
      </SideBarSection>

    </SideBarMain>
  );
}

const SideBarLink = styled(Link)`
text-decoration: none;
color: black;
padding: .25rem 0;
span{
    padding-right: .5rem;
}
`;

const SideBarSection = styled.div`
display: flex;
flex-direction: column;
`;

const SectionTitle = styled.p`
margin-bottom: 0.5rem;
font-weight: bold;
`;

const SideBarMain = styled.div`
height: 100%
width: 10rem;
position: fixed;
top: 0;
left: 0;
bottom: 0;
overflow-x: hidden;
background-color: lightgray;
padding: 3rem 1rem 0 1rem;

`;
