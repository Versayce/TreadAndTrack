import styled from "styled-components"
import { Github } from "@styled-icons/bootstrap/Github";
import { Portfolio } from "@styled-icons/zondicons/Portfolio"
import { Linkedin } from "@styled-icons/bootstrap/Linkedin"
import { Email } from "@styled-icons/material/Email"


const Footer = () => {


    return (
        <>
            <Background> 
                <InfoWrapper>
                    <InfoHead>
                        <h1>Tread && Track</h1>
                        <About>
                            <p>About: </p>
                            <IconWrapper>
                                <a href="https://github.com/Versayce/TreadAndTrack"><GitHubIcon /></a>  
                                <a href="https://github.com/Versayce/TreadAndTrack">GitHub Repository</a>
                            </IconWrapper>
                        </About>
                        <EmailInfo>
                            <p>Contact:</p>
                            <IconWrapper>
                                <a href="mailTo: castro.alex@asu.edu">
                                    <EmailIcon />
                                </a>  
                                <a href="https://github.com/versayce">Email</a>
                            </IconWrapper>
                        </EmailInfo>
                        <Icons>
                            <p>Connect:</p> 
                            <IconWrapper>
                                <a href="https://www.linkedin.com/in/fullstackcastro/">
                                    <LinkedInIcon />
                                </a>
                                <a href="https://www.linkedin.com/in/fullstackcastro/">LinkedIn</a>
                            </IconWrapper>
                            <IconWrapper>
                                <a href="https://versayce.github.io/">
                                    <PortfolioIcon />
                                </a>
                                <a href="https://versayce.github.io/">Portfolio</a>
                            </IconWrapper>
                            <IconWrapper>
                                <a href="https://github.com/versayce">
                                    <GitHubIcon />
                                </a>  
                                <a href="https://github.com/versayce">GitHub</a>
                            </IconWrapper>
                        </Icons>
                    </InfoHead>

                    <AuthorCopywright>
                        <h3>Versayce</h3>
                        <p>Copywright © Alex Castro</p>
                    </AuthorCopywright>
                </InfoWrapper>
            </Background>
        </>
    )
}

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
const EmailIcon = styled(Email)`
    width: 20px;
    color: #ffffff;
`

const Background = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 350px;
    margin-top: 10vh;
    background-image: linear-gradient(to bottom, #1f1f1f, #212121, #232323, #252525, #272727, #282828, #292929, #2a2a2a, #2a2a2a, #292a29, #292929, #292929);
    `

const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-content: flex-start;
    justify-content: center;
    width: 70%;
    margin-bottom: 10px;
    color: #ffffff;
    gap: 10px;
`

const InfoHead = styled.div`
    font-weight: 200 !important;
    display: flex;
    flex-direction: column;
    gap: 2vh;
    margin-top: 5vh;
    width: 100%;
    p {
        width: 80px;
        margin-right: 1vw;
        color: #aaaaaa;
    }
    a {
        margin-right: 9px;
        color: #ffffff4b;
        text-decoration: none;
    }
    a:hover {
        color: #bd345d;
    }
    h1 {
        letter-spacing: .4rem;
        margin-bottom: 3vh;
        color: #8a2339d1;
    }
`

const About = styled.div`
    display: flex;
    flex-direction: row;
`

const EmailInfo = styled.div`
    display: flex;
    flex-direction: row;
`

const Icons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 80%;
`

const IconWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #ffffff;
    margin-right: 1.5vw;
    cursor: pointer;
    :hover a {
        color: #bd345d;
    }
    &:hover ${GitHubIcon} {
        color: #bd345d;
    }
    &:hover ${LinkedInIcon} {
        color: #bd345d;
    }
    &:hover ${PortfolioIcon} {
        color: #bd345d;
    }
    &:hover ${EmailIcon} {
        color: #bd345d;
    }
`

const AuthorCopywright = styled.div`
    margin-top: 5vh;
    color: #464646;
    p {
        font-size: 10pt;
    }
`



export default Footer
