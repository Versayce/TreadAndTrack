import styled from "styled-components"


const Banner = () => {


    return (
        <>
            <BackgroundImg>
                <img src="/images/WRX_S4_BoatXing.jpg" alt=""></img>
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

export default Banner
