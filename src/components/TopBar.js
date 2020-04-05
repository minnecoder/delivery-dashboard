import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import downArrow from '../images/down-arrow.svg';
import user from '../images/user.svg';
import menu from '../images/menu.svg';
import search from '../images/search.svg';

export default function TopBar() {
  return (
    <TopBarMain>
      <LeftSection>

        <TopBarImage src={menu} alt="hamburger menu icon" />
        <TopBarLink to="/">
          <p>Company Name</p>
        </TopBarLink>
      </LeftSection>
      <SearchSection>
        <TopBarImage src={search} alt="search icon" />
        <input type="search" name="" id="" placeholder="Search..." />
      </SearchSection>
      <UserSection>
        <TopBarLink to="/user"><p>User Name</p></TopBarLink>

        <TopBarImage src={user} alt="user icon" />
        <TopBarImage src={downArrow} alt="chevron down" />
      </UserSection>
    </TopBarMain>
  );
}

const TopBarMain = styled.div`
display: flex;
// background-color: lightgray;
justify-content: space-between;
`;

const LeftSection = styled.div`
display: flex;
`;

const SearchSection = styled.div`
display: flex;
`;

const UserSection = styled.div`
display: flex;
`;

const TopBarImage = styled.img`
margin-top: 1rem;
padding: 0 .75rem;
height: 1.25rem;
width: 1.25rem;
`;

const TopBarLink = styled(Link)`
text-decoration: none;
color: black;
`;
