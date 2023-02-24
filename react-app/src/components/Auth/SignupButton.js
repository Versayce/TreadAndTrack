import React from 'react';
import { useDispatch } from 'react-redux';
import { renderCreateEventModal } from '../../store/modal';
import { StyledButton } from '../Theme';

const SignupButton = () => {
    const dispatch = useDispatch()

    const onLogin = async (modalProps) => {
        console.log('onlogin function', modalProps)
        await dispatch(renderCreateEventModal(modalProps))
    };

    const signupModal = {
        modalToLoad: "signupModal",
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
        <StyledButton onClick={() => onLogin(signupModal)}><span>Signup</span></StyledButton> 
    );
};


export default SignupButton;
