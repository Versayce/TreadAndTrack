import styled from "styled-components";
import { useState } from "react";
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

const isValid = (value, pattern, addressError) => {
    if (addressError === true) {
        return false;
    }
    else {
        const regex = new RegExp(pattern);
        const result = regex.test(value);
        return result;
    }
};

const FormInputs = (props) => {
    const [focused, setFocused] = useState(false);
    const [addressError, setAddressError] = useState(false);
    const [apiError, setApiError] = useState(null);
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
        placeholder } = props;
    
    const handleFocus = (e) => {
        setFocused(true);
        // console.log("FOCUS: ", focused)
    };

    const handleChange = (e) => {
        onChange?.(e.target.value);
    };

    const handlePlacesChange = (value) => {
        setAddressError(true);
        onChange?.(value);
    };

    const onError = (status, clearSuggestions) => {
        setApiError("No matching addresses found")
        console.log('Google Maps API returned error with status: ', status, apiError)
        clearSuggestions();
    };

    const handleSelect = async (value) => {
        const results = await geocodeByAddress(value);
        const latLng = await getLatLng(results[0]);
        console.log("Geocoding Results: ", results[0]);
        console.log("LAT LNG: ", latLng.lat, latLng.lng);
        setLat?.(latLng.lat);
        setLng?.(latLng.lng);
        onChange?.(results[0].formatted_address);
        setAddressError(false);
    };

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
                    );
                };

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
                    );
                };

            case "google-places":
                {
                    return (
                        <PlacesAutocomplete
                            id={id}
                            value={value}
                            onChange={handlePlacesChange}
                            onSelect={handleSelect}
                            onError={onError}
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
                                    <ListWrapper>
                                        <SuggestionList>
                                            {loading ? <Loader>Loading...</Loader> : null}
                                            {suggestions.map((suggestion) => {
                                                const style = {
                                                    backgroundColor: suggestion.active ? '#bd345d' : '#fff',
                                                    color: suggestion.active ? '#ffffff' : '#000000',
                                                };
                                                return (
                                                    <SuggestionListElement key={suggestion.index} suggestions={suggestions} {...getSuggestionItemProps(suggestion, { style })}>
                                                        {suggestion.description}
                                                    </SuggestionListElement>
                                                );
                                            })}
                                        </SuggestionList>
                                    </ListWrapper>
                                </GoogleInput>
                            )}
                        </PlacesAutocomplete>
                    );
                };
                
            default:
                {
                    return null;
                };

        }
    };


    return (
        <FormInput style={style}> 
            <label>{label}</label>
            {renderInputs(type)}
            {!isValid(value, pattern, addressError) && focused ? <span>{errorMessage}</span> : <span></span>}
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

const ListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    width: 100%;
`

const SuggestionList = styled.ul`
    width: 80%;
    position: absolute;
    list-style-type: none;
`

const SuggestionListElement = styled.li`
    position: relative;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 12px;
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

const Loader = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    color: #ffffff;
    font-size: 12px;
`
