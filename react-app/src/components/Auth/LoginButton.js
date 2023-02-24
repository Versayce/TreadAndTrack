import React from 'react';
import { useDispatch } from 'react-redux';
import { renderCreateEventModal } from '../../store/modal';
import { StyledButton } from '../Theme';

const LoginButton = () => {
    const dispatch = useDispatch()

    const onLogin = async (modalProps) => {
        console.log('onlogin function', modalProps)
        await dispatch(renderCreateEventModal(modalProps))
    };

    const loginModal = {
        modalToLoad: "loginModal",
        styles: {
            size: {
                height: "",
                width: "20%",
                maxWidth: "500px",
                minWidth: "",
                maxHeight: "",
                minHeight: "",
            }
        }
    }



    return ( 
        <StyledButton onClick={() => onLogin(loginModal)}><span>Login</span></StyledButton> 
    );
};


export default LoginButton;
