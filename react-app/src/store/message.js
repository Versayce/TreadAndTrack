// This file updates store for passing information to modal component which conditionally renders
// modals based on the information read from state.

// The clear modal actions will need to be dispatched when a form is submitted within the modal (onSubmit)

const LOAD_ONE_MESSAGE = 'messages/LOAD ONE'
const LOAD_EVENT_MESSAGES = 'messages/LOAD EVENT MESSAGE'
const ADD_MESSAGE = 'messages/ADD'
const EDIT_MESSAGE = 'messages/EDIT'
const DELETE_MESSAGE = 'messages/DELETE'

const CLEAR_EVENT_MESSAGES = 'messages/CLEAR EVENT MESSAGES'
const CLEAR_ONE_MESSAGE = 'messages/CLEAR ONE MESSAGE'
//------------------------------   ACTIONS   ------------------------------//

export const loadOneMessage = (message) => {
    return {
        type: LOAD_ONE_MESSAGE,
        message
    }
}

export const loadEventMessages = (messages) => {
    return {
        type: LOAD_EVENT_MESSAGES,
        messages
    }
}

export const addMessage = (message) => {
    return {
        type: ADD_MESSAGE,
        message
    }
}

export const editMessage = (message) => {
    return {
        type: EDIT_MESSAGE,
        message
    }
}

export const removeMessage = (messageId) => {
    return {
        type: DELETE_MESSAGE,
        messageId
    }
}

export const clearEventMessages = () => {
    return {
        type: CLEAR_EVENT_MESSAGES,
    }
}

export const clearOneMessage = () => {
    return {
        type: CLEAR_ONE_MESSAGE,
    }
}

//------------------------------   THUNKS   ------------------------------//

export const getOneMessage = (messageId) => async (dispatch) => {
    const res = await fetch(`/api/messages/${messageId}`)
    if(res.ok) {
        const data = await res.json();
        dispatch(loadOneMessage(data))
    }
}

export const getEventMessages = (eventId) => async (dispatch) => {
    const res = await fetch(`/api/events/${eventId}/messages`)

    if(res.ok) {
        const data = await res.json();
        dispatch(loadEventMessages(data))
    }
}

export const createMessage = (message) => async (dispatch) => {
    const res = await fetch('/api/messages/new', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(message)
    })

    if(res.ok) {
        const data = await res.json();
        dispatch(addMessage(data))
    }
}

export const deleteMessage = (messageId) => async (dispatch) => {
    const res = await fetch(`/api/messages/${messageId}`, {
        method: 'DELETE'
    })

    if(res.ok) {
        dispatch(removeMessage(messageId))
    }
}

export const editMessageById = (message) => async (dispatch) => {
    console.log('INFORMATION SENT TO EDIT MESSAGE THUNK: ', message)
    const { id, body, eventId, authorId } = message
    const res = await fetch(`/api/messages/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            id,
            body,
            eventId,
            authorId
        })
    })
    if(res.ok) {
        const data = await res.json();
        console.log('DATA FROM EDIT THUNK: ', data)
        dispatch(editMessage(data))
    }
}

//------------------------------   REDUCER   ------------------------------//

const initialState = { eventMessages: {}, oneMessage: {} }
const messageReducer = (state = initialState, action) => {
    switch(action.type) {

        case LOAD_ONE_MESSAGE:
            {
                const newState = { eventMessages: {...state.eventMessages}, oneMessage: {...state.oneMessage}}
                newState.oneMessage = {...action.message};
                return newState;
            }

        case LOAD_EVENT_MESSAGES:
            {
                const newState = { eventMessages: {...state.eventMessages}, oneMessage: {...state.oneMessage}}
                action.messages.messages.forEach(message => {
                    newState.eventMessages[message.id] = message;
                })
                return newState
            }

        case ADD_MESSAGE:
            {
                const newState = { eventMessages: {...state.eventMessages}, oneMessage: {...state.oneMessage}}
                newState.eventMessages[action.message.id] = action.message
                return newState
            }

        case EDIT_MESSAGE:
            {
                console.log('INSIDE OF EDIT MESSAGE REDUCER', action.message)
                const newState = { eventMessages: {...state.eventMessages}, oneMessage: {...state.oneMessage}}
                newState.eventMessages[action.message.id] = action.message
                newState.oneMessage[action.message.id] = action.message
                return newState
            }

        case DELETE_MESSAGE:
            {
                const newState = { eventMessages: {...state.eventMessages}, oneMessage: {...state.oneMessage}}
                delete newState.eventMessages[action.messageId]
                delete newState.oneMessage[action.messageId]
                return newState
            }

        case CLEAR_EVENT_MESSAGES:
            {
                const newState = { eventMessages: {}, oneMessage: {...state.oneMessage}}
                return newState
            }

        case CLEAR_ONE_MESSAGE:
            {
                const newState = { eventMessages: {...state.eventMessages}, oneMessage: {}}
                return newState
            }

        default:
            return state
    }
}

export default messageReducer
