const LOAD_ALL_SERVERS = 'servers/loadAll'




//------------------------------   ACTIONS   ------------------------------//
export const loadAllEvents = (events) => {
    return {
        type: LOAD_ALL_EVENTS,
        events
    }
}



//------------------------------   THUNKS   ------------------------------//
export const getAllEvents = () => async (dispatch) => {
    const res = await fetch('/api/events', {
        headers: { "content-Type": "application/json" }
    });

    if(res.ok) {
        const data = await res.json();
        dispatch(loadAllEvents(data.servers))
    }
}



//------------------------------   REDUCER   ------------------------------//

const initialState = { allEvents: {}, oneEvent: {} }
const eventReducer = (state = initialState, action) => {
    switch(action.type) {

        case LOAD_ALL_SERVERS:
            {
                const newState = { allEvents: {...state.allEvents}, oneEvent: {}}
                action.events.forEach(event => {
                    newState.allEvents[event.id] = event;
                });
                return newState;
            }
        
        default:
            return state;

    }
}

export default eventReducer
