import styled from "styled-components"

export const inputProps = {
    invalid,
    test1,
    test2
} 

const FormInputs = styled.input<inputProps>`
    border: 1px solid black
`
export default FormInputs
