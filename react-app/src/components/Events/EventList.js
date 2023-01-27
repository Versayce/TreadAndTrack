import React, { useEffect } from 'react';
import styled from 'styled-components'
import { createEvent, deleteEvent, getAllEvents, editEventById, getOneEvent, loadOneEvent } from '../../store/event';
import { useDispatch, useSelector } from 'react-redux'
import { renderCreateEventModal } from '../../store/modal';

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
    const event = Object.values(eventObj)[0]

    // TODO test conditionally rendered modal slice of state:
    const modalState = useSelector(state => state.modal.params)
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
        "name": "Testing Creation",
        "address": "Address",
        "city": "City",
        "state": "State",
        "country": "Country",
        "zipcode": 8000,
        "description": "testing creation in component",
        "owner_id": 1,
    }

    useEffect(() => {
        if(!userId) {
            return;
        }
        dispatch(getAllEvents())
        // dispatch(getOneEvent(1))
        // dispatch(editEventById(testEvent1))
    }, [dispatch, userId]);

    
    const setActiveEvent = (eventId) => {
        dispatch(getOneEvent(eventId))
    };

    const handleDelete = (eventId) => {
        dispatch(deleteEvent(eventId))
    };

    const showModalEvent = (params) => {
        dispatch(renderCreateEventModal(params))
    };


    {/* {console.log('', '\n', '==========Event List Component==========', '\n', event , '\n', '')} */}
    
    // Creating event cards with all events for displaying on homepage
    const eventCards = events?.map((event) => {
        return (
            <EventCard onClick={() => setActiveEvent(event.id)} key={event.id}>
                <h1>{event.name}</h1>
                <img src={`${event.images[0]?.imageUrl}`}></img>
                <EventLocation>
                    <p>{`${event.city}, ${event.state} ${event.zipcode}`}</p>
                </EventLocation>
                <div className='event-desc'>{event.description}</div>
            </EventCard>
        );
    });
  

    const createModal = {
        modalToLoad: "createModal",
        param1: "data1",
        param2: "data2",
    }
    const editModal = {
        modalToLoad: "editModal",
        param1: "data1",
        param2: "data2",
    }

    // Component contents
    return (
        <Wrapper>
            <h1>Event List Component</h1>
            <ButtonWrapper>
                {/* <StyledButton as="button" onClick={() => showModalEvent(modalState)}> Create an Event </StyledButton> */}
                <StyledButton as="button" onClick={() => handleDelete(event?.id)}> Delete Last Event </StyledButton>
                <StyledButton as="button" onClick={() => showModalEvent(editModal)}> Edit Last Event </StyledButton>
                <StyledButton as="button" onClick={() => showModalEvent(createModal)}> Create Event </StyledButton>
            </ButtonWrapper>
            <CardsWrapper>{eventCards}</CardsWrapper>   
        </Wrapper>
    );
}


// TODO //========== STYLING ==========//
const TestConditionalRender = styled.div`
    color: red;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1700px;
`
    const ButtonWrapper = styled.div`
        display: flex;
        flex-direction: row;
        gap: 1vw;
        margin: 30px 0px;
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

    const CardsWrapper = styled.div`
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        flex: 0 0 33.3333%;
        flex-grow: 1;
        width: 80%;
        /* gap: 1vw; */
    `
        const EventCard = styled.div`
            /* border: solid #0085a7 2px;   */
            width: 25vw;
            height: 305px;
            max-height: 280px;
            max-width: 400px;
            min-width: 300px;
            display: flex;
            flex-direction: column;
            margin: 10px;
            padding: 15px;
            box-shadow: 1px 1px 10px 2px #8f8f8f39;
            border-radius: 8px;
            & img {
                width: 100%;
                height: 130px;
                object-fit: cover;
                border-radius: 3px;
                margin: 4px 0px;
            }& h1 {
                width: 100%;
                font-size: min(max(22px, 2vw), 28px);
                white-space: nowrap; 
            }& p {
                font-size: min(max(10px, 2vw), 15px);
                color: #3f3f3fb0;
            }& .event-desc {
                height: 30%;
                overflow-y: scroll;
            }& ::-webkit-scrollbar {
                width: 6px;
            }& ::-webkit-scrollbar-track {
                border: 1px solid #3f3f3f2b;
                border-radius: 8px;
            }& ::-webkit-scrollbar-thumb {
                background-color: #adadad5c;
                border: 1px solid #ffffff2b;
                border-radius: 8px;
            } :hover {
                box-shadow: 1px 1px 10px 2px #49494939;
                cursor: pointer;
            }
        `
            const EventLocation = styled.div`
                /* border: red 1px solid; */
                display: flex;
                flex-direction: row;
                justify-content: flex-end;
                margin-bottom: 8px;
            `

export default EventList
