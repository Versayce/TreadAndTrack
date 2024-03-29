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
    //Form Input Vars
    const [name, setName] = useState(currentEvent.name)
    const [address, setAddress] = useState(currentEvent.address)
    const [lat, setLat] = useState(currentEvent.lat);
    const [lng, setLng] = useState(currentEvent.lng);
    const [description, setDescription] = useState(currentEvent.description)
    const [image_url, setImageUrl] = useState(currentEvent.bannerImage)
    //Error Handling Vars
    const [nameError, setNameError] = useState(false);
    const [imageError, setImageError] = useState(false);
    const [addressError, setAddressError] = useState(false);
    const [descriptionError, setDescriptionError] = useState(false);

    //Data to be sent to API 
    const formData = {
        "id": currentEvent.id,
        name,
        address,
        lat,
        lng,
        description,
        "banner_image_url": image_url,
        "owner_id": ownerId
    }
    //Inputs to be spread into child component
    const inputs = [
        {
            id: 1,
            name: "name",
            type: "text",
            errorMessage: "Name should be 3-30 characters",
            errorHandler: setNameError,
            errorStatus: nameError,
            label: "Update Name",
            required: true,
            pattern: "^[A-Za-z0-9 ]{3,30}$",
            onChange: setName,
            value: name,
        },
        {
            id: 2,
            name: "image_url",
            type: "text",
            placeholder: currentEvent.bannerImage,
            errorMessage: "Enter a URL containing https://",
            errorHandler: setImageError,
            errorStatus: imageError,
            label: "Update Image",
            required: true,
            pattern: "^https?://.*",
            onChange: setImageUrl,
            value: image_url,
        },
        {
            id: 3,
            name: "address",
            type: "google-places",
            placeholder: currentEvent.address,
            errorMessage: "Please select an address from the dropdown menu",
            errorHandler: setAddressError,
            errorStatus: addressError,
            label: "Update Event Address",
            required: true,
            pattern: "^[A-Za-z0-9#, ]{6,1000}$",
            onChange: setAddress,
            setLat: setLat,
            setLng: setLng,
            value: address,
        },
        {
            id: 4,
            name: "description",
            type: "textarea",
            placeholder: currentEvent.description,
            errorMessage: "Please enter a description for your event",
            errorHandler: setDescriptionError,
            errorStatus: descriptionError,
            label: "Update Description",
            required: false,
            pattern: "<.*?>",
            onChange: setDescription,
            value: description,
        }
    ]

    const handleSubmit = async (e) => {
        e.preventDefault()
        await dispatch(editEventById(formData)) 
        await dispatch(getAllEvents())
        await dispatch(getOneEvent(currentEvent.id))
        dispatch(closeModal())
    }

    //For closing the modal if user decides not to edit
    const handleCancel = () => {
        dispatch(closeModal())
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Header>Edit Event</Header>
                {inputs.map((input) => (
                    <FormInputs key={input.id} {...input} />
                ))}
                <ButtonWrapper>
                    <Button type="submit">Submit</Button>
                    <Button type="button" onClick={handleCancel} >Cancel</Button>
                </ButtonWrapper>
        </Form>
    )
}

export default EditEventForm;

const Form = styled.form`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    width: 100%;
    padding: 4vh 0vw 4vh 0vw;
    border-radius: 10px;
    background-image: linear-gradient(to bottom, #f6f6f6, #f8f8f8, #fafafa, #fdfdfd, #ffffff);
    box-shadow: 1px 1px 10px 2px #8f8f8fd6;
`

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10%;
`

const Button = styled.button`
    box-sizing: border-box;
    padding: 10px 40px 10px 40px;
    margin-bottom: 10px;
    border: none;
    font-size: 20px;
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
