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
    const [focused, setFocused] = useState(false)
    const {
        label, 
        errorMessage, 
        onChange, 
        setLat,
        setLng,
        required, 
        id, 
        style, 
        value, 
        pattern, 
        name, 
        type, 
        placeholder } = props
    
    const handleFocus = (e) => {
        setFocused(true)
        // console.log("FOCUS: ", focused)
    }

    const handleChange = (e) => {
        onChange?.(e.target.value)
    }

    const handlePlacesChange = (value) => {
        onChange?.(value)
    }

    const handleSelect = async (value) => {
        const results = await geocodeByAddress(value);
        const latLng = await getLatLng(results[0]);
        // console.log("Initial Input: ", value)
        console.log("Geocoding Results: ", results[0])
        console.log("LAT LNG: ", latLng.lat, latLng.lng)
        setLat?.(latLng.lat)
        setLng?.(latLng.lng)
        onChange?.(results[0].formatted_address)
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
                            style={style}
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
                            style={style}
                        />
                    )
                }

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
                                <GoogleInput>
                                    <input {...getInputProps({ 
                                        name: name,
                                        type: "google-maps",
                                        placeholder: placeholder, 
                                        required: required,
                                        pattern: pattern,
                                        onBlur: handleFocus,
                                        style: style,
                                    })} />
                                    <SuggestionWrapper>
                                        {loading ? <Loader>Loading...</Loader> : null}
                                        {suggestions.map((suggestion) => {
                                            const style = {
                                                backgroundColor: suggestion.active ? '#bd345d' : '#fff',
                                                color: suggestion.active ? '#ffffff' : '#000000',
                                            };
                                            return (
                                                <SuggestionOutput key={suggestion.index} suggestions={suggestions} {...getSuggestionItemProps(suggestion, { style })}>
                                                    {suggestion.description}
                                                </SuggestionOutput>
                                            );
                                        })}
                                    </SuggestionWrapper>
                                </GoogleInput>
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
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    label {
        font-size: 12px;
        color: grey;
    }
    input {
        padding: ${props => props.style.padding};
        width: ${props => props.style.width};
        border-radius: 6px;
        border: 1px solid grey;
    }
    textarea {
        width: ${props => props.style.width};
        padding: ${props => props.style.padding};
        height: ${props => props.style.height};
        resize: none;
    }
    span {
        min-height: 16px;
        font-size: 12px;
        padding: 3px;
        margin-bottom: 10px;
        color: #af2d54;
    }
`

const GoogleInput = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    border-radius: 10px;
`
const SuggestionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-content: center;
    width: 80%;
`

const Loader = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    color: #ffffff;
    font-size: 12px;
`

const SuggestionOutput = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 12px;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 8px;
    border-bottom: #0000002b solid 1px;
    border-left: #0000002b solid 1px;
    border-right: #0000002b solid 1px;
    box-shadow: 3px 3px 10px #5858582b;
    :last-child {
        border-radius: 0 0 10px 10px;
    }
`
