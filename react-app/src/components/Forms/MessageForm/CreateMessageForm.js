import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { useState } from 'react';
import { createMessage } from '../../../store/message';
import { useEffect } from 'react';

// TODO start filling the page with information and get ready for comments feature.
function MessageForm({ mostRecentMessage }) {
    const dispatch = useDispatch()
    const [body, setBody] = useState("")
    const [error, setError] = useState([])

    const currentEventObj = useSelector(state => state.events.oneEvent)
    const eventId = Object.values(currentEventObj)[0]?.id
    const sessionUser = useSelector(state => state.session.user)
    const authorId = sessionUser.id
    // const { body, channelId, authorId } = message;

    const formData = {body, "event_id": eventId, "author_id": authorId}

    useEffect(() => {
        if(body.length > 0 && body.length < 50) {
            setError([])
        }
    }, [body])
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        if(body.length > 0 && body.length < 50){
            setError([])
            setBody("")
            await dispatch(createMessage(formData))
            mostRecentMessage.current?.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "center",
            });
        }else {
            setError("Comment must be between 1 and 50 chars")
            setBody("")
        }
    }
    
    return (
        <>
        <Wrapper>
            <FormWrapper onSubmit={handleSubmit}>
                <label>Comment: </label>
                <MainForm>
                    <CommentInput
                        onChange={(e) => setBody(e.target.value)}
                        value={body}
                    />
                    <span>{error}</span>
                    <SubmitButton>Submit</SubmitButton>
                </MainForm>
            </FormWrapper>
        </Wrapper>
        </>
    ); 
}

const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    & span {
        color: #ca3e68;
    }
`

const Wrapper = styled.div`
    box-sizing: border-box;
    padding: 10px;
    border-radius: 10px;
    width: 50%;
    height: 100px;
    background: linear-gradient(180deg, rgba(255,255,255,1) 0%, #f7f7f7 100%);
    box-shadow: 1px 1px 5px 1px #d4d4d465;
`

const MainForm = styled.div`
    display: flex;
    width: 100%;
    padding: 10px 0px 0px 0px
`

const CommentInput = styled.input`
    width: 100%;
`

const SubmitButton = styled.button`
    width: 50px;
`

export default MessageForm
