import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { getOneEvent } from '../../store/event';
import NavBar from '../Home/NavBar';
import EventCommentsSection from '../Comments/EventCommentsSection';
import { getEventMessages } from '../../store/message';


// TODO start filling the page with information and get ready for comments feature.
function EventPage() {
    const dispatch = useDispatch()
    let { eventId } = useParams();
    const currentEventObj = useSelector(state => state.events.oneEvent)
    const event = Object.values(currentEventObj)[0]
    const eventImageUrl = event?.images[0].imageUrl

    useEffect(() => {
        dispatch(getOneEvent(eventId))
        dispatch(getEventMessages(eventId))
    },[dispatch])
  
    return (
        <>
        <NavBar />
        <Wrapper>
            {event && <EventImage image={eventImageUrl}/>}
            <h1>{event?.name}</h1>
            <p>{event?.description}</p>
            <EventCommentsSection />
        </Wrapper>
        </>
    ); 
}

const Wrapper = styled.div`
    /* display: flex;
    flex-direction: column; */
    align-items: center;
    margin-left: 15%;
    margin-right: 15%;

    & h1 {
        align-items: flex-start;
    }
`

const EventImage = styled.div`
    width: 100%;
    /* max-width: 1900px; */
    height: 400px;
    margin-top: 80px;
    border-radius: 5px;
    background-image: url(${(props) => props.image});
    background-size: cover;
    background-position: center;
    /* background-image: url("http://speedhunters-wp-production.s3.amazonaws.com/wp-content/uploads/2021/04/19195228/16151652507e763490238117473LIPMAN_723787-1200x800.jpeg"); */
`


export default EventPage
