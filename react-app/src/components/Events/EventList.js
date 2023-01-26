import React, { useEffect } from 'react';
import styled from 'styled-components'
import { createEvent, deleteEvent, getAllEvents, editEventById, getOneEvent } from '../../store/event';
import { useDispatch, useSelector } from 'react-redux'
import { showModal } from '../../store/modal';

function EventList() {  //TODO add to "home" page component 
    const dispatch = useDispatch()

    // pulling session user from state
    const sessionUser = useSelector(state => state.session.user)
    const userId = sessionUser.id

    // pulling events from state
    const eventsObj = useSelector(state => state.events.allEvents)
    const events = Object.values(eventsObj)

    // TODO remove test useSelectors and data 
    const eventObj = useSelector(state => state.events.oneEvent)
    // const event = Object.values(eventObj)

    // TODO test conditionally rendered modal slice of state:
    const modalState = useSelector(state => state.events.)
    // console.log('', '\n', '==========Event List Component==========', '\n', event , '\n', '')

    // Testing EDIT 
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
    // Testing CREATE
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
        dispatch(getOneEvent(1))
        // dispatch(editEventById(testEvent1))
        // dispatch(createEvent(testEvent2))
        // dispatch(deleteEvent(3))
    }, [dispatch, userId]);
    

    const showModalEvent = (e) => {
        e.preventDefault()
        dispatch(showModal(true))
    };


    
    // Creating event cards with all events for displaying on homepage
    const eventCards = events.map((event) => {
        return (
            <EventCard key={event.id}>
                {/* {console.log('', '\n', '==========Event List Component==========', '\n', event , '\n', '')} */}
                <h1>{event.name}</h1>
                <img src={`${event.images[0]?.imageUrl}`}></img>
                <p>{event.address}</p>
                <p>{event.city}</p>
                <p>{event.state}</p>
                <p>{event.zipcode}</p>
                <p>{event.description}</p>
            </EventCard>
        );
    });
  
    // Component contents
    return (
        <Wrapper>
            <h1>Events</h1>
            <StyledButton as="button" onClick={showModalEvent}> Create an Event </StyledButton>
            <TestWrapper>{eventCards}</TestWrapper>   
        </Wrapper>
    );
}

const StyledButton = styled.button`

`

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

const EventCard = styled.div`
    width: 25vw;
    max-width: 400px;
    min-width: 300px;
    display: flex;
    flex-direction: column;
    margin: 10px;
    & img {
        width: 100%;
        height: 130px;
        object-fit: cover;
    }& h1 {
        width: 100%;
        font-size: 2vw;
        white-space: nowrap; 
    }
`

export default EventList
