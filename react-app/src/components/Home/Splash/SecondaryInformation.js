import styled from "styled-components"

const SecondaryInformation = () => {

    return (
        <InfoWrapper>
            <MainHeader>
                <h1>Get Started</h1>  
                <h2>with the best car-centric event hosting site.</h2>
            </MainHeader>
            <MainContainer>
                {/* <img src="/images/wrxLake.jpg"/> */}
                <InfoGrid>
                    <Block1>
                        <i class="fa-solid fa-bullhorn"></i>
                        <h3>Event creation and ticketing tools</h3>
                        <p>Selling tickets online with Eventbrite is easier than ever. Post your event, build your own professional online ticketing system, and create tickets for both in-person and virtual events in just minutes.</p>
                    </Block1>
                    <Block2>
                        <i class="fa-solid fa-newspaper"></i>
                        <h3>Customizable event pages</h3>
                        <p>Provide a seamless online ticket purchasing experience for your attendees with customizable event pages that that engage and inform your audience, from the first headline to checkout.</p>
                    </Block2>
                    <Block3>
                        <i class="fa-solid fa-sack-dollar"></i>
                        <h3>Flexible event payouts</h3>
                        <p>Set up online ticket payouts for your events on a custom schedule of your choice and get paid quickly.</p>
                    </Block3>
                    <Block4>
                        <i class="fa-solid fa-table-columns"></i>
                        <h3>Tread&&Track Organizer App</h3>
                        <p>Monitor on-site and online ticket sales, complete attendee check-ins, and view real-time data on the go with our easy-to-use mobile app.</p>
                    </Block4>
                </InfoGrid>
            </MainContainer>
        </InfoWrapper>
    )
}

const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 100%;
    height: auto;
    background-color: #922445;;
`

const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 120px;
    margin-bottom: 120px;
    img {
        width: 400px;
        height: auto;
        margin-left: 20px;
        margin-right: 20px;
    }h3 {
        font-size: 14px;
    }I {
        scale: 200%;
        margin-bottom: 20px;
        margin-left: 10px;
        color: #ffffff63;
    }
`

const InfoGrid = styled.div`
margin: 0 20% 0 20%;
    display: grid;
    grid-template-areas: 
    "block1 block2" 
    "block3 block4";
    gap: 50px;
    h3 {
        color: #ffffffca;
        margin-bottom: 8px;
    }p {
        color: #ffffffa7;
        font-size: 14px;
    }
`
const Block1 = styled.div`
    grid-area: "block1";
    width: auto;
    margin: 0 15% 0 15%;
`
const Block2 = styled.div`
    grid-area: "block2";
    width: auto;
    margin: 0 15% 0 15%;
`
const Block3 = styled.div`
    grid-area: "block3";
    width: auto;
    margin: 0 15% 0 15%;
`
const Block4 = styled.div`
    grid-area: "block4";
    /* width: 50%;  */
    width: auto;
    margin: 0 15% 0 15%;
`

const MainHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
        color: #ffffff;
        margin-top: 100px;
        font-size: 45px;
    }h2 {
        color: #ffffff;
        font-weight: 100;
        margin-top: 20px;
    }
`

export default SecondaryInformation
