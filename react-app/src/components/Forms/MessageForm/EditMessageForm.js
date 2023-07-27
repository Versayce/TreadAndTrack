import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { useState } from 'react';
import { editMessageById } from '../../../store/message';

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
                <MainForm>
                    <CommentInput
                        onChange={(e) => setBody(e.target.value)}
                        value={body}
                        placeholder={currentMessage.body}
                    />
                    <span>{error}</span>
                    <SubmitButton>Submit</SubmitButton>
                </MainForm>
            </FormWrapper>
        </Wrapper>
        </>
    ); 
}

const Wrapper = styled.div`
    box-sizing: border-box;
    padding: 10px;
    border-radius: 10px;
    width: 100%;
    height: 100px;
    background: radial-gradient(at center top, #ffffff, #fafafa);
    box-shadow: 2px 3px 10px 0px #36363621;
    margin-top: 10px;
`

const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    & span {
        color: #ca3e68;
    }
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

export default EditMessageForm
