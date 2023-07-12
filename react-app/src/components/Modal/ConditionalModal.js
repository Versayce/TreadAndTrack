import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { closeModal } from "../../store/modal";
import EditEventForm from "../Forms/EventForm/EditEvent.js";
import LoginForm from "../Auth/LoginForm"
import SignUpForm from "../Auth/SignUpForm";
import EditCarForm from "../Forms/CarForm/EditCar";



function ConditonalModal() {
    const dispatch = useDispatch();
    const params = useSelector(state => state.modal.params)

    const handleChildClicks = (e) => {
        e.stopPropagation()
    }


    // console.log('', '\n', '==========Inside of Conditional Modal==========', params, '\n', '')
    const renderComponent = (params) => {
        switch (params?.modalToLoad) {
            case "editModal":
                {
                    return (
                        <ModalBackground onClick={(e) => dispatch(closeModal())}>
                            <EditEventModalBody onClick={(e) => handleChildClicks(e)}>
                                <EditEventForm />
                            </EditEventModalBody>
                        </ModalBackground>
                    )
                }

            case "editCarModal":
                {
                    return (
                        <ModalBackground onClick={(e) => dispatch(closeModal())}>
                            <EditModalBody onClick={(e) => handleChildClicks(e)}>
                                <EditCarForm />
                            </EditModalBody>
                        </ModalBackground>
                    )
                }
            
            case "loginModal":
                {
                    return (
                        <ModalBackground onClick={(e) => dispatch(closeModal())}>
                            <LoginModalBody onClick={(e) => handleChildClicks(e)}>
                                <LoginForm />
                            </LoginModalBody>
                        </ModalBackground>
                    )
                }

            case "signupModal":
                {
                    return (
                        <ModalBackground onClick={(e) => dispatch(closeModal())}>
                            <SignupModalBody onClick={(e) => handleChildClicks(e)}>
                                <SignUpForm />
                            </SignupModalBody>
                        </ModalBackground>
                    )
                }
                
            default:
                {
                    return null
                }

        }
    };



    return (
        <>
            {renderComponent(params)}
        </>
    )
};

const ModalBackground = styled.div`
    box-sizing: border-box;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: 0;
    height: 100%;
    width: 100%;
    background-color: #000000d8;
    backdrop-filter: blur(3px);
    margin: none;
`

const EditEventModalBody = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    /* fixing to center of screen */
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    /* setting max scaling w/h */
    height: fit-content;
    overflow-y: scroll;
    width: 50%;
    border-radius: 10px;
    /* Modal Background: */
    background: linear-gradient(180deg, #ffffff, #f8f8f8)
`

const LoginModalBody = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    /* fixing to center of screen */
    position: fixed;
    padding: 10px;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    /* setting max scaling w/h */
    height: 450px;
    overflow-y: scroll;
    max-width: 400px;
    min-width: 300px;
    max-height: 450px;
    border-radius: 10px;
    /* Modal Background: */
    background: linear-gradient(180deg, #ffffff, #f8f8f8)
`

const EditModalBody = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    /* fixing to center of screen */
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    /* setting max scaling w/h */
    height: 750px;
    overflow-y: scroll;
    max-width: 500px;
    min-width: 400px;
    max-height: 750px;
    border-radius: 10px;
    /* Modal Background: */
    background: linear-gradient(180deg, #ffffff, #f8f8f8)
`

const SignupModalBody = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    /* fixing to center of screen */
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    /* setting max scaling w/h */
    min-height: 510px;
    overflow-y: scroll;
    max-width: 500px;
    min-width: 300px;
    max-height: 47%;
    border-radius: 10px;
    /* Modal Background: */
    background: linear-gradient(180deg, #ffffff, #f8f8f8)
`


export default ConditonalModal
