import styled from "styled-components"
import { Github } from "@styled-icons/bootstrap/Github";
import { Portfolio } from "@styled-icons/zondicons/Portfolio"
import { Linkedin } from "@styled-icons/bootstrap/Linkedin"


const Footer = () => {


    return (
        <>
            <Background> 
                <InfoWrapper>
                    <h1>Tread && Track</h1>
                    <IconWrapper>
                        <p>About: </p>
                        <a href="https://github.com/Versayce/TreadAndTrack"><GitHubIcon /></a>  
                        <a href="https://github.com/Versayce/TreadAndTrack">GitHub Repository</a>
                    </IconWrapper>
                    <p>Contact: <a href="mailTo: castro.alex@asu.edu">castro.alex@asu.edu</a></p>
                    <Icons>
                        <p>Connect:</p> 
                        <IconWrapper>
                            <a href="https://github.com/versayce"><GitHubIcon /></a>  
                            <a href="https://github.com/versayce">GitHub</a>
                        </IconWrapper>
                        <IconWrapper>
                            <a href="https://www.linkedin.com/in/fullstackcastro/"><LinkedInIcon /></a>
                            <a href="https://www.linkedin.com/in/fullstackcastro/">LinkedIn</a>
                        </IconWrapper>
                        <IconWrapper>
                            <a href="https://versayce.github.io/"><PortfolioIcon /></a>
                            <a href="https://versayce.github.io/">Portfolio</a>
                        </IconWrapper>
                    </Icons>
                    <h3>Alex Castro</h3>
                    <p>Copywright</p>
                </InfoWrapper>
            </Background>
        </>
    )
}

const Background = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 350px;
    background-color: #2b2b2b;
    margin-top: 100px;
`

const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-content: flex-start;
    justify-content: center;
    width: 60%;
    margin-bottom: 80px;
    color: #ffffff;
    gap: 10px;
`

const Icons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 80%;
    gap: 5%;
`

const IconWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #ffffff;
    gap: 5px;
`

const LinkedInIcon = styled(Linkedin)`
    width: 20px;
    color: #ffffff;
`

const GitHubIcon = styled(Github)`
    width: 20px;
    color: #ffffff;
`

const PortfolioIcon = styled(Portfolio)`
    width: 20px;
    color: #ffffff;
`

export default Footer
