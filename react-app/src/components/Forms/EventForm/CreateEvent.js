import FormInputs from "./FormInput"
import styled from "styled-components"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { createEvent, getAllEvents } from "../../../store/event"
import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import NavBar from "../../Home/NavBar"
import Footer from "../../Home/Footer"

//TODO remove unused getters/setters 

const EventForm = () => {
    const history = useHistory();
    const currentUser = useSelector(state => state.session.user);
    const ownerId = currentUser.id;

    const dispatch = useDispatch();
    // const [errors, setErrors] = useState([]);
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [lat, setLat] = useState("");
    const [lng, setLng] = useState("");
    // const [city, setCity] = useState("");
    // const [state, setState] = useState("");
    // const [country, setCountry] = useState("");
    // const [zipcode, setZipcode] = useState("");
    const [description, setDescription] = useState("");
    const [image_url, setImageUrl] = useState("");

    const formData = {
        name,
        address,
        lat,
        lng,
        // city,
        // state,
        // country,
        // zipcode,
        description,
        "banner_image_url": image_url,
        "owner_id": ownerId,
    };

    const inputs = [
        {
            id: 1,
            name: "name",
            type: "text",
            placeholder: "Name",
            errorMessage: "Name should be 3-30 characters",
            label: "Name",
            required: true,
            pattern: "^[A-Za-z0-9 ]{3,20}$",
            onChange: setName,
            value: name,
            style: {
                width: "100%",
                padding: "8px",
            }
        },
        {
            id: 2,
            name: "image_url",
            type: "text",
            placeholder: "Image",
            errorMessage: "Enter a URL containing https://",
            label: "Image",
            required: true,
            pattern: "^https?://.*",
            onChange: setImageUrl,
            value: image_url,
            style: {
                width: "100%",
                padding: "8px",
            }
        },
        {
            id: 3,
            name: "address",
            type: "google-places",
            placeholder: "Enter Address",
            errorMessage: "Address should 6-40 characters long",
            label: "Address",
            required: true,
            pattern: "^[A-Za-z0-9# ]{6,40}$",
            onChange: setAddress,
            setLat: setLat,
            setLng: setLng,
            value: address,
            style: {
                width: "100%",
                padding: "8px",
            }
        },
        {
            id: 4,
            name: "description",
            type: "textarea",
            placeholder: "Description",
            errorMessage: "Max length 700",
            label: "Description",
            required: true,
            pattern: "^[A-Za-z0-9.,! ]{0,700}$",
            onChange: setDescription,
            value: description,
            style: {
                width: "100%",
                height: "200px",
                padding: "8px",
            }
        }
    ]

    const handleSubmit = async (e) => {
        e.preventDefault()
        await dispatch(createEvent(formData)) 
        await dispatch(getAllEvents())
        history.push("/")
    }

    return (
        <FormWrapper>
            <NavBar />
            <Form onSubmit={handleSubmit}>
                <Header>Create Event</Header>
                    {inputs.map((input) => (
                        <FormInputs key={`${input.id}frm-ipt`} {...input} />
                    ))}
                <SubmitButton type="submit">Submit</SubmitButton>
            </Form>
            <Footer />
        </FormWrapper>
    )
}

const FormWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #adadad;
    background-image: url("/images/wrxLake.jpg");
    background-position: top;
`

const Form = styled.form`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: flex-start;
    width: 50%;
    padding: 4vh 3vw 4vh 3vw;
    margin: 200px 0 200px 0px;
    border-radius: 10px;
    background-image: linear-gradient(to bottom, #f6f6f6, #f8f8f8, #fafafa, #fdfdfd, #ffffff);
    box-shadow: 1px 1px 10px 2px #8f8f8fd6;
`

const SubmitButton = styled.button`
    padding: 10px;
    width: auto;
    border: none;
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


export default EventForm
