import styled from "styled-components"

const SecondaryInformation = () => {

    return (
        <InfoWrapper>
            <MainHeader>
                <h1>Get Started</h1>  
                <h2>with the best car-centric event hosting site.</h2>
            </MainHeader>
            <MainContainer>

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
    
`

const MainHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
        color: #ffffff;
        margin-top: 100px;
        font-size: 40px;
    }h2 {
        color: #ffffff;
        font-weight: 100;
        margin-top: 20px;
    }p {
        color: #5e5e5e;
        width: 70%;
        margin-top: 20px;
    }   
`

export default SecondaryInformation
