// Defining action type variables
const LOAD_ALL_EVENTS = 'events/loadAll'
const LOAD_ONE_EVENT = 'events/loadOne'


// TODO add create and delete thunks/actions


//------------------------------   ACTIONS   ------------------------------//
export const loadAllEvents = (events) => {
    return {
        type: LOAD_ALL_EVENTS,
        events
    }
}

export const loadOneEvent = (event) => {
    console.log('=====INSIDE ACTION=====', events)
    return {
        type: LOAD_ONE_EVENT,
        event
    }
}




//------------------------------   THUNKS   ------------------------------//
export const getAllEvents = () => async (dispatch) => {
    const res = await fetch('/api/events', {
        headers: { "content-Type": "application/json" }
    });

    if(res.ok) {
        const data = await res.json();
        dispatch(loadAllEvents(data.events))
    }
}

export const getOneEvent = () => async (dispatch) => {
    const res = await fetch('/api/events', {
        headers: { "content-type": "application/json" }
    });
    
    if(res.ok) {
        const data = await res.json()
        console.log('=====INSIDE THUNK=====', data)
        dispatch(loadOneEvent(data))
    }
}



//------------------------------   REDUCER   ------------------------------//

const initialState = { allEvents: {}, oneEvent: {} }
const eventReducer = (state = initialState, action) => {
    switch(action.type) {

        case LOAD_ALL_EVENTS:
            {
                const newState = { allEvents: {...state.allEvents}, oneEvent: {...state.oneEvent}}
                action.events.forEach(event => {
                    newState.allEvents[event.id] = event;
                });
                return newState;
            }
            
            case LOAD_ONE_EVENT:
            {
                console.log('=====INSIDE REDUCER=====', action.event)
                const newState = { allEvents: {...state.allEvents}, oneEvent: {...state.oneEvent}}
                newState.oneEvent[action.event.id] = action.event
                return newState; 
            }
        
        default:
            return state;

    }
}

export default eventReducer
