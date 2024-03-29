import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { clearOneEvent, getOneEvent } from '../../store/event';
import { useHistory } from 'react-router-dom';
import { clearEventMessages } from '../../store/message';


function EventCard() {
    const history = useHistory()
    const dispatch = useDispatch();
    const eventsObj = useSelector(state => state.events.allEvents)
    const events = Object.values(eventsObj)

    const setActiveEventPage = (eventId) => {
        dispatch(clearEventMessages())
        dispatch(clearOneEvent())
        dispatch(getOneEvent(eventId))
        history.push(`/events/${eventId}`)
    };

    const eventCards = events?.map((event) => {
        return (
            <EventCards onClick={() => setActiveEventPage(event.id)} key={event.id}>
                <h1>{event?.name}</h1>
                {event.bannerImage ? <img alt='eventimg' src={`${event.bannerImage}`} onError={e => {e.currentTarget.src = "/images/placeholderImage.png";}}/> : <img alt='placeholder' src='/images/placeholderImage.png'/>}
                <EventLocation>
                    <p>{`${event.address}`}</p>
                </EventLocation>
                <div className='event-desc' dangerouslySetInnerHTML={{ __html: event?.description }}></div>
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
    margin: 40px 0;
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
        gap: 1vw;
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
            position: relative;
            top: 0;
            transition: top ease 0.5s, box-shadow 0.5s ease-in-out;
            border-radius: 3px;
            & img {
                width: 100%;
                height: 130px;
                object-fit: cover;
                border-radius: 3px;
                margin: 4px 0px;
            }& h1 {
                font-family: Arial, Helvetica, sans-serif;
                width: 100%;
                font-size: min(max(22px, 2vw), 26px);
                white-space: nowrap; 
                color: #5a5a5a;
            }& p {
                font-size: min(max(10px, 2vw), 15px);
                color: #3f3f3fb0;
            }& .event-desc {
                height: 19%;
                text-overflow:ellipsis;
                overflow:hidden;
                font-size: 14pt;
                // multiline ellipsis
                display: -webkit-box !important;
                -webkit-line-clamp: 2;
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
                top: -2px;
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
