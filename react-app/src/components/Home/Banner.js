import styled from "styled-components"
import LogoText from "./Tread&&TrackLogo"
import SvgComponent from "./Tread&&TrackLogo"


const Banner = () => {


    return (
        <>
            <BackgroundImg>
                {/* <svg src="/images/testArtboard.svg"></svg> */}
                {/* <Styles><LogoText /></Styles> */}
                <img src="/images/WRX_S4_BoatXing.jpg"></img>
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
    cursor: default;
`


export default Banner
