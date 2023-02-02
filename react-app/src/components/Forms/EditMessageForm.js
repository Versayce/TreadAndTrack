import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { useState } from 'react';
import { editMessageById } from '../../store/message';

// TODO start filling the page with information and get ready for comments feature.
function EditMessageForm({ setFormType }) {
    const dispatch = useDispatch()
    const currentMessage = useSelector(state => state.messages.oneMessage)
    const messageId = currentMessage.id
    const [body, setBody] = useState(currentMessage?.body)
    const [error, setError] = useState([])
    

    const currentEventObj = useSelector(state => state.events.oneEvent)
    const event_id = Object.values(currentEventObj)[0]?.id

    const sessionUser = useSelector(state => state.session.user)
    const author_id = sessionUser.id

    const formData = {"id": messageId, body, event_id, author_id}
    // console.log("===========EDIT FORM COMPONENT==================", currentMessage)

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(body.length > 0 && body.length < 50){
            setError([])
            setBody("")
            await dispatch(editMessageById(formData))
            setFormType("createForm")
        } else {
            setError("Comment must be between 1 and 50 chars")
            setBody("")
        }
    }
  
    return (
        <>
        <Wrapper>
            <FormWrapper onSubmit={handleSubmit}>
                <label>Edit: </label>
                <input
                    onChange={(e) => setBody(e.target.value)}
                    value={body}
                    placeholder={currentMessage.body}
                />
                <span>{error}</span>
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
    margin-left: 40px;
    & span {
        color: #ca3e68;
    }
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
