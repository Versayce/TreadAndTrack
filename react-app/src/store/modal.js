// This file updates store for passing information to modal component which conditionally renders
// modals based on the information read from state.

// The clear modal actions will need to be dispatched when a form is submitted within the modal (onSubmit)


const SHOW_MODAL = 'modals/show'
const HIDE_MODAL = 'modals/hide'



//------------------------------   ACTIONS   ------------------------------//
export const showModal = (status) => { // Boolean is being passed in and returned
    return {
        type: SHOW_MODAL,
        status
    };
};

export const hideModal = (status) => { // Boolean is being passed in and returned
    return {
        type: HIDE_MODAL,
        status
    };
};


//------------------------------   REDUCER   ------------------------------//

const initialState = { modalStatus: false }
const modalReducer = (state = initialState, action) => {
    switch(action.type) {

        case SHOW_MODAL:
            {
                newState = { ...state.modalStatus }
                newState.modalStatus = action.status
            }

        case HIDE_MODAL:
            {
                newState = { ...state.modalStatus }
                newState.modalStatus = action.status
            }
    }
}


export default modalReducer
