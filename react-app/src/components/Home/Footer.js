import React from "react";
import styled from "styled-components"
import { Github } from "@styled-icons/bootstrap/Github";
import { Portfolio } from "@styled-icons/zondicons/Portfolio"
import { Linkedin } from "@styled-icons/bootstrap/Linkedin"
import { Email } from "@styled-icons/material/Email"
import NurburgringSVG from "./NurburgringSVG";

const Footer = () => {


    return (
        <>
            <Background> 
                <InfoWrapper>
                    <InfoHead>
                        <MainInfo>
                            <h1>Tread && Track</h1>
                            <About>
                                <p>About: </p>
                                <IconWrapper>
                                    <a href="https://github.com/Versayce/TreadAndTrack"><GitHubIcon /></a>  
                                    <a href="https://github.com/Versayce/TreadAndTrack">GitHub Repository</a>
                                </IconWrapper>
                            </About>
                            <EmailInfo>
                                <p>Contact: </p>
                                <IconWrapper>
                                    <a href="mailTo: castro.alex@asu.edu">
                                        <EmailIcon />
                                    </a>  
                                    <a href="https://github.com/versayce">Email</a>
                                </IconWrapper>
                            </EmailInfo>
                            <Icons>
                                <p>Connect: </p> 
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
                            <AuthorCopyright>
                                <h3>Versayce</h3>
                                <p>Copyright © Alex Castro</p>
                            </AuthorCopyright>
                        </MainInfo>
                    </InfoHead>
                </InfoWrapper>

                <StyleWrapper>
                    <SVG><NurburgringSVG /></SVG>
                </StyleWrapper>
            </Background>
        </>
    )
}

const SVG = styled.div`
    fill: white;
    width: 300px;
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
const EmailIcon = styled(Email)`
    width: 20px;
    color: #ffffff;
`

const Background = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: fit-content;
    margin-top: 10vh;
    background-image: linear-gradient(to bottom, #1f1f1f, #212121, #232323, #252525, #272727, #282828, #292929, #2a2a2a, #2a2a2a, #292a29, #292929, #292929);
`

const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    width: 40%;
    margin-top: 5vh;
    margin-bottom: 2vh;
    p {
        width: 90px;
        margin-right: 1vw;
        color: #aaaaaa;
    }
`

const StyleWrapper = styled.div`
    width: 40%;
    display: flex;
    justify-content: center;
    margin-top: 5vh;
    margin-bottom: 2vh;
`

const MainInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 2vh;
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

const InfoHead = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
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
    width: 100%;
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

const AuthorCopyright = styled.div`
    width: 100%;
    color: #585858;
    margin-top: 1vh;
    p {
        width: 100%;
        font-size: 10pt;
        color: #585858;
    }
`



export default Footer
