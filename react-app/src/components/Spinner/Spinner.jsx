import styled, { keyframes } from 'styled-components' 

const Spinner = () => {
    return (
        <LoadAnimation />
    )
}
export default Spinner;

const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`

const LoadAnimation = styled.div`
    position: relative;
    margin: auto;
    top: 40%;
    border: 15px solid #f3f3f3;
    border-top: 15px solid #ca3e68;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    animation: .9s ${spin} linear infinite;
`
