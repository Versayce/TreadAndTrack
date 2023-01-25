import React, { useEffect } from 'react';
import styled from 'styled-components'
import { getAllEvents } from '../../store/event';
import { useDispatch, useSelector } from 'react-redux'

function EventList() {
    const dispatch = useDispatch()

    // pulling session user from state
    const sessionUser = useSelector(state => state.session.user)
    const userId = sessionUser.id

    // pulling events from state
    const eventsObj = useSelector(state => state.events.allEvents)
    const events = Object.values(eventsObj)

    console.log('', '\n', '==========Event List Component==========', '\n', events , '\n', '')

    useEffect(() => {
        if(!userId) {
            return;
        }
        dispatch(getAllEvents())
    }, [dispatch, userId]);

  
    return (
        <Wrapper>
            <h1>Events</h1>
            <TestWrapper>
                {events.map(event => (
                    <EventBlock>
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
