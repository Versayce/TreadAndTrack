import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import MessageForm from '../Forms/CreateMessageForm';

// TODO start filling the page with information and get ready for comments feature.
function EventCommentsSection() {
    const dispatch = useDispatch();

    const currentEventObj = useSelector(state => state.events.oneEvent)
    const event = Object.values(currentEventObj)[0]

    const messagesObj = useSelector(state => state.messages.eventMessages)
    const messages = Object.values(messagesObj)

    console.log("===========EVENT COMMENTS COMPONENT==================", messages)
  
    return (
        <>
        <Wrapper>
            <MessageContainer>
                {messages && messages.map(message => (
                        <Message key={message.id}>
                            <p>{`${message.author.username}:`} </p>
                            <p>{message.body}</p>
                        </Message>
                ))}
            </MessageContainer>
        </Wrapper>
        <MessageForm />
        </>
    ); 
}

const Wrapper = styled.div`
    border: 3px solid red;
    width: 100%;
    height: 400px;
    overflow-y: auto;
`

const MessageContainer = styled.div`
    display: flex;
    flex-direction: column-reverse;
    width: 100%;
`

const Message = styled.div`
    box-sizing: border-box;
    padding: 20px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

`


export default EventCommentsSection
