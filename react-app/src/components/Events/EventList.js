import React, { useEffect } from 'react';
import styled from 'styled-components'
import { createEvent, deleteEvent, getAllEvents, editEventById, getOneEvent } from '../../store/event';
import { useDispatch, useSelector } from 'react-redux'

function EventList() {
    const dispatch = useDispatch()

    // pulling session user from state
    const sessionUser = useSelector(state => state.session.user)
    const userId = sessionUser.id

    // pulling events from state
    const eventsObj = useSelector(state => state.events.allEvents)
    const events = Object.values(eventsObj)

    // TODO test thunks with useSelector and postman:
    const eventObj = useSelector(state => state.events.oneEvent)
    const event = Object.values(eventObj)

    // console.log('', '\n', '==========Event List Component==========', '\n', event , '\n', '')

    const testEvent1 = {
        "id": 2,
        "owner_id": 2,
        "name": "testEvent",
        "address": "testing in component",
        "city": "testing in component",
        "state": "testing in component",
        "country": "testing in component",
        "description": "testing in component",
    }

    const testEvent2 = {
        "owner_id": 3,
        "name": "testEvent2",
        "address": "testing creation in component",
        "city": "testing creation in component",
        "state": "testing creation in component",
        "country": "testing creation in component",
        "description": "testing creation in component",
    }

    useEffect(() => {
        if(!userId) {
            return;
        }
        dispatch(getAllEvents())
        dispatch(getOneEvent(2))
        dispatch(editEventById(testEvent1))
        // dispatch(createEvent(testEvent2))
        // dispatch(deleteEvent(3))
    }, [dispatch, userId]);

  
    return (
        <Wrapper>
            <h1>Events</h1>
            <TestWrapper>
                {events.map(event => (
                    <EventBlock key={event.id}>
                        <p>{event.name}</p>
                        <p>{event.state}</p>
                    </EventBlock>
                ))}
            </TestWrapper>   
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const TestWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1vw;
`

const EventBlock = styled.div`
    display: flex;
    flex-direction: column;
`

export default EventList
