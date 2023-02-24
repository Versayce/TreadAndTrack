import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import MessageForm from '../Forms/MessageForm/CreateMessageForm';
import EditMessageForm from '../Forms/MessageForm/EditMessageForm';
import { deleteMessage, getOneMessage } from '../../store/message';

// TODO start filling the page with information and get ready for comments feature.
function EventCommentsSection() {
    const dispatch = useDispatch();
    const [ formType, setFormType ] = useState("createForm")

    const sessionUserId = useSelector(state => state.session.user.id)

    const messagesObj = useSelector(state => state.messages.eventMessages)
    const messages = Object.values(messagesObj)

    // console.log("===========EVENT COMMENTS COMPONENT==================", sessionUserId === messages[1]?.author.id)

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
        {formType === "createForm" && <MessageForm />}
        {formType === "editForm" && <EditMessageForm setFormType={setFormType} />}
        <MessageBoxWrapper>
            <MessageContainer>
                {messages && messages.map(message => (
                    <LineWrapper key={message.id}>
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
            </MessageContainer>
        </MessageBoxWrapper>
        </>
    ); 
}

const LineWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-start;
    word-wrap: break-word;
`

const MessageBoxWrapper = styled.div`
    display: flex;
    margin-top: 50px;
    justify-content: center;
    flex-direction: column-reverse;
    margin-left: 40px;
`

const MessageContainer = styled.div`
    display: flex;
    flex-direction: column-reverse;
    width: 50%;
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
