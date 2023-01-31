import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { useHistory, useParams } from 'react-router-dom';
import NavBar from '../Home/NavBar';
import EventCommentsSection from '../Comments/EventCommentsSection';
import { getEventMessages } from '../../store/message';
import { renderCreateEventModal } from '../../store/modal';
import { deleteEvent, getOneEvent } from '../../store/event';

// TODO start filling the page with information and get ready for comments feature.
function EventPage() {
    const history = useHistory()
    const dispatch = useDispatch()
    let { eventId } = useParams();
    const currentUser = useSelector(state => state.session.user)
    const currentEventObj = useSelector(state => state.events.oneEvent)
    const event = Object.values(currentEventObj)[0]
    const eventImageUrl = event?.images[0].imageUrl

    console.log("EVENTPAGE=====================", currentUser)

    useEffect(() => {

        const fetcher = async () => {
            dispatch(getEventMessages(eventId))
            await dispatch(getOneEvent(eventId))
        }
        fetcher();

    },[dispatch])

    const handleDelete = (eventId) => {
        dispatch(deleteEvent(eventId))
        history.push("/")
    };

    const showModalEvent = (params) => {
        dispatch(renderCreateEventModal(params))
    };

    const editModal = {
        modalToLoad: "editModal",
    }
  
    return (
        <>
        <NavBar />
        <Wrapper>
            {event && <EventImage image={eventImageUrl}/>}
            {event?.owner?.id === currentUser.id && <ButtonWrapper>
                <StyledButton as="button" onClick={() => handleDelete(event?.id)}> Delete Event </StyledButton>
                <StyledButton as="button" onClick={() => showModalEvent(editModal)}> Edit Event </StyledButton>
            </ButtonWrapper>}
            <h1>{event?.name}</h1>
            <p>{event?.description}</p>
            <p>{event?.address}</p>
            {event && <p>{`${event.city}, ${event.state}`}</p>}
            <p>{event?.zipcode}</p>
            {event && <EventCommentsSection />}
        </Wrapper>
        </>
    ); 
}

const Wrapper = styled.div`
    /* display: flex;
    flex-direction: column; */
    align-items: center;
    width: 70%;
    margin-left: 15%;
    margin-right: 15%;

    & h1 {
        font-size: 40pt;
        align-items: flex-start;
        margin: 40px 0;
    }
`

const EventImage = styled.div`
    width: 100%;
    /* max-width: 1900px; */
    height: 400px;
    margin-top: 80px;
    border-radius: 50px 50px 5px 5px;
    background-image: url(${(props) => props.image});
    background-size: cover;
    background-position: center;
    /* background-image: url("http://speedhunters-wp-production.s3.amazonaws.com/wp-content/uploads/2021/04/19195228/16151652507e763490238117473LIPMAN_723787-1200x800.jpeg"); */
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

export default EventPage
