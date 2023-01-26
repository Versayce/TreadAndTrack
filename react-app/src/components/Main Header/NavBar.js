
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../Auth/LogoutButton';
import styled from 'styled-components';

const NavBar = () => {
  return (
    <NavStyle>
    <span>
        <NavLink to='/' exact={true} activeClassName='active'>
            Home
        </NavLink>
    </span>
        <NavLink to='/login' exact={true} activeClassName='active'>
            Login
        </NavLink>
    <span>
        <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
        </NavLink>
    </span>
        <NavLink to='/users' exact={true} activeClassName='active'>
            Users
        </NavLink>
    <span>
        <NavLink to='/events' exact={true} activeClassName='active'>
            Events
        </NavLink>
    </span>
        <LogoutButton />
    </NavStyle>
  );
}

const NavStyle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    & span {
        
    }
`

export default NavBar;
