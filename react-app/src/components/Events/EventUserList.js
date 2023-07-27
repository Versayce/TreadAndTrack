import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

function EventUserList({ userList }) {
    console.log(userList)
    const eventUsers = userList?.map((user) => {
        return (
            <EventUsers key={user.id}>
                <ImageWrapper>
                    {user?.userImage ? <img alt='userimg' src={`${user.userImage}`} onError={e => {e.currentTarget.src = "/images/placeholderImage.png";}}/> : <img alt='placeholder' src='/images/placeholderImage.png'/>}
                </ImageWrapper>
                <h4>{user.username}</h4>
            </EventUsers>
        );
    });

    return (
        <Wrapper> 
            <h3>Who's Going?</h3>
            <Content>
                {eventUsers}
            </Content>
        </Wrapper>
    )
}

export default EventUserList

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 20px;
    margin-top: 50px;
    width: 100%;
    height: fit-content;
    max-height: 300px;
    box-shadow: 2px 3px 10px 0px #36363621;
    background: #CACACA;
    background: radial-gradient(at center top, #fcfcfc, #fafafa);
    border-radius: 15px;
    h3 {
        height: 15%;
        margin-bottom: 10px;
    }
`

const Content = styled.div`
    box-sizing: border-box;
    padding: 15px;
    display: flex;
    flex-direction: column;
    height: fit-content;
    background: radial-gradient(at center, #ffffff, #f7f7f7);
    border-radius: 8px;
    overflow-y: scroll;
`

const EventUsers = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    padding: 10px;
    width: 100%;
    max-height: fit-content;
    justify-content: flex-start;
    align-items: center;
    word-wrap: break-word;
    background-color: #ffffff;
    margin: 0 0 1vh 0;
    border-radius: 10px;
    box-shadow: 1px 1px 5px #72727240;
    transform: perspective(1px) translateZ(0);
    transition-duration: 0.3s;
    transition-property: box-shadow, transform;
    h4 {
        margin-left: 20px;
    }
    :hover {
        background-color: #ffffff9d;
        box-shadow: 2px 2px 5px #30303042;
        transform: scale(1.01);
    }
`

const ImageWrapper = styled.div`
    box-sizing: border-box;
    border-radius: 50%;
    height: 80px;
    width: 80px;
    margin-left: 30px;
    img {
        border-radius: 50%;
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
` 
