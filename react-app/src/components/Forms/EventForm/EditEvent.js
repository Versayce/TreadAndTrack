import FormInputs from "./FormInput"
import styled from "styled-components"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { editEventById, getAllEvents, getOneEvent } from "../../../store/event"
import { useSelector } from "react-redux"
import { closeModal } from "../../../store/modal"

const EditEventForm = () => {
    const dispatch = useDispatch()
    const currentEventObj = useSelector(state => state.events.oneEvent)
    const currentEvent = Object.values(currentEventObj)[0]
    const currentUser = useSelector(state => state.session.user)
    const ownerId = currentUser.id

    // const [errors, setErrors] = useState([])
    const [name, setName] = useState(currentEvent.name)
    const [address, setAddress] = useState(currentEvent.address)
    const [city, setCity] = useState(currentEvent.city)
    const [state, setState] = useState(currentEvent.state)
    const [country, setCountry] = useState(currentEvent.country)
    const [zipcode, setZipcode] = useState(currentEvent.zipcode)
    const [description, setDescription] = useState(currentEvent.description)
    const [image_url, setImageUrl] = useState(currentEvent.bannerImage)
    

    
    const formData = {
        "id": currentEvent.id,
        name,
        address,
        city,
        state,
        country,
        zipcode,
        description,
        "banner_image_url": image_url,
        "owner_id": ownerId
    }
    // console.log('==========EDIT EVENT FORM==========', formData)
    
    const styles = {
        width: "80%",
        widthDesc: "90%"
    }

    const inputs = [
        {
            id: 1,
            name: "name",
            type: "text",
            errorMessage: "Name should be 3-30 characters",
            label: "Name",
            required: true,
            pattern: "^[A-Za-z0-9 ]{3,30}$",
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
            placeholder: currentEvent.address,
            errorMessage: "Address should 6-40 characters",
            label: "Address",
            required: true,
            pattern: "^[A-Za-z0-9# ]{6,40}$",
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
            placeholder: currentEvent.city,
            errorMessage: "City should 4-20 characters",
            label: "City",
            required: true,
            pattern: "^[A-Za-z0-9 ]{4,20}$",
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
            placeholder: currentEvent.state,
            errorMessage: "State should be 2-10 characters",
            label: "State",
            required: true,
            pattern: "^[A-Za-z0-9 ]{2,10}$",
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
            placeholder: currentEvent.country,
            errorMessage: "Country should be 2-20 characters",
            label: "Country",
            required: true,
            pattern: "^[A-Za-z0-9 ]{2,20}$",
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
            placeholder: currentEvent.zipcode,
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
            placeholder: currentEvent.bannerImage,
            errorMessage: "Enter a URL containing https://",
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
            placeholder: currentEvent.description,
            errorMessage: "Max length 700",
            label: "Description",
            required: true,
            pattern: "^[A-Za-z0-9 ]{0,700}$",
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
        await dispatch(editEventById(formData)) 
        await dispatch(getAllEvents())
        await dispatch(getOneEvent(currentEvent.id))
        dispatch(closeModal())
    }

    return (
        // <FormWrapper>
            <Form onSubmit={handleSubmit}>
                <Header>Edit Event</Header>
                    {inputs.map((input) => (
                        <>
                        <FormInputs key={input.id} {...input} />
                        {/* <div>{errors}</div> */}
                        </>
                    ))}
                <SubmitButton type="submit">Submit</SubmitButton>
            </Form>
        // </FormWrapper>
    )
}


const Form = styled.form`
    width: 80%;
    display: grid;
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
