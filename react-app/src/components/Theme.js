import styled from "styled-components"
import { NavLink } from "react-router-dom"


export const StyledButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100%;
    line-height: 40px;
    font-size: 13px;
    font-family: sans-serif;
    text-decoration: none;
    color: #333;
    /* border: 2px solid #333; */
    letter-spacing: 2px;
    text-align: center;
    position: relative;
    transition: all .35s;
    span {
        position: relative;
        z-index: 2;
    }
    &:after {
        position: absolute;
        content: "";
        bottom: 0;
        left: 0;
        width: 100%;
        height: 0%;
        background: #bd345d;
        transition: all .35s;
    }
    &:hover {
        color: #bd345d;
    }
    &:hover:after{
        width: 100%;
        height: 10%;
    }
`

export const StyledLink = styled(NavLink)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100%;
    line-height: 40px;
    font-size: 13px;
    font-family: sans-serif;
    text-decoration: none;
    color: #333;
    /* border: 2px solid #333; */
    letter-spacing: 2px;
    text-align: center;
    position: relative;
    transition: all .35s;
    span {
        position: relative;
        z-index: 2;
    }
    &:after {
        position: absolute;
        content: "";
        bottom: 0;
        left: 0;
        width: 100%;
        height: 0%;
        background: #bd345d;
        transition: all .35s;
    }
    &:hover {
        color: #bd345d;
    }
    &:hover:after{
        width: 100%;
        height: 10%;
    }
`
