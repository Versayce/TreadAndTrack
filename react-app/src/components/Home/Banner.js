import { useSelector } from "react-redux"
import styled from "styled-components"
import LogoText from "./Tread&&TrackLogo"

const Banner = () => {
    const currentUser = useSelector(state => state.session.user)

    return (
        <>
            <BackgroundImg>
                {/* <svg src="/images/testArtboard.svg"></svg> */}
                <Styles><LogoText /></Styles>
                {currentUser ? <img src="/images/WRX_S4_BoatXing.jpg" alt="bannerimg"></img> : <img src="/images/wrxLake.jpg" alt="bannerimg"></img>}
            </BackgroundImg>
        </>
    )
}

const BackgroundImg = styled.div`
    width: 100%;
    height: 456px;
    /* box-shadow: 0px 0px 40px -15px; */
    & img {
        height: 456px;
        width: 100%;
        object-fit: cover;
    }
`

const Styles = styled.svg`
    background-color: transparent;
    position: absolute;
    left: -200px;
    width: 200px;
    scale: 1100%;
    top: 200px;
    pointer-events: none;
    cursor: default;
`


export default Banner
