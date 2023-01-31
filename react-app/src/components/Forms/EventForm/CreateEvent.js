import FormInputs from "./FormInput"
import styled from "styled-components"
import { useState } from "react"

const EventForm = () => {
    const [values, setValues] = useState({
        name: "",
        address: "",
        city: "",
        state: "",
        country: "",
        zipcode: "",
        desc: "",
        image: "",
    })

    const inputs = [
        {
            id: 1,
            name: "name",
            type: "text",
            placeholder: "Name",
            label: "Name"

        },
        {
            id: 2,
            name: "address",
            type: "text",
            placeholder: "Address",
            label: "Address"

        },
        {
            id: 3,
            name: "city",
            type: "text",
            placeholder: "City",
            label: "City"

        },
        {
            id: 4,
            name: "state",
            type: "text",
            placeholder: "State",
            label: "State"

        },
        {
            id: 5,
            name: "country",
            type: "text",
            placeholder: "Country",
            label: "Country"

        },
        {
            id: 6,
            name: "zipcode",
            type: "text",
            placeholder: "ZipCode",
            label: "ZipCode"

        },
        {
            id: 7,
            name: "image",
            type: "text",
            placeholder: "Image",
            label: "Image"

        },
        {
            id: 8,
            name: "name",
            type: "text",
            placeholder: "name",
            label: "name"

        }
    ]


    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
    }
    const onChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }

    console.log(values)
    return (
        <Form>
            <form onSubmit={handleSubmit}>
                {inputs.map((input) => (
                    <FormInputs key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
                ))}
                <button>Submit</button>
            </form>
        </Form>
    )
}


const Form = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`


export default EventForm
