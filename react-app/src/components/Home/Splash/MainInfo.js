import styled from "styled-components"

const MainInfo = () => {

    return (
        <InfoWrapper>
            <MainHeader>
                <h2>Welcome to Tread&Track</h2>
                <h1>Creating and hosting car events made easier</h1>
                <p>Tread and Track is a car centric, event hosting platform. 
                    Linking thousands of people who share a passion for cars together.  
                    Join or host your event today!
                </p>
            </MainHeader>
            <CardWrapper>
                <InfoCard>
                    <h1>Create your event with the best online ticketing system</h1>
                    <p>Easily create, manage, and deliver a memorable in-person or virtual event experience on a trusted platform.</p>
                </InfoCard>  
                <InfoCard>
                    <h1>Expand your audience</h1>
                    <p>Tap into the world’s largest events marketplace and expand your reach with social marketing tools powered by our exclusive data.</p>
                </InfoCard>
                <InfoCard>
                    <h1>Build a community</h1>
                    <p>Stay connected to your attendees and drive online ticket sales with advanced email marketing tools, targeted notifications, and real-time insights that get results.</p>
                </InfoCard>
            </CardWrapper>
        </InfoWrapper>
    )
}


const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 80%;
    height: auto;
    margin: 100px 0 100px 0;
`

const MainHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
        color: #bd345d;
        margin-top: 30px;
        font-size: 40px;
    }h2 {
        color: #5e5e5e;
    }p {
        color: #5e5e5e;
        width: 70%;
        margin-top: 20px;
    }   
`

const CardWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2vw;
    width: 100%;
    height: auto;
`

const InfoCard = styled.div`
    box-sizing: border-box;
    padding: 40px;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* background-color: #f5f5f5; */
    background-image: radial-gradient(circle, #ffffff, #fbfbfb, #f6f6f6, #f8f8f8, #f7f7f7);
    max-width: 375px;
    height: 350px;
    border-radius: 10px;
    box-shadow: 1px 1px 15px 0px #4141412d;
    top: 0;
    position: relative;
    transition: top ease 0.5s, box-shadow 0.5s ease-in-out;
    :hover{
        box-shadow: 1px 10px 30px 0px #4141414e;
        top: -10px;
    }
    & h1 {
        width: 100%;
        color: #696969;
    } p {
        margin-top: 30px;
    }
`


export default MainInfo
