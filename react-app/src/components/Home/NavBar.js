import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../Auth/LogoutButton';
import styled from 'styled-components';
import { useSelector } from "react-redux";
import TTLogo from "./TTLogo";
import { StyledLink } from "../Theme";

const NavBar = () => {
    const sessionUser = useSelector(state => state.session.user)

    console.log('SESSION USER', sessionUser)

    return (
        <NavStyle>

            <NavLink to='/' exact={true} activeClassName='active'>  
                <SvgStyle><TTLogo /></SvgStyle>
            </NavLink>

            <StyledLink to='/' exact={true} activeClassName='active'>
                Home
            </StyledLink>

            {!sessionUser && <StyledLink to='/login' exact={true} activeClassName='active'>
                Login
            </StyledLink>}

            {!sessionUser && <StyledLink to='/sign-up' exact={true} activeClassName='active'>
                Sign Up
            </StyledLink>}

            <StyledLink to='/events' exact={true} activeClassName='active'>
                Events
            </StyledLink>

            {sessionUser && <StyledLink to='/events/create' exact={true} activeClassName='active'>
                Create Event
            </StyledLink>}

            {sessionUser && <StyledLink to='/users' exact={true} activeClassName='active'>
                Garage
            </StyledLink>}

            {sessionUser && <LogoutButton />}

        </NavStyle>
  );
}

const NavStyle = styled.nav`
    position: relative;
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
    box-shadow: 0px -16px 15px 8px #464646;
`

const SvgStyle = styled.svg`
    /* border: solid red 2px; */
    position: absolute;
    left: -50px;
    top: -30px;
    background-color: transparent;
    cursor: pointer;
`





export default NavBar;
