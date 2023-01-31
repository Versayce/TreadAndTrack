import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import { deleteEvent, getAllEvents, getOneEvent, clearOneEvent } from '../../store/event';
import { useDispatch, useSelector } from 'react-redux'
import { renderCreateEventModal } from '../../store/modal';
import { useHistory } from 'react-router-dom';
import EventCard from './EventCard';

function EventList() { 
    const dispatch = useDispatch()

    // pulling session user from state
    const sessionUser = useSelector(state => state.session.user)
    const userId = sessionUser?.id

    const eventObj = useSelector(state => state.events.oneEvent)
    const event = Object.values(eventObj)[0]
    
    // console.log('', '\n', '==========Event List Component==========', '\n', 'DATA' , '\n', '') 

    useEffect(() => {
        if(!userId) {
            return;
        }
        dispatch(getAllEvents())
    }, [dispatch, userId]);


    const handleDelete = (eventId) => {
        dispatch(deleteEvent(eventId))
    };

    const showModalEvent = (params) => {
        dispatch(renderCreateEventModal(params))
    };

    const createModal = {
        modalToLoad: "createModal",
        size: "large",
        // param2: "data2",
    }
    const editModal = {
        modalToLoad: "editModal",
        // param1: "data1",
        // param2: "data2",
    }

    // Component contents
    return (
        <>
        <StyledHeading>Main Events</StyledHeading>
        <Wrapper>
            <EventCard /> 
        </Wrapper>
        </>
    );
}


// TODO //========== STYLING ==========//

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 2450px;
    height: 50%;
    max-height: 1900px;
`
const StyledHeading = styled.h1`
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    margin-top: 60px;
    margin-bottom: 0px;
    margin-left: 230px;
    font-size: 35pt;
    color: #bd345d;
    display: flex;
    justify-content: flex-start;
    width: 100%;
`


export default EventList
