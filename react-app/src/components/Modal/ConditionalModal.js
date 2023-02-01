import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { closeModal } from "../../store/modal";
import CreateEventForm from "../Forms/CreateEventForm";
import EditEventForm from "../Forms/EventForm/EditEvent.js";
import LoginForm from "../Auth/LoginForm"


function ConditonalModal() {
    const dispatch = useDispatch();
    const params = useSelector(state => state.modal.params)

    const handleChildClicks = (e) => {
        e.stopPropagation()
    }

    console.log('', '\n', '==========Inside of Conditional Modal==========', params, '\n', '')
    const renderComponent = (params) => {
        console.log('======  MODAL-SWITCH  ======:', params)
        switch (params?.modalToLoad) {
            case "createModal": //specify which params are required to render contents
                {
                    return (
                        <ModalBackground onClick={(e) => dispatch(closeModal())}>
                            <ModalBody onClick={(e) => handleChildClicks(e)}>
                                <CreateEventForm />
                            </ModalBody>
                        </ModalBackground>
                    )
                }

            case "editModal":
                {
                    return (
                        <ModalBackground onClick={(e) => dispatch(closeModal())}>
                            <ModalBody onClick={(e) => handleChildClicks(e)}>
                                <EditEventForm />
                            </ModalBody>
                        </ModalBackground>
                    )
                }
            
            case "loginModal":
                {
                    console.log('within login modal case', params)
                    return (
                        <ModalBackground onClick={(e) => dispatch(closeModal())}>
                            <ModalBody onClick={(e) => handleChildClicks(e)}>
                                <LoginForm />
                            </ModalBody>
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

const ModalBody = styled.div`
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
    width: auto;
    height: auto;
    overflow-y: scroll;
    width: 60%;
    max-width: 850px;
    min-width: 440px;
    max-height: 60%;
    border-radius: 10px;
    /* Modal Background: */
    background: linear-gradient(180deg, #ffffff, #f8f8f8)
`


export default ConditonalModal
