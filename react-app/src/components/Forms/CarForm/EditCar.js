import FormInputs from "./FormInput"
import styled from "styled-components"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { getAllCars, editCarById, getOneCar } from "../../../store/car"
import { useSelector } from "react-redux"
import { closeModal } from "../../../store/modal"

const EditCarForm = () => {
    const dispatch = useDispatch()
    const currentCarObj = useSelector(state => state.cars.oneCar)
    const currentCar = Object.values(currentCarObj)[0]
    const currentUser = useSelector(state => state.session.user)
    const ownerId = currentUser.id
    const carId = currentCar?.id

    console.log("CURRENT CAR OBJ WITHIN EDIT CAR FORM", currentCar)

    // const [errors, setErrors] = useState([])
    const [name, setName] = useState("")
    const [previewImage, setPreviewImage] = useState("")
    const [state, setState] = useState("")
    const [year, setYear] = useState("")
    const [make, setMake] = useState("")
    const [model, setModel] = useState("")
    const [description, setDescription] = useState("")
    
    const formData = {
        id: carId,
        "owner_id": ownerId,
        name,
        "preview_image": previewImage,
        state,
        year,
        make,
        model,
        description,
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
            placeholder: currentCar?.name,
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
            name: "previewImage",
            type: "text",
            placeholder: "Image",
            errorMessage: "Enter a URL containing https://",
            label: "Image",
            required: true,
            pattern: "^https?://.*",
            onChange: setPreviewImage,
            value: previewImage,
            style: {
                gridArea: "imageInput",
                widthPercent: styles.width
            }
        },
        {
            id: 3,
            name: "state",
            type: "text",
            placeholder: currentCar?.state,
            errorMessage: "State should be 2-20 characters",
            label: "State",
            required: true,
            pattern: "^[A-Za-z0-9 ]{2,20}$",
            onChange: setState,
            value: state,
            style: {
                gridArea: "stateInput",
                widthPercent: styles.width
            }
        },
        {
            id: 4,
            name: "year",
            type: "text",
            placeholder: currentCar?.year,
            errorMessage: "Year should be four numbers",
            label: "Year",
            required: true,
            pattern: "^[0-9]{4}$",
            onChange: setYear,
            value: year,
            style: {
                gridArea: "yearInput",
                widthPercent: styles.width
            }
        },
        {
            id: 5,
            name: "make",
            type: "text",
            placeholder: currentCar?.make,
            errorMessage: "Make should be 2-20 characters",
            label: "Make",
            required: true,
            pattern: "^[A-Za-z0-9 ]{2,20}$",
            onChange: setMake,
            value: make,
            style: {
                gridArea: "makeInput",
                widthPercent: styles.width
            }
        },
        {
            id: 6,
            name: "model",
            type: "text",
            placeholder: currentCar?.model,
            errorMessage: "Model should be 2-20 characters",
            label: "Model",
            required: true,
            pattern: "^[A-Za-z0-9 ]{2,20}$",
            onChange: setModel,
            value: model,
            style: {
                gridArea: "modelInput",
                widthPercent: styles.width
            }
        },
        {
            id: 7,
            name: "description",
            type: "textarea",
            placeholder: currentCar?.description,
            errorMessage: "Max length 700",
            label: "Description",
            required: true,
            pattern: "^[A-Za-z0-9.,! ]{0,700}$",
            onChange: setDescription,
            value: description,
            style: {
                gridArea: "descInput",
                widthPercent: styles.widthDesc,
                width: "100%",
                height: "100px"
            }
        },
    ]


    const handleSubmit = async (e) => {
        e.preventDefault()
        await dispatch(editCarById(formData)) 
        await dispatch(getAllCars())
        await dispatch(getOneCar(currentCar.id))
        dispatch(closeModal())
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Header>Edit Car</Header>
                {inputs.map((input) => (
                    <FormInputs key={input.id} {...input} />
                ))}
            <SubmitButton type="submit">Submit</SubmitButton>
        </Form>
    )
}

const Form = styled.form`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background-image: linear-gradient(to bottom, #f6f6f6, #f8f8f8, #fafafa, #fdfdfd, #ffffff);
    box-shadow: 1px 1px 10px 2px #8f8f8fd6;
`

const SubmitButton = styled.button`
    padding: 10px;
    width: 60%;
    margin: 5px 0px;
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


export default EditCarForm
