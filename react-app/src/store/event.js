// Defining action type variables
const LOAD_ALL_EVENTS = 'events/LOAD_ALL'
const LOAD_ONE_EVENT = 'events/LOAD_ONE'
const ADD_EVENT = 'events/ADD'
const EDIT_EVENT = 'events/EDIT'
const DELETE_EVENT = 'events/DELETE'

// TODO add create and delete thunks/actions


//------------------------------   ACTIONS   ------------------------------//
export const loadAllEvents = (events) => {
    return {
        type: LOAD_ALL_EVENTS,
        events
    };
};

export const loadOneEvent = (event) => {
    // console.log('=====INSIDE ACTION=====', event)
    return {
        type: LOAD_ONE_EVENT,
        event
    };
};

export const addEvent = (event) => {
    return {
        type: ADD_EVENT,
        event
    };
};

export const editEvent = (event) => {
    return {
        type: EDIT_EVENT,
        event
    };
};

export const removeEvent = (eventId) => {
    return {
        type: DELETE_EVENT,
        eventId
    };
};




//------------------------------   THUNKS   ------------------------------//
export const getAllEvents = () => async (dispatch) => {
    const res = await fetch('/api/events', {
        headers: { "content-Type": "application/json" }
    });

    if(res.ok) {
        const data = await res.json();
        dispatch(loadAllEvents(data.events))
    };
};

export const getOneEvent = (eventId) => async (dispatch) => {
    const res = await fetch(`/api/events/${eventId}`, {
        headers: { "content-type": "application/json" }
    });
    
    if(res.ok) {
        const data = await res.json()
        console.log('=====INSIDE THUNK=====', data)
        dispatch(loadOneEvent(data))
    };
};

export const createEvent = (event) => async (dispatch) => {
    const res = await fetch('/api/events/new', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(event)
    });

    if(res.ok) {
        const data = await res.json();
        dispatch(addEvent(data))
    };
};

export const editEventById = (event) => async (dispatch) => {
    const res = await fetch(`/api/events/${event.id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(event)
    });

    if(res.ok) {
        const data = await res.json();
        dispatch(editEvent(data))
    };
};

export const deleteEvent = (eventId) => async (dispatch) => {
    const res = await fetch(`/api/events/${eventId}`, {
        method: 'DELETE'
    })

    if(res.ok) {
        dispatch(removeEvent(eventId))
    };
};



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
            };
            
        case LOAD_ONE_EVENT:
            {
                // console.log('=====INSIDE REDUCER=====', action.event)
                const newState = { allEvents: {...state.allEvents}, oneEvent: {}}
                newState.oneEvent[action.event.id] = action.event
                return newState; 
            };

        case ADD_EVENT:
            {
                const newState = { allEvents: {...state.allEvents}, oneEvent: {...state.oneEvent}}
                newState.allEvents[action.event.id] = action.event
                newState.oneEvent[action.event.id] = action.event
                return newState;
            };

        case EDIT_EVENT:
            {
                const newState = { allEvents: {...state.allEvents}, oneEvent: {...state.oneEvent}}
                newState.allEvents[action.event.id] = action.event
                newState.oneEvent[action.event.id] = action.event
                return newState;
            };

        case DELETE_EVENT:
            {
                const newState = { allEvents: {...state.allEvents}, oneEvent: {...state.oneEvent}}
                delete newState.allEvents[action.eventId]
                delete newState.oneEvent[action.eventId]
                return newState;
            };
        
        
        default:
            return state;

    };
};

export default eventReducer
