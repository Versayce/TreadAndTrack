import FormInputs from "./FormInput"
import styled from "styled-components"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { createEvent, getAllEvents } from "../../../store/event"
import { useSelector } from "react-redux"

const EventForm = () => {
    const currentUser = useSelector(state => state.session.user)
    const ownerId = currentUser.id

    const dispatch = useDispatch()
    const [values, setValues] = useState({
        name: "",
        address: "",
        city: "",
        state: "",
        country: "",
        zipcode: "",
        description: "",
        image_url: "",
        owner_id: ownerId
    })

    const inputs = [
        {
            id: 1,
            name: "name",
            type: "text",
            placeholder: "Name",
            errorMessage: "Name should be between 3 and 12 characters",
            label: "Name",
            required: true,
            pattern: "^[A-Za-z0-9]{4,12}$"
        },
        {
            id: 2,
            name: "address",
            type: "text",
            placeholder: "Address",
            errorMessage: "Address should be more than 10 characters",
            label: "Address",
            required: true,
        },
        {
            id: 3,
            name: "city",
            type: "text",
            placeholder: "City",
            errorMessage: "City should be more than 3 characters",
            label: "City",
            required: true,
        },
        {
            id: 4,
            name: "state",
            type: "text",
            placeholder: "State",
            errorMessage: "State should be more than 1 character",
            label: "State",
            required: true,
        },
        {
            id: 5,
            name: "country",
            type: "text",
            placeholder: "Country",
            errorMessage: "Country should be more than 1 character",
            label: "Country",
            required: true,
        },
        {
            id: 6,
            name: "zipcode",
            type: "text",
            placeholder: "ZipCode",
            errorMessage: "Zipcode must be 5 characters in length",
            label: "ZipCode",
            required: true,
        },
        {
            id: 7,
            name: "image_url",
            type: "text",
            placeholder: "Image",
            errorMessage: "Must be valid URL",
            label: "Image",
            required: true,
        },
        {
            id: 8,
            name: "description",
            type: "textfield",
            placeholder: "Description",
            errorMessage: "Description must be at least 50 characters",
            label: "Description",
            required: true,
        }
    ]


    const handleSubmit = async (e) => {
        e.preventDefault()
        await dispatch(createEvent(values)) 
        await dispatch(getAllEvents())
    }
    const onChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }

    console.log(values)
    return (
        <Form>
            <form onSubmit={handleSubmit}>
                <h1>Create Event</h1>
                {inputs.map((input) => (
                    <>
                    <FormInputs key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
                    <div></div>
                    </>
                ))}
                <button type="submit">Submit</button>
            </form>
        </Form>
    )
}


const Form = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    & h1 {
        margin-bottom: 20px;
    }
`


export default EventForm
