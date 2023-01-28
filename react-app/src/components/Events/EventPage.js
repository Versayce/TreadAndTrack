import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';


// TODO start filling the page with information and get ready for comments feature.
function EventPage() {
    const dispatch = useDispatch()

    const currentEventObj = useSelector(state => state.events.oneEvent)
    const event = Object.values(currentEventObj)[0]
    console.log("EVENT PAGE", event)

  
    return (
        <>
            <h1>{event?.name}</h1>
            <EventImage/>
            <p>{event?.description}</p>
        </>
    ); 
}

const EventImage = styled.div`
    background-image: url();
`

export default EventPage
