import React, { useEffect } from 'react';
import styled from 'styled-components'
import { createEvent, deleteEvent, getAllEvents, editEventById, getOneEvent } from '../../store/event';
import { useDispatch, useSelector } from 'react-redux'
import { setVisibleStatus } from '../../store/modal';

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
    const modalState = useSelector(state => state.modal.modalState)
    console.log('', '\n', '==========Event List Component==========', '\n', modalState , '\n', '') // Testing data acquisition

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
        dispatch(setVisibleStatus(true))
    };

    const hideModalEvent = (e) => {
        e.preventDefault()
        dispatch(setVisibleStatus(false))
    }


    
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
                <p className='event-desc'>{event.description}</p>
            </EventCard>
        );
    });
  
    // Component contents
    return (
        <Wrapper>
            <h1>Events</h1>
            <ButtonWrapper>
                <StyledButton as="button"> Create an Event </StyledButton>
                <StyledButton as="button" onClick={showModalEvent}> Test Show Modal State </StyledButton>
                <StyledButton as="button" onClick={hideModalEvent}> Test Hide Modal State </StyledButton>
            </ButtonWrapper>
            <TestWrapper>{eventCards}</TestWrapper>   
        </Wrapper>
    );
}


// TODO //========== STYLING ==========//

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
    const ButtonWrapper = styled.div`
        display: flex;
        flex-direction: row;
        gap: 1vw;
    `
        const StyledButton = styled.button`
            box-sizing: content-box;
            text-align: center;
            border: none;
            padding: 5px;
            margin: 5px;
            width: 150px;
            height: 40px;
            border-radius: 5px;
            &:hover {
                background-color: #ca3e68;
                color: white;
                cursor: pointer;
            }
        `

    const TestWrapper = styled.div`
        display: flex;
        flex-direction: row !important;
        align-items: flex-start;
        gap: 1vw;
    `
        const EventCard = styled.div`
            /* border: solid #0085a7 2px;   */
            width: 25vw;
            height: 305px;
            max-width: 400px;
            min-width: 300px;
            display: flex;
            flex-direction: column;
            margin: 10px;
            padding: 15px;
            box-shadow: 1px 1px 10px 2px #7c7c7c39;
            & img {
                width: 100%;
                height: 130px;
                object-fit: cover;
                border-radius: 3px;
            }& h1 {
                width: 100%;
                font-size: min(max(18px, 2vw), 28px);
                white-space: nowrap; 
            }& .event-desc {
                overflow-y: hidden;
            }
        `

export default EventList
