import {Link} from "react-router-dom";
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

            <SvgStyle>  
                <TTLogo />
            </SvgStyle>

            <StyledLink to='/' exact={true} activeClassName='active'>
                Home
            </StyledLink>

            <StyledLink to='/login' exact={true} activeClassName='active'>
                Login
            </StyledLink>

            <StyledLink to='/sign-up' exact={true} activeClassName='active'>
                Sign Up
            </StyledLink>

            <StyledLink to='/events' exact={true} activeClassName='active'>
                Events
            </StyledLink>

            {sessionUser && <StyledLink to='/users' exact={true} activeClassName='active'>
                Garage
            </StyledLink>}

            {sessionUser && <LogoutButton />}

        </NavStyle>
  );
}

const NavStyle = styled.nav`
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

const SvgStyle = styled.svg`
    background-color: transparent;
    position: absolute;
    left: 40px;
    height: 50px;
    width: 50px;
    cursor: pointer;
`





export default NavBar;
