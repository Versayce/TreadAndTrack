// This file updates store for passing information to modal component which conditionally renders
// modals based on the information read from state.

// The clear modal actions will need to be dispatched when a form is submitted within the modal (onSubmit)


const CREATE_EVENT_FORM_MODAL = 'modals/createEvent'
const CLOSE_MODAL = 'modals/closeModal'


//------------------------------   ACTIONS   ------------------------------//
export const renderCreateEventModal = (params) => { 
    console.log('inside of CREATE modal action')
    return {
        type: CREATE_EVENT_FORM_MODAL,
        params
    };
};

export const closeModal = () => {
    console.log('inside of CLOSE modal action')
    return {
        type: CLOSE_MODAL,
    }
}


//------------------------------   REDUCER   ------------------------------//

const initialState = { params: {} }
const modalReducer = (state = initialState, action) => {
    switch(action.type) {

        case CREATE_EVENT_FORM_MODAL:
            {   
                const newState = { ...state.params }
                newState.params = action.params
                return newState;
            }

        case CLOSE_MODAL:
            {
                const newState = { ...state.params }
                newState.params = {}
                return newState;
            }

        default:
            return state;
    }
}


export default modalReducer
