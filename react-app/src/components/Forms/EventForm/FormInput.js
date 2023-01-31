import styled from "styled-components"

const FormInputs = (props) => {
    const {label, onChange, id, ...inputProps} = props
    return (
        <FormInput> 
            <label>{label}</label>
            <input {...inputProps} onChange={onChange}/>
        </FormInput>
    )
}

const FormInput = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    input {
        padding: 15px;
        margin: 10px 0px;
    }
`

export default FormInputs
