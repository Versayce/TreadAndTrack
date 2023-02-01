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

    // console.log("EVENTPAGE=====================", currentUser)

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
        styles: {
            width: "",
            height: ""
        }
    }
  
    return (
        <>
        <NavBar />
        <Wrapper>
            {event && <EventImage image={eventImageUrl}/>}
            <SlantedDiv></SlantedDiv>
            <HeaderWrapper>
                <h1>{event?.name}</h1>
                {event?.owner?.id === currentUser.id && <ButtonWrapper>
                    <StyledButton as="button" onClick={() => handleDelete(event?.id)}> Delete Event </StyledButton>
                    <StyledButton as="button" onClick={() => showModalEvent(editModal)}> Edit Event </StyledButton>
                </ButtonWrapper>}
            </HeaderWrapper>
            <StyledDescription>{event?.description}</StyledDescription>
            <LocationInfo>
                <p>{event?.address}</p>
                {event && <p>{`${event.city}, ${event.state}`}</p>}
                <p>{event?.zipcode}</p>
            </LocationInfo>
            {event && <EventCommentsSection />}
        </Wrapper>
        </>
    ); 
}

const StyledDescription = styled.div`
    max-width: 850px;
    word-wrap: break-word;
    font-size: 14pt;
    margin-top: 100px;
    margin-left: 40px;
`

const LocationInfo = styled.div`
        max-width: 850px;
        word-wrap: break-word;
        font-size: 12pt;
        margin: 10px;
        color: #919191;
        font-style: italic;
        margin-top: 60px;
`

const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: linear-gradient(to top, #f0f0f0, #f8f8f8); 
    border-radius: 0 0 30px 30px;
`

const SlantedDiv = styled.div`
    height: 90px;
    width: 100%;
    background: -webkit-linear-gradient(to left, #434343, #000000);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #363636, #000000); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
;
    position: relative;
    overflow: hidden;
    :after {
    height: 100%;
    width: 100%;
    background-color: #ca3e68;
    position: absolute;
    content: "";
    transform: rotate(6deg);
    transform-origin: top left;
    }
`

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
        margin-left: 25px;
        color: #27000c;
    }
    & p {
        max-width: 850px;
        word-wrap: break-word;
        font-size: 14pt;
        margin: 10px;
        margin-left: 30px;
    }
`

const EventImage = styled.div`
    width: 100%;
    /* max-width: 1900px; */
    height: 600px;
    margin-top: 80px;
    border-radius: 100px 100px 0px 0px;
    background-image: url(${(props) => props.image});
    background-size: cover;
    background-position: center;
    /* background-image: url("http://speedhunters-wp-production.s3.amazonaws.com/wp-content/uploads/2021/04/19195228/16151652507e763490238117473LIPMAN_723787-1200x800.jpeg"); */
`
const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1vw;
    margin: 0px 30px;
`

const StyledButton = styled.button`
    box-sizing: content-box;
    text-align: center;
    border: none;
    padding: 5px;
    margin: 5px;
    width: 150px;
    height: 40px;
    border-radius: 15px;
    background-color: #353535;
    color: white;
    &:hover {
        background-color: #ca3e68;
        color: white;
        cursor: pointer;
    }
`

export default EventPage
