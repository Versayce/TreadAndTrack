import styled from "styled-components"
import { useState } from "react"

const FormInputs = (props) => {
    const [focused, setFocused] = useState(false)
    const {label, errorMessage, onChange, id, ...inputProps} = props
    console.log('INPUT PROPS', props)

    const handleFocus = (e) => {
        setFocused(true)
    }

    return (
        <>
            {/* <img src={`${image}`}/> */}
            <FormInput> 
                <label>{label}</label>
                <input {...inputProps} onChange={onChange} onBlur={handleFocus} focused={focused.toString} />
                <span>{errorMessage}</span>
            </FormInput>
        </>
    )
}

const FormInput = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    input {
        padding: 10px;
        margin: 5px 0px;
        width: 300px;
        border-radius: 5px;
        border: 1px solid grey;
    }
    label {
        font-size: 12px;
        color: grey;
    }
    div {
        height: 12px;
    }
    span {
        height: 12px;
        font-size: 12px;
        padding: 3px;
        margin-bottom: 10px;
        color: red;
        display: none;
    }
    & input:invalid[props.focused: true] ~ span {
        display: block;
    }
`

export default FormInputs
