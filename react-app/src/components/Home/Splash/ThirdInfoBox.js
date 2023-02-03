import styled from "styled-components"

const ThirdInfoBox = () => {

    return (
        <InfoWrapper>
            <MainHeader>
                <h1>Expand your business</h1>  
            </MainHeader>
            <MainContainer>
                <div>
                    {/* <FontAwesomeIcon icon="fa-solid fa-ticket" /> */}
                    <i class="fa-solid fa-ticket"></i>
                    <h2>Reach a larger audience</h2>
                    <p>Event-goers searching for unique things to do account for 1 out of 4 tickets sold on Eventbrite with personalized recommendations in our consumer app and newsletters.</p>
                    
                    <i class="fa-solid fa-square-poll-horizontal"></i>
                    <h2>Easy Marketing</h2>
                    <p>Event-goers searching for unique things to do account for 1 out of 4 tickets sold on Eventbrite with personalized recommendations in our consumer app and newsletters.</p>

                    <i class="fa-solid fa-bullhorn"></i>
                    <h2>Share on social</h2>
                    <p>Event-goers searching for unique things to do account for 1 out of 4 tickets sold on Eventbrite with personalized recommendations in our consumer app and newsletters.</p>
                </div>
                <img src="/splashImage_thick.png"/>
            </MainContainer>
        </InfoWrapper>
    )
}

const InfoWrapper = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 100%;
    height: auto;
    background-color: #ffffff;;
`

const MainContainer = styled.div`
    margin-right: 10%;
    margin-left: 10%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 100px;
    i {
        scale: 250%;
        margin-left: 10px;
        color: #aaaaaa;
    }div {
        width: 40%;
        font-size: 14px;
    }h2 {
        font-size: 16px;
        color: #777777;
        margin-bottom: 10px;
        margin-top: 20px;
    }p {
        margin-bottom: 50px;
        width: 50%;
    }img {
        max-width: 60%;
        height: 100%;
    }
`

const MainHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
        color: #070707;
        margin-top: 100px;
        margin-bottom: 100px;
        font-size: 40px;
    }p {
        color: #5e5e5e;
        width: 70%;
        margin-top: 20px;
    }   
`

export default ThirdInfoBox
