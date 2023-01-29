import React from 'react';
import { useDispatch } from 'react-redux';
import styled, { keyframes } from 'styled-components';
import { logout } from '../../store/session';
import { StyledButton } from '../Theme';

const LogoutButton = () => {
    const dispatch = useDispatch()
    const onLogout = async (e) => {
        await dispatch(logout());
    };

    return ( 
        <StyledButton onClick={onLogout}><span>Logout</span></StyledButton> 
    );
};


export default LogoutButton;
