import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import MessageForm from '../Forms/MessageForm';

// TODO start filling the page with information and get ready for comments feature.
function EventCommentsSection() {
    const dispatch = useDispatch()
    const currentEventObj = useSelector(state => state.events.oneEvent)
    const event = Object.values(currentEventObj)[0]

    const messages = event?.messages 

    console.log("===========EVENT COMMENTS COMPONENT==================", messages)
  
    return (
        <>
        <Wrapper>
            {messages && messages.map(message => (
                <div key={message.id}>
                    <p>{`${message.author.username}:`} </p>
                    <p>{message.body}</p>
                </div>
            ))}
            <MessageForm />
        </Wrapper>
        </>
    ); 
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    width: 100%;
    height: 400px;
`

export default EventCommentsSection
