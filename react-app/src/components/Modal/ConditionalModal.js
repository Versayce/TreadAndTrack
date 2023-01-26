import { Component } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

// TODO Create components that render based on available data being sent from state (useSelector)
function ConditonalModal() {
    const paramObj = useSelector(state => state.modal.params)

    // TODO come up with formatting for params objects
    const testParams = {
        modalToLoad: "createModal",
        param1: "data1",
        param2: "data2",
    }
    const testParams2 = {
        modalToLoad: "editModal",
        param1: "data1",
        param2: "data2",
    }
    const testParams3 = {
        modalToLoad: "closeModal",
        param1: "data1",
        param2: "data2",
    }
    
    console.log('', '\n', '==========Inside of Conditional Modal==========', paramObj, '\n', '')

    // TODO add logic for changing which modal component renders depending on what parameter props are being passed
    const renderComponent = (params) => {
        console.log('inside of switch:', params)

        if(params != {}) {
            switch (params?.modalToLoad) {
                case "createModal": //specify which params are required to render contents
                    console.log('Create Event case hit')
                    return (
                        <TestModal>Testing EDIT CASE render</TestModal>
                    )
    
                case "editModal":
                    console.log('Add Event case hit')
                    return (
                        <TestModal>Testing ADD CASE render</TestModal>
                    )
    
                case undefined:
                    return null;
                    
                default:
                    console.log('Inside of default case')
                    return null
    
            }
        }else {
            return null
        }
    };



    return (
        <Container> 
            {renderComponent()}
        </Container>
    )
};

const TestModal = styled.div`
    border: 2px solid #ff0000;
    width: 200px;
    height: 200px;
`

const Container = styled.div`

`

export default ConditonalModal
