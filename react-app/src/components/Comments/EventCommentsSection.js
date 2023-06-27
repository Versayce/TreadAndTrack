import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import MessageForm from '../Forms/MessageForm/CreateMessageForm';
import EditMessageForm from '../Forms/MessageForm/EditMessageForm';
import { deleteMessage, getOneMessage } from '../../store/message';

function EventCommentsSection() {
    const dispatch = useDispatch();
    const [ formType, setFormType ] = useState("createForm")
    const sessionUserId = useSelector(state => state.session.user.id)
    const messagesObj = useSelector(state => state.messages.eventMessages)
    const messages = Object.values(messagesObj)
    //TODO Fix bug with ref being scrolled to on page load 
    const mostRecentMessage = useRef(null) //For scrolling to most recent message
    
    const handleDelete = (messageId) => {
        dispatch(deleteMessage(messageId))
        setFormType("createForm")
    }
    
    const handleEdit = async (messageId) => {
        await dispatch(getOneMessage(messageId));
        setFormType("editForm")
        return
    }
    
    return (
        <>
        <MessageBoxWrapper>
            <MessageContainer>
                {messages && messages.map(message => (
                    <LineWrapper key={message.id} user={sessionUserId} message={message.author.id}>
                        <Message>
                            <div>{`${message?.author.username}: `}{message.updatedAt}</div>
                            <div>{message.body}</div>
                        </Message>
        
                        <ButtonWrapper>
                            {sessionUserId === message.author.id && <CustomButton onClick={() => handleDelete(message?.id)} >Delete</CustomButton>}
                            {sessionUserId === message.author.id && <CustomButton onClick={() => handleEdit(message?.id)} >Edit</CustomButton>}
                        </ButtonWrapper>
                    </LineWrapper>
                ))}

                <div ref={mostRecentMessage} /> {/* Reference for our useEffect to target and run .scrollIntoView() when we add a new message */ }

            </MessageContainer>
        </MessageBoxWrapper>
        {formType === "createForm" && <MessageForm mostRecentMessage={mostRecentMessage}/>}
        {formType === "editForm" && <EditMessageForm setFormType={setFormType} mostRecentMessage={mostRecentMessage} />}
        </>
    ); 
}


const MessageBoxWrapper = styled.div`
    display: flex;
    margin-top: 50px;
    justify-content: center;
    flex-direction: column-reverse;
`

const MessageContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 400px;
    overflow-y: scroll;
    overscroll-behavior: contain;
    padding: 10px;
`

const LineWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: flex-start;
    word-wrap: break-word;
    background-color: ${props => 
        props.user === props.message ? "#f5f5f59d" : "transparent"
    };
    margin: 0 0 1vh 0;
    border-radius: 10px;
    box-shadow: 1px 1px 5px #72727240;
    transform: perspective(1px) translateZ(0);
    transition-duration: 0.3s;
    transition-property: box-shadow, transform;
    &:hover {
        background-color: ${props => 
            props.user === props.message ? "#b6b6b62f" : "#f3f3f339"
        };
        box-shadow: 2px 2px 5px #30303042;
        transform: scale(1.01);
    }
`

const Message = styled.div`
    box-sizing: border-box;
    padding: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 7px;
`

export const CustomButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 17px;
    line-height: 40px;
    font-size: 13px;
    font-family: sans-serif;
    text-decoration: none;
    color: #333;
    background-color: #c7c7c7;
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
