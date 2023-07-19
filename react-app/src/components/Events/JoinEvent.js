import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

function JoinEvent() {

    return (
        <>
            <Wrapper>
                <h3>Interested in attending? Let the organizers know!</h3>
                <StyledButton>RSVP</StyledButton>
                <p>
                    While RSVP'ing isn't necessary, it helps the organizers plan for
                    the amount of people that might show up!
                </p>
            </Wrapper>
        </>
    )
}

export default JoinEvent

const Wrapper = styled.div`
    box-sizing: border-box;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    width: 100%;
    border-radius: 15px;
    background: radial-gradient(at center top, #ffffff, #fafafa);
    box-shadow: 2px 3px 10px 0px #36363621;
`

const StyledButton = styled.button`
    box-sizing: content-box;
    text-align: center;
    font-size: 20px;
    border: none;
    padding: 5px;
    margin: 5px;
    width: 40%;
    height: 40px;
    border-radius: 15px;
    background-color: #353535;
    color: white;
    :hover {
        background-color: #ca3e68;
        color: white;
        cursor: pointer;
    }
`
