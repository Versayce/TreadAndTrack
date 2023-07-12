import styled from "styled-components";
import { useState } from "react";
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

const isValid = (value, pattern, setInputError) => {
    const regex = new RegExp(pattern);
    const result = regex.test(value);
    setInputError?.(result);
    console.log(`Input Error for pattern ${pattern} set as:` , result)
    return !result;
};

const hasError = (addressError, inputError) => {
    if (addressError === true || inputError === true) {
        return true;
    }
};

const FormInputs = (props) => {
    const [focused, setFocused] = useState(false);
    const [apiError, setApiError] = useState(null);
    const {
        label, 
        errorMessage, 
        onChange, 
        addressError,
        setAddressError,
        inputError,
        setInputError,
        setLat,
        setLng,
        required, 
        id, 
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

    const onApiError = (status, clearSuggestions) => {
        setApiError("No matching addresses found")
        console.log('Google Maps API returned error with status: ', status)
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
                            onError={onApiError}
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
                                        // style: style,
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
                                                    <SuggestionListElement key={suggestion.index} suggestions={suggestions} error={apiError} {...getSuggestionItemProps(suggestion, { style })}>
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
        <FormInput > 
            <Test>
                <label>{label}</label>
            </Test>
            {renderInputs(type)}
            {(isValid(value, pattern, setInputError) || hasError(addressError, inputError)) && focused ? <span>{errorMessage}</span> : <span></span>}
        </FormInput>
    )
}

export default FormInputs

const Test = styled.div`
    box-sizing: border-box;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

const FormInput = styled.div`
    width: 95%;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    label {
        font-size: 12px;
        color: grey;
        margin-bottom: 3px;
    }
    input {
        padding: 8px;
        width: 90%;
        border-radius: 6px;
        border: 1px solid grey;
    }    
    input::placeholder {
        opacity: 30%;
    }
    textarea{
        width: 90%;
        height: 200px;
        padding: 8px;
    }    
    textarea::placeholder {
        opacity: 30%;
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
    align-items: center;
    flex-direction: column;
    width: 100%;
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
