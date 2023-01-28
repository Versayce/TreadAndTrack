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
    height: 300px;
    & img {
        height: 300px;
        width: 100%;
        object-fit: cover;
    }
`

export default Banner
