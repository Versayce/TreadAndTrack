import styled from "styled-components"
import { useState } from "react"
import { useSelector } from "react-redux";
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

const isValid = (value, pattern) => {
    const regex = new RegExp(pattern)
    const result = regex.test(value)
    return result
}

const FormInputs = (props) => {
    const key = useSelector(state => state.mapsKey.key)
    const [focused, setFocused] = useState(false)
    const {
        label, 
        errorMessage, 
        onChange, 
        required, 
        id, 
        style, 
        value, 
        pattern, 
        name, 
        type, 
        // row, 
        // col, 
        placeholder } = props
    
    const handleFocus = (e) => {
        setFocused(true)
        console.log("FOCUS: ", focused)
    }

    const handleChange = (e) => {
        console.log("handlechange value: ", e.target.value)
        onChange?.(e.target.value)
    }

    const handlePlacesChange = (value) => {
        onChange?.(value)
        console.log("handlePlacesChange value: ", value)
    }

    const handleSelect = async (value) => {
        const results = await geocodeByAddress(value);
        const latLng = await getLatLng(results[0]);
        console.log("Initial Input: ", value)
        console.log("Geocoding Results: ", results[0])
        console.log("LAT LNG: ", latLng.lat, latLng.lng)
        onChange?.(value)
    }

    const renderInputs = (type) => {
        //TODO edit prop assignment 
        switch (type) {
            case "text":
                {
                    return (
                        <input  
                            name={name}
                            type={type}
                            value={value}
                            placeholder={placeholder}
                            required={required}
                            pattern={pattern}
                            onChange={handleChange} 
                            onBlur={handleFocus} 
                            focused={focused.toString()} 
                        />
                    )
                }

            case "textarea":
                {
                    return (
                        <textarea 
                            name={name}
                            type={type}
                            placeholder={placeholder}
                            required={required}
                            pattern={pattern}
                            onChange={handleChange} 
                            onBlur={handleFocus} 
                            focused={focused.toString()} 
                            value={value}
                        />
                    )
                }
            //TODO add google places input and remove old address field(s) 
            case "google-places":
                {
                    return (
                        <PlacesAutocomplete
                            id={id}
                            value={value}
                            onChange={handlePlacesChange}
                            onSelect={handleSelect}
                        >
                            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                                <div>
                                    <input {...getInputProps({ 
                                        name: name,
                                        type: "google-maps",
                                        placeholder: placeholder, 
                                        required: required,
                                        pattern: pattern,
                                        onBlur: handleFocus,
                                    })} />
                                    <div>
                                        {loading ? <div>Loading...</div> : null}

                                        {suggestions.map((suggestion) => {
                                        const style = {
                                            backgroundColor: suggestion.active ? '#41b6e6' : '#fff'
                                        };

                                        return (
                                            <div key={suggestion.index} {...getSuggestionItemProps(suggestion, { style })}>
                                            {suggestion.description}
                                            </div>
                                        );
                                        })}
                                    </div>
                                </div>
                            )}
                        </PlacesAutocomplete>
                    )
                }
                
            default:
                {
                    return null
                }

        }
    };


    return (
        <FormInput style={style}> 
            <label>{label}</label>
            {renderInputs(type)}
            {!isValid(value, pattern) && focused ? <span>{errorMessage}</span> : <span></span>}
        </FormInput>
    )
}

export default FormInputs

const FormInput = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    grid-area: ${props => props.style.gridArea};
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    align-content: center;
    width: 100%;
    input {
        padding: 8px;
        margin: 5px 0px;
        width: ${props => props.style.widthPercent};
        border-radius: 4px;
        border: 1px solid grey;
    }
    label {
        font-size: 12px;
        color: grey;
    }
    span {
        min-height: 16px;
        font-size: 12px;
        padding: 3px;
        margin-bottom: 10px;
        color: #af2d54;
    }
    textarea {
        width: ${props => props.style.width};
        height: ${props => props.style.height};
        margin-left: 30px;
        resize: none;
    }
`
