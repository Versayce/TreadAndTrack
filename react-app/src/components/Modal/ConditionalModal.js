import { useSelector } from "react-redux";
import styled from "styled-components";
import { closeModal } from "../../store/modal";

// TODO Create components that render based on available data being sent from state (useSelector)
function ConditonalModal() {
    const paramObj = useSelector(state => state.modal.params)

    
    console.log('', '\n', '==========Inside of Conditional Modal==========', paramObj, '\n', '')

    // TODO add logic for changing which modal component renders depending on what parameter props are being passed
    const renderComponent = (params) => {
        console.log('inside of switch:', params)

        switch (params?.modalToLoad) {
            case "createModal": //specify which params are required to render contents
                {
                    console.log('Create Event case hit')
                    return (
                        <ModalBackground onClick={closeModal()}>
                            <ModalBody>
                                Testing CREATE CASE render
                            </ModalBody>
                        </ModalBackground>
                    )
                }

            case "editModal":
                {
                    console.log('EDIT Event case hit')
                    return (
                        <ModalBackground onClick={closeModal()}>
                            <ModalBody>
                                Testing EDIT CASE render
                            </ModalBody>
                        </ModalBackground>
                    )
                }
                
            default:
                {
                    console.log('Inside of default case')
                    return null
                }

        }

    };



    return (
        <Container> 
            {renderComponent(paramObj)}
        </Container>
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
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    max-width: 450px;
    max-height: 550px;
    border-radius: 20px;
    /* Modal Background: */
    background: linear-gradient(180deg, #ffffff, #f8f8f8)
`


const Container = styled.div`

`

export default ConditonalModal
