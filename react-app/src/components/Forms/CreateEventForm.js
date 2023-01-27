import React, { useState } from "react";
import styled from "styled-components"
import { useDispatch, useSelector } from "react-redux";
import { createEvent, createEventImage, getAllEvents } from "../../store/event";
import { closeModal } from "../../store/modal";



function CreateEventForm() {
    const dispatch = useDispatch();

    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [country, setCountry] = useState("")
    const [zipcode, setZip] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")

    const currentUser = useSelector(state => state.session.user)
    const owner_id = currentUser.id

    console.log('', '\n', '==========CREATE FORM COMPONENT==========', '\n', owner_id , '\n', '')

    // const validator = () => {

    // }

    // console.log('FORM ERRORS: ', formErrors)

    const handleSubmit = async (e) => {
        const imageUrl = image
        const formData = {name, address, city, state, country, zipcode, description, owner_id}
        console.log('form submission component', formData)
        e.preventDefault();
        await dispatch(createEvent(formData, imageUrl))
        dispatch(getAllEvents())
        dispatch(closeModal())
    } 

    return (
        <FormWrapper method="post" onSubmit={handleSubmit}>
            <label>Name</label>
                <input 
                onChange={(e) => setName(e.target.value)}
                value={name}
                />
            
            <label>Address</label>
                <input 
                onChange={(e) => setAddress(e.target.value)}
                value={address}
                />
                {/* {errors?.addressError} */}
            
            <label>City</label>
                <input 
                onChange={(e) => setCity(e.target.value)}
                value={city}
                />
            
            <label>State</label>
                <input 
                onChange={(e) => setState(e.target.value)}
                value={state}
                />
            
            <label>Country</label> 
                <input 
                onChange={(e) => setCountry(e.target.value)}
                value={country}
                />
            
            <label>Zip</label>
                <input 
                onChange={(e) => setZip(e.target.value)}
                value={zipcode}
                />
            
            <label>Description</label>
                <input 
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                />
            
            <label>Image Url</label>
                <input 
                onChange={(e) => setImage(e.target.value)}
                value={image}
                />

            <button>Submit</button>
        </FormWrapper>
    )
}

const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
`


export default CreateEventForm
