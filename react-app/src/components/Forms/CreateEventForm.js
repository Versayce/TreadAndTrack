import React, { useState, useEffect } from "react";
import styled from "styled-components"
import { useDispatch, useSelector } from "react-redux";
import { createEvent, getAllEvents } from "../../store/event";
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

    const formData = {
        name, 
        address, 
        city, 
        state, 
        country, 
        zipcode, 
        description, 
        owner_id, 
        "banner_image_url": image
    } //Data being submitted through the form.

    const [nameError, setNameError] = useState()
    const [addressError, setAddressError] = useState()
    const [cityError, setCityError] = useState()
    const [stateError, setStateError] = useState()
    const [countryError, setCountryError] = useState()
    const [zipError, setZipError] = useState()
    const [descError, setDescError] = useState()
    const [imageError, setImageError] = useState()
    const [errors, setErrors] = useState([])
    
    const nameErr = "Name must be longer than 3 characters"
    useEffect(() => {

        const errorHandler = () => {
            
            if(name.length < 4) {
                setNameError(nameErr)
                setErrors(nameError)
            }else if (name.length >= 4) {
                setNameError()
                setErrors([])
            }
            
            if(address.length < 6) {
                setAddressError(nameErr)
                setErrors(addressError)
            }else if (address.length >= 6) {
                setAddressError()
                setErrors([])
            }else setErrors([])
        }
        errorHandler(formData)

    }, [name, address, city, state, country, zipcode, description, image])
    
    console.log('', '\n', '==========CREATE FORM COMPONENT==========', '\n', formData , '\n', '')

    

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('form submission component', formData)
        await dispatch(createEvent(formData)) 
        await dispatch(getAllEvents())
        dispatch(closeModal())
    } 

    return (
        <FormWrapper method="post" onSubmit={() => handleSubmit}>
            <label>Name</label>
                <input 
                onChange={(e) => setName(e.target.value)}
                value={name}
                />
                {name.length > 0 && nameError ? <InputError>{nameError}</InputError> : <EmptyError></EmptyError>}
            
            <label>Address</label>
                <input 
                onChange={(e) => setAddress(e.target.value)}
                value={address}
                />
                {address.length > 0 && addressError ? <InputError>{addressError}</InputError> : <EmptyError></EmptyError>}
            
            <label>City</label>
                <input 
                onChange={(e) => setCity(e.target.value)}
                value={city}
                />
                {city.length > 0 && cityError ? <InputError>{cityError}</InputError> : <EmptyError></EmptyError>}
            
            <label>State</label>
                <input 
                onChange={(e) => setState(e.target.value)}
                value={state}
                />
                {state.length > 0 && stateError ? <InputError>{stateError}</InputError> : <EmptyError></EmptyError>}
            
            <label>Country</label> 
                <input 
                onChange={(e) => setCountry(e.target.value)}
                value={country}
                />
                {country.length > 0 && countryError ? <InputError>{countryError}</InputError> : <EmptyError></EmptyError>}
            
            <label>Zip</label>
                <input 
                onChange={(e) => setZip(e.target.value)}
                value={zipcode}
                />
                {zipcode.length > 0 && zipError ? <InputError>{zipError}</InputError> : <EmptyError></EmptyError>}
            
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
                {image.length > 0 && imageError ? <InputError>{imageError}</InputError> : <EmptyError></EmptyError>}

            <button type="submit">Submit</button>
        </FormWrapper>
    )
}

const InputError = styled.div`
    /* border: 2px solid red; */
    height: 10px;
    font-size: 10pt;
`
const EmptyError = styled.div`
    height: 10px;
`

const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
`


export default CreateEventForm
