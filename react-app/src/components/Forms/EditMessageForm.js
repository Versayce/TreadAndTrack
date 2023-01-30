import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { useState } from 'react';
import { editMessage } from '../../store/message';

// TODO start filling the page with information and get ready for comments feature.
function EditMessageForm() {
    const dispatch = useDispatch()
    const [body, setBody] = useState("")

    const currentMessage = useSelector(state => state.messages.oneMessage)
    const currentEventObj = useSelector(state => state.events.oneEvent)
    const eventId = Object.values(currentEventObj)[0]?.id
    const sessionUser = useSelector(state => state.session.user)
    const authorId = sessionUser.id

    // setBody()
    // const { body, channelId, authorId } = message;

    const formData = {body, "event_id": eventId, "author_id": authorId}
    console.log("===========MESSAGE FORM COMPONENT==================", currentMessage)

    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch(editMessage(formData))
    }
  
    return (
        <>
        <Wrapper>
            <FormWrapper onSubmit={handleSubmit}>
                <label>Edit: </label>
                <input
                    onChange={(e) => setBody(e.target.value)}
                    value={body}
                />
                <button>Submit</button>
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
`

const Wrapper = styled.div`
    margin-top: 50px;
    box-sizing: border-box;
    padding: 20px;
    border-radius: 10px;
    width: 50%;
    height: 100px;
    background: linear-gradient(180deg, rgba(255,255,255,1) 0%, #f7f7f7 100%);
    box-shadow: 1px 1px 10px 2px #d4d4d465;
`

export default EditMessageForm
