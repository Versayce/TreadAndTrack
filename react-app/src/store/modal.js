// This file updates store for passing information to modal component which conditionally renders
// modals based on the information read from state.

// The clear modal actions will need to be dispatched when a form is submitted within the modal (onSubmit)


const SWAP_VISIBILITY = 'modals-show/hide'



//------------------------------   ACTIONS   ------------------------------//
export const setVisibleStatus = (status) => { // Boolean is being passed in and returned
    return {
        type: SWAP_VISIBILITY,
        status
    };
};


//------------------------------   REDUCER   ------------------------------//

const initialState = { status: false }
const modalReducer = (state = initialState, action) => {
    switch(action.type) {

        case SWAP_VISIBILITY:
            {
                const newState = { ...state.status }
                newState.status = action.status
                return newState;
            }

        default:
            return state;
    }
}


export default modalReducer
