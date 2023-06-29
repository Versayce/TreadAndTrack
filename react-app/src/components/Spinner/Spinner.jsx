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
    border: 10px solid #f3f3f3;
    border-top: 10px solid #3498db;
    border-radius: 50%;
    width: 80px;
    height: 80px;
    animation: 1s ${spin} linear infinite;
`
