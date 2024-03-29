import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getEventMessages } from '../../store/message';
import { renderCreateEventModal } from '../../store/modal';
import { deleteEvent, getOneEvent } from '../../store/event';
import NavBar from '../Home/NavBar';
import MapContainer from '../Map/MapContainer';
import Footer from '../Home/Footer';
import JoinEvent from './JoinEvent';
import EventUserList from './EventUserList';
import EventCommentsSection from '../Comments/EventCommentsSection';

function EventPage() {
    const history = useHistory();
    const dispatch = useDispatch();
    let { eventId } = useParams();
    const currentUser = useSelector(state => state.session.user);
    const currentEventObj = useSelector(state => state.events.oneEvent);
    const event = Object.values(currentEventObj)[0];
    const eventImageUrl = event?.bannerImage;
    const eventUsers = event?.users;

    useEffect(() => {
        const fetcher = async () => {
            await dispatch(getOneEvent(eventId));
            await dispatch(getEventMessages(eventId));
        }
        fetcher();
    },[dispatch, eventId]);

    const handleDelete = async (eventId) => {
        await dispatch(deleteEvent(eventId));
        history.push("/");
    };

    const showModalEvent = (params) => {
        dispatch(renderCreateEventModal(params));
    };

    const editModal = {
        modalToLoad: "editModal",
        styles: {
            width: "",
            height: ""
        }
    };
  
    return (
        <>
        <NavBar />
        <Wrapper>
            {eventImageUrl && <EventImage src={eventImageUrl} onError={e => {e.currentTarget.src = "/images/placeholderImage.png";}}/>}
            {event && <HeaderWrapper>
                <h1>{event?.name}</h1>
                {event?.owner?.id === currentUser?.id && <ButtonWrapper>
                    <StyledButton as="button" onClick={() => handleDelete(event?.id)}> Delete Event </StyledButton>
                    <StyledButton as="button" onClick={() => showModalEvent(editModal)}> Edit Event </StyledButton>
                </ButtonWrapper>}
            </HeaderWrapper>}
            <EventBody>
                <EventInfoWrapper>
                    <StyledDescription dangerouslySetInnerHTML={{ __html: event?.description }}></StyledDescription>
                    <LocationInfo>
                        <p>Address:</p>
                        <p>{event?.address}</p>
                    </LocationInfo>
                    {event && <EventCommentsSection />}
                </EventInfoWrapper>
                <RightContentWrapper>
                    {event && <MapContainer />}
                    {/* <EventUserList userList={eventUsers}/>
                    <JoinEvent /> */}
                </RightContentWrapper>
            </EventBody>
        </Wrapper>
        <Footer />
        </>
    ); 
};


const LocationInfo = styled.div`
    word-wrap: break-word;
    font-size: 12pt;
    margin: 50px 0 0 0;
    color: #7c7c7c;
    font-style: italic;
`

const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: linear-gradient(to top, #f0f0f0, #f8f8f8); 
    border-radius: 0 0 30px 30px;
    h1 {
        font-size: 40pt;
        align-items: flex-start;
        margin: 40px 0;
        margin-left: 25px;
        color: #27000c;
    }
    `

const EventBody = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-top: 50px;
`

const EventInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    margin: 0 0 0 3%;
`

const StyledDescription = styled.div`
    margin-left: 0px;
    h1 {
        margin: 20px 0 20px 0;
    }
    h2 {
        margin: 20px 0 20px 0;
    }
    h3 {
        margin: 20px 0 20px 0;
    }
    p {
        word-wrap: break-word;
        font-size: 14pt;
        margin: 10px 0px 10px 0px;
    }
    ul {
        margin-left: 50px;
    }
    ol {
        margin-left: 50px;
    }
    li {
        margin-top: 5px;
        margin-bottom: 5px;
    }
`

const RightContentWrapper = styled.div`
    width: 40%;
    height: auto;
    margin: 150px 3% 0px 3%;
    display: flex;
    flex-direction: column;
`

const Wrapper = styled.div`
    /* display: flex;
    flex-direction: column; */
    align-items: center;
    width: 70%;
    margin-left: 15%;
    margin-right: 15%;
`

const EventImage = styled.img`
    width: 100%;
    /* max-width: 1900px; */
    height: 600px;
    margin-top: 80px;
    margin-bottom: -5px;
    border-radius: 100px 100px 0px 0px;
    background-image: url(${(props) => props.image});
    background-size: cover;
    background-position: center;
    object-fit: cover;
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
    :hover {
        background-color: #ca3e68;
        color: white;
        cursor: pointer;
    }
`

export default EventPage
