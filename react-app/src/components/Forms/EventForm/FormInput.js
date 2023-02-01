import styled from "styled-components"
import { useState } from "react"

const isValid = (value, pattern) => {
    const regex = new RegExp(pattern)
    const result = regex.test(value)
    return result
}

const FormInputs = (props) => {
    const [focused, setFocused] = useState(false)
    const {
        label, 
        errorMessage, 
        onChange, 
        required, 
        id, 
        style, 
        value, 
        pattern, 
        name, 
        type, 
        row, 
        col, 
        placeholder } = props
    // console.log('INPUT PROPS', props)

    
    const handleFocus = (e) => {
        setFocused(true)
        console.log('HANDLE FOCUS: ', focused)
    }

    const handleChange = (e) => {
        onChange?.(e.target.value)
    }

    return (
        <>
            <FormInput style={style}> 
                <label>{label}</label>
                {type != "textarea" ? <input  //TODO destructure all of the props
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    required={required}
                    pattern={pattern}
                    onChange={handleChange} 
                    onBlur={handleFocus} 
                    focused={focused.toString()} 
                    value={value}
                /> : <textarea 
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    required={required}
                    pattern={pattern}
                    onChange={handleChange} 
                    onBlur={handleFocus} 
                    focused={focused.toString()} 
                    value={value}
                />}
                {!isValid(value, pattern) && focused ? <span>{errorMessage}</span> : <span></span>}
            </FormInput>
        </>
    )
}

const FormInput = styled.div`
    grid-area: ${props => props.style.gridArea};
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    align-content: center;
    width: 100%;
    input {
        padding: 8px;
        margin: 5px 0px;
        width: ${props => props.style.widthPercent};
        border-radius: 4px;
        border: 1px solid grey;
    }
    label {
        font-size: 12px;
        color: grey;
    }
    span {
        min-height: 16px;
        font-size: 12px;
        padding: 3px;
        margin-bottom: 10px;
        color: #af2d54;
    }
    textarea {
        width: ${props => props.style.width};
        height: ${props => props.style.height};
        margin-left: 30px;
    }
`

export default FormInputs
