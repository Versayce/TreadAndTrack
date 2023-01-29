
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../Auth/LogoutButton';
import styled from 'styled-components';

const NavBar = () => {
  return (
    <NavStyle>

        <NavLink to='/' exact={true} activeClassName='active'>
            Home
        </NavLink>

        <NavLink to='/login' exact={true} activeClassName='active'>
            Login
        </NavLink>

        <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
        </NavLink>

        <NavLink to='/users' exact={true} activeClassName='active'>
            Users
        </NavLink>

        <NavLink to='/events' exact={true} activeClassName='active'>
            Events
        </NavLink>

        <LogoutButton />

    </NavStyle>
  );
}

const NavStyle = styled.div`
    width: 100%;
    height: 72px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    /* position: fixed; */
    gap: 2vw;
    padding-right: 100px;
    text-decoration: none;
    background-color: #ffffff;
    color: #dadada;
`

export default NavBar;
