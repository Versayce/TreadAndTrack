import FormInputs from "./FormInput"
import styled from "styled-components"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { editEventById, getAllEvents } from "../../../store/event"
import { useSelector } from "react-redux"
import { closeModal } from "../../../store/modal"

const EditEventForm = () => {
    const currentUser = useSelector(state => state.session.user)
    const ownerId = currentUser.id

    const currentEventObj = useSelector(state => state.events.oneEvent)
    const currentEvent = Object.values(currentEventObj)[0]
    console.log('==========EDIT EVENT FORM==========', currentEvent)

    const dispatch = useDispatch()
    const [errors, setErrors] = useState([])
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [country, setCountry] = useState("")
    const [zipcode, setZipcode] = useState("")
    const [description, setDescription] = useState("")
    const [image_url, setImageUrl] = useState("")

    const formData = {
        "id": currentEvent.id,
        name,
        address,
        city,
        state,
        country,
        zipcode,
        description,
        "owner_id": ownerId
    }

    const styles = {
        width: "80%",
        widthDesc: "90%"
    }

    const inputs = [
        {
            id: 1,
            name: "name",
            type: "text",
            placeholder: "Name",
            errorMessage: "Name should be 3-12 characters",
            label: "Name",
            required: true,
            pattern: "^[A-Za-z0-9]{3,12}$",
            onChange: setName,
            value: name,
            style: {
                gridArea: "nameInput",
                widthPercent: styles.width
            }
        },
        {
            id: 2,
            name: "address",
            type: "text",
            placeholder: "Address",
            errorMessage: "Address should 6-12 characters",
            label: "Address",
            required: true,
            pattern: "^[A-Za-z0-9]{6,12}$",
            onChange: setAddress,
            value: address,
            style: {
                gridArea: "addressInput",
                widthPercent: styles.width
            }
        },
        {
            id: 3,
            name: "city",
            type: "text",
            placeholder: "City",
            errorMessage: "City should 4-10 characters",
            label: "City",
            required: true,
            pattern: "^[A-Za-z0-9]{4,10}$",
            onChange: setCity,
            value: city,
            style: {
                gridArea: "cityInput",
                widthPercent: styles.width
            }
        },
        {
            id: 4,
            name: "state",
            type: "text",
            placeholder: "State",
            errorMessage: "State should be 2-10 characters",
            label: "State",
            required: true,
            pattern: "^[A-Za-z0-9]{2,10}$",
            onChange: setState,
            value: state,
            style: {
                gridArea: "stateInput",
                widthPercent: styles.width
            }
        },
        {
            id: 5,
            name: "country",
            type: "text",
            placeholder: "Country",
            errorMessage: "Country should be 2-10 characters",
            label: "Country",
            required: true,
            pattern: "^[A-Za-z0-9]{2,10}$",
            onChange: setCountry,
            value: country,
            style: {
                gridArea: "countryInput",
                widthPercent: styles.width
            }
        },
        {
            id: 6,
            name: "zipcode",
            type: "text",
            placeholder: "ZipCode",
            errorMessage: "Zipcode must be 5 numbers",
            label: "ZipCode",
            required: true,
            pattern: "^[0-9]{5}$",
            onChange: setZipcode,
            value: zipcode,
            style: {
                gridArea: "zipcodeInput",
                widthPercent: styles.width
            }
        },
        {
            id: 7,
            name: "image_url",
            type: "text",
            placeholder: "Image",
            errorMessage: "Please enter a valid URL",
            label: "Image",
            required: true,
            pattern: "^https?://.*",
            onChange: setImageUrl,
            value: image_url,
            style: {
                gridArea: "imageInput",
                widthPercent: styles.width
            }
        },
        {
            id: 8,
            name: "description",
            type: "textarea",
            placeholder: "Description",
            errorMessage: "Max length 700",
            label: "Description",
            required: true,
            pattern: "^[A-Za-z0-9]{0,700}$",
            onChange: setDescription,
            value: description,
            style: {
                gridArea: "descInput",
                widthPercent: styles.widthDesc,
                width: "95%",
                height: "100%"
            }
        }
    ]


    const handleSubmit = async (e) => {
        e.preventDefault()
        await dispatch(editEventById(formData, image_url)) 
        await dispatch(getAllEvents())
        dispatch(closeModal())
    }

    return (
        // <FormWrapper>
            <Form onSubmit={handleSubmit}>
                <Header>Edit Event</Header>
                    {inputs.map((input) => (
                        <>
                        <FormInputs key={input.id} {...input} />
                        <div>{errors}</div>
                        </>
                    ))}
                <SubmitButton type="submit">Submit</SubmitButton>
            </Form>
        // </FormWrapper>
    )
}

// const FormWrapper = styled.div`
//     width: 100%;
//     height: 100%;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     background-color: #adadad;
//     background-image: url("/images/wrxLake.jpg");
//     background-position: top;
// `

const Form = styled.form`
    /* box-sizing: border-box; */
    width: 80%;
    /* max-width: 850px; */
    display: grid;
    /* grid-gap: 0px; */
    /* padding: 60px; */
    /* margin: 300px 0 400px 0px; */
    /* border-radius: 10px; */
    /* background-image: linear-gradient(to bottom, #f6f6f6, #f8f8f8, #fafafa, #fdfdfd, #ffffff); */
    /* box-shadow: 1px 1px 10px 2px #8f8f8fd6; */
    grid-template-areas:
    "header header header"
    "nameInput addressInput cityInput"
    "stateInput countryInput zipcodeInput"
    "descInput descInput imageInput"
    "descInput descInput submit"
    ;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    align-content: center;
    align-items: flex-start;
`

const SubmitButton = styled.button`
    padding: 10px;
    width: auto;
    margin: 5% 8% 15% 8%;
    border: none;
    grid-area: submit;
    border-radius: 8px;
    background-color: #e7e7e7;
    :hover {
        background-color: #bd345d;
        color: white;
        cursor: pointer;
    }
`
    
const Header = styled.h1`
    grid-area: header;
    color: #af2d54;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-weight: 100;
`


export default EditEventForm
