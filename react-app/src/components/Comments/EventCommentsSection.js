import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import MessageForm from '../Forms/CreateMessageForm';
import { StyledButton } from '../Theme';

// TODO start filling the page with information and get ready for comments feature.
function EventCommentsSection() {
    const dispatch = useDispatch();

    const sessionUserId = useSelector(state => state.session.user.id)

    const currentEventObj = useSelector(state => state.events.oneEvent)
    const event = Object.values(currentEventObj)[0]

    const messagesObj = useSelector(state => state.messages.eventMessages)
    const messages = Object.values(messagesObj)

    console.log("===========EVENT COMMENTS COMPONENT==================", sessionUserId === messages[100]?.author.id)
  
    return (
        <>
        <Wrapper>
            <MessageContainer>
                {messages && messages.map(message => (
                        <Message key={message.id}>
                            <p>{`${message.author.username}:`} </p>
                            <p>{message.body}</p>
                            {sessionUserId === message.author.id && <CustomButton>Delete</CustomButton>}
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
    align-items: center;
`

export const CustomButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 20px;
    line-height: 40px;
    font-size: 13px;
    font-family: sans-serif;
    text-decoration: none;
    color: #333;
    background-color: #e7e7e7;
    /* border: 2px solid #333; */
    padding: 2px 6px;
    margin-left: 10px;
    border-radius: 5px;
    letter-spacing: 2px;
    text-align: center;
    position: relative;
    transition: all .35s;
    span {
        position: relative;
        z-index: 2;
    }
    &:hover {
        background-color: #bd345d;
        color: #ffffff;
        cursor: pointer;
    }

`


export default EventCommentsSection
