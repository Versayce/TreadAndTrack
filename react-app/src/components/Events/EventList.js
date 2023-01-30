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
        // param1: "data1",
        // param2: "data2",
    }
    const editModal = {
        modalToLoad: "editModal",
        // param1: "data1",
        // param2: "data2",
    }

    // Component contents
    return (
        <Wrapper>

            <ButtonWrapper>
                <StyledButton as="button" onClick={() => handleDelete(event?.id)}> Delete Selected Event </StyledButton>
                <StyledButton as="button" onClick={() => showModalEvent(editModal)}> Edit Last Event </StyledButton>
                <StyledButton as="button" onClick={() => showModalEvent(createModal)}> Create Event </StyledButton>
            </ButtonWrapper>

            <EventCard /> 

        </Wrapper>
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

export default EventList
