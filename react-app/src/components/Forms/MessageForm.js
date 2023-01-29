import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { useState } from 'react';


// TODO start filling the page with information and get ready for comments feature.
function MessageForm() {
    const dispatch = useDispatch()

    const [messageBody, setMessageBody] = useState("")

    const currentEventObj = useSelector(state => state.events.oneEvent)
    const event = Object.values(currentEventObj)[0]
    const messages = event?.messages 

    console.log("===========MESSAGE FORM COMPONENT==================", messages)

    const handleSubmit = (e) => {
        e.preventDefault()
    }
  
    return (
        <>
        <Wrapper>
            <form onSubmit={handleSubmit}>
                <label>Comment: </label>
                <input
                    onChange={(e) => setMessageBody(e.target.value)}
                    value={messageBody}
                />
                <button>Submit</button>
            </form>
        </Wrapper>
        </>
    ); 
}

const Wrapper = styled.div`
    border: 2px solid red;
    width: 100%;
    height: 100px;
`

export default MessageForm
