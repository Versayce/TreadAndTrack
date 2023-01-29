import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { clearOneEvent, getOneEvent } from '../../store/event';
import { useHistory } from 'react-router-dom';


// TODO start filling the page with information and get ready for comments feature.
function EventCard() {
    const history = useHistory()
    const dispatch = useDispatch();
    const eventsObj = useSelector(state => state.events.allEvents)
    const events = Object.values(eventsObj)


    const setActiveEventPage = (eventId) => {
        dispatch(clearOneEvent())
        dispatch(getOneEvent(eventId))
        history.push(`/events/${eventId}`)
    };


    const eventCards = events?.map((event) => {
        return (
            <EventCards onClick={() => setActiveEventPage(event.id)} key={event.id}>
                <h1>{event?.name}</h1>
                {event.images[0] && <img alt='eventimg' src={`${event.images[0]?.imageUrl}`}></img>}
                <EventLocation>
                    <p>{`${event.city}, ${event.state} ${event.zipcode}`}</p>
                </EventLocation>
                <div className='event-desc'>{event.description}</div>
            </EventCards>
        );
    });

    return (
        <Wrapper>
            <CardsWrapper>
                {eventCards}
            </CardsWrapper>
        </Wrapper>
    ); 
}

const Wrapper = styled.div`
    width: 100%;
    margin: 100px 0;
`

    const CardsWrapper = styled.div`
        box-sizing: border-box;
        padding-left: 10%;
        padding-right: 10%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        flex: 0 0 33.3333%;
        width: 100%;
        gap: 2vw;
    `

        const EventCards = styled.section`
            /* border: solid #0085a7 2px;   */
            background-color: #ffffff;
            width: 25vw;
            height: 305px;
            max-height: 250px;
            max-width: 400px;
            min-width: 300px;
            display: flex;
            flex-direction: column;
            margin: 10px;
            padding: 15px;
            box-shadow: 1px 1px 10px 2px #8f8f8f39;
            border-radius: 3px;
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
                text-overflow:ellipsis;
                overflow:hidden;
                // Addition lines for 2 line or multiline ellipsis
                display: -webkit-box !important;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
                white-space: normal;
                
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

export default EventCard
