import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../Auth/LogoutButton';
import styled from 'styled-components';
import { useSelector } from "react-redux";
import TTLogo from "./TTLogo";
import { StyledLink } from "../Theme";
import LoginButton from '../Auth/LoginButton';
import SignupButton from '../Auth/SignupButton';

const NavBar = () => {
    const sessionUser = useSelector(state => state.session.user)

    return (
        <NavStyle>

            <NavLink to='/' exact={true} activeClassName='active'>  
                <SvgStyle><TTLogo /></SvgStyle>
            </NavLink>

            <StyledLink to='/' exact={true} activeClassName='active'>
                Home
            </StyledLink>

            {sessionUser && <StyledLink to='/events' exact={true} activeClassName='active'>
                Events
            </StyledLink>}

            {!sessionUser && <SignupButton />}

            {!sessionUser && <LoginButton />}

            {sessionUser && <StyledLink to='/events/create' exact={true} activeClassName='active'>
                Host Event
            </StyledLink>}

            {sessionUser && <StyledLink to='/cars/create' exact={true} activeClassName='active'>  
                Upload Car
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
