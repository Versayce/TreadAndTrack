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
    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);
    const [description, setDescription] = useState(currentEvent.description)
    const [image_url, setImageUrl] = useState(currentEvent.bannerImage)
    

    
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
                width: "90%",
                padding: "8px",
            }
        },
        {
            id: 2,
            name: "image_url",
            type: "text",
            placeholder: currentEvent.bannerImage,
            errorMessage: "Enter a URL containing https://",
            label: "Update Image",
            required: true,
            pattern: "^https?://.*",
            onChange: setImageUrl,
            value: image_url,
            style: {
                width: "90%",
                padding: "8px",
            }
        },
        {
            id: 3,
            name: "address",
            type: "google-places",
            placeholder: currentEvent.address,
            errorMessage: "Please select an address from the dropdown menu",
            label: "Update Event Address",
            required: true,
            pattern: "^[A-Za-z0-9#, ]{6,1000}$",
            onChange: setAddress,
            setLat: setLat,
            setLng: setLng,
            value: address,
            style: {
                width: "90%",
                padding: "8px",
            }
        },
        {
            id: 4,
            name: "description",
            type: "textarea",
            placeholder: currentEvent.description,
            errorMessage: "Max length 700",
            label: "Update Description",
            required: true,
            pattern: "^[A-Za-z0-9 ]{0,700}$",
            onChange: setDescription,
            value: description,
            style: {
                width: "90%",
                height: "200px",
                padding: "8px",
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
        //<FormWrapper>
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
        //</FormWrapper>
    )
}

const Form = styled.form`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    width: 100%;
    padding: 4vh 0vw 4vh 0vw;
    /* margin: 200px 0 200px 0px; */
    border-radius: 10px;
    background-image: linear-gradient(to bottom, #f6f6f6, #f8f8f8, #fafafa, #fdfdfd, #ffffff);
    box-shadow: 1px 1px 10px 2px #8f8f8fd6;
`

const SubmitButton = styled.button`
    box-sizing: border-box;
    padding: 10px 40px 10px 40px;
    /* width: 30%; */
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


// const Form = styled.form`
//     width: 80%;
//     display: grid;
//     grid-template-areas:
//     "header header header"
//     "nameInput addressInput cityInput"
//     "stateInput countryInput zipcodeInput"
//     "descInput descInput imageInput"
//     "descInput descInput submit"
//     ;
//     grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
//     grid-template-columns: 1fr 1fr 1fr;
//     align-content: center;
//     align-items: flex-start;
// `

// const SubmitButton = styled.button`
//     padding: 10px;
//     width: auto;
//     margin: 5% 8% 15% 8%;
//     border: none;
//     grid-area: submit;
//     border-radius: 8px;
//     background-color: #e7e7e7;
//     :hover {
//         background-color: #bd345d;
//         color: white;
//         cursor: pointer;
//     }
// `
    
// const Header = styled.h1`
//     grid-area: header;
//     color: #af2d54;
//     font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
//     font-weight: 100;
// `


export default EditEventForm
