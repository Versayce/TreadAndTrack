// Defining action type variables
const LOAD_ALL_EVENTS = 'events/LOAD_ALL'
const LOAD_ONE_EVENT = 'events/LOAD_ONE'
const ADD_EVENT = 'events/ADD'
const ADD_IMAGE_AWS = 'events/ADDIMAGEAWS'
const EDIT_EVENT = 'events/EDIT'
const DELETE_EVENT = 'events/DELETE'

const CLEAR_ONE = 'events/CLEAR_ONE'

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
    console.log('addEvent ACTION: ', event)
    return {
        type: ADD_EVENT,
        event
    };
};

export const addImageAWS = (image) => {
    return {
        type: ADD_IMAGE_AWS,
        image
    }
}

export const editEvent = (event) => {
    console.log('EDIT EVENT ACTION DATA', event)
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

export const clearOneEvent = () => {
    return {
        type: CLEAR_ONE
    };
};




//------------------------------   THUNKS   ------------------------------//
export const getAllEvents = () => async (dispatch) => {
    const res = await fetch('/api/events', {
        headers: { "content-Type": "application/json" }
    });
    
    if(res.ok) {
        const data = await res.json();
        await dispatch(loadAllEvents(data.events))
    };
};

export const getOneEvent = (eventId) => async (dispatch) => {
    const res = await fetch(`/api/events/${eventId}`, {
        headers: { "content-type": "application/json" }
    });
    
    if(res.ok) {
        const data = await res.json()
        await dispatch(loadOneEvent(data))
    };
};

export const createEvent = (event) => async (dispatch) => {
    const res = await fetch('/api/events', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(event)
    });
    
    if(res.ok) {
        const data = await res.json();
        dispatch(addEvent(data))
    };
};

//TODO decide whether or not to use
export const createEventImage = (imageData) => async (dispatch) => {
    const res = await fetch("/api/events/banner_upload", {
        method: "POST",
        body: imageData
    });
    
    if(res.ok) {
        const data = await res.json();
        dispatch(addImageAWS(data));
    };
}


export const editEventById = (event) => async (dispatch) => {
    console.log('INSIDE OF EDIT EVENT THUNK===========', event)
    const res = await fetch(`/api/events/${event.id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(event)
    });

    if(res.ok) {
        const data = await res.json();
        console.log('=============DATA INSIDE EDIT EVENT THUNK==============', data)
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
                const newState = { allEvents: {...state.allEvents}, oneEvent: {}}
                newState.allEvents[action.event.id] = action.event
                newState.oneEvent[action.event.id] = action.event
                return newState;
            };

        case EDIT_EVENT:
            {
                const newState = { allEvents: {...state.allEvents}, oneEvent: {}}
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

        case CLEAR_ONE:
            {
                const newState = { allEvents: {...state.allEvents}, oneEvent: {}}
                return newState
            };
        
        
        default:
            return state;

    };
};

export default eventReducer
