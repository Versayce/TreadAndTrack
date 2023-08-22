import React, { useState } from "react";
import styled from "styled-components";
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import TextEditor from "../TextEditor";

const isValid = (value, pattern, errorHandler) => {
    const regex = new RegExp(pattern);
    const result = regex.test(value);
    errorHandler?.(!result);
    return !result;
};

const hasError = (errorStatus) => {
    if (errorStatus === true) {
        return !true;
    }
};

const FormInputs = (props) => {
    const [focused, setFocused] = useState(false);
    const [blur, setBlur] = useState(false);
    const [apiError, setApiError] = useState(false);
    const [apiErrorMessage, setApiErrorMessage] = useState("")
    //Destructuring props passed from form components
    const {
        label, 
        errorMessage, 
        onChange, 
        errorHandler,
        errorStatus,
        setLat,
        setLng,
        required, 
        id, 
        value, 
        pattern, 
        name, 
        type, 
        placeholder,
        file } = props;
    
    const handleBlur = (e) => {
        setFocused(false);
        setBlur(true);
    };

    const handleFocus = (e) => {
        setFocused(true);
    };

    const handleChange = (e) => {
        onChange?.(e.target.value);
    };

    const handleFileChange = (e) => {
        if (e.target.files) {
            onChange?.(e.target.files[0]);
        }
        console.log("checking file information", e.target.files[0])
        handleFileUpload(e.target.files[0])
    };

    const handleFileUpload = async (fileData) => {
        console.log("handleFileUpload", fileData)
        if (fileData) {
            console.log("Uploading file...");
            
            const imageData = new FormData();
            imageData.append("file", fileData, fileData.name);
            console.log("Image Data", imageData.get("file"))
        
            try {
                // Handle uploading to AWS through api endpoint
                const response = await fetch("/api/events/banner_upload", {
                    method: "POST",
                    body: imageData
                });
                console.log("response data: ", response.files);

                const data = await response.json();
                console.log("File Uploaded!");
                console.log("Upload Data: ", data);
            } catch (error) {
                console.error("An error occured while uploading file: ", error);
            }
        }
        // onChange?.(fileData);
    }

    const handleEditorChange = (value) => {
        onChange?.(value);
    }
    
    const handlePlacesChange = (value) => {
        errorHandler?.(true);
        onChange?.(value);
        setApiError?.(false);
    };

    const onApiError = (status, clearSuggestions) => {
        setApiError(true)
        if(status === "ZERO_RESULTS") {
            setApiErrorMessage("No matching addresses found");
        };
        clearSuggestions();
    };

    const handleSelect = async (value) => {
        const results = await geocodeByAddress(value);
        const latLng = await getLatLng(results[0]);
        setLat?.(latLng.lat);
        setLng?.(latLng.lng);
        onChange?.(results[0].formatted_address);
        setApiError(false);
        errorHandler?.(false);
    };

    const renderInputs = (type) => {
        switch (type) {
            case "text": {
                return (
                    <input  
                        name={name}
                        type={type}
                        value={value}
                        placeholder={placeholder}
                        required={required}
                        pattern={pattern}
                        onChange={handleChange} 
                        onBlur={handleBlur} 
                        onFocus={handleFocus}
                        focused={focused.toString()} 
                    />
                );
            };

            case "textarea": {
                return ( 
                    <TextEditor 
                        name={name}
                        type={type}
                        value={value}
                        placeholder={placeholder}
                        required={required}
                        pattern={pattern}
                        onChange={handleEditorChange} 
                        onBlur={handleBlur} 
                        onFocus={handleFocus}
                        focused={focused.toString()} 
                    />
                );
            };

            case "file": {
                return ( 
                    <input
                        name={name}
                        type={type}
                        id={type}
                        value={value}
                        placeholder={placeholder}
                        required={required}
                        // pattern={pattern}
                        onChange={handleFileChange} 
                        onBlur={handleBlur} 
                        onFocus={handleFocus}
                        focused={focused.toString()} 
                    />
                );
            };

            case "google-places": {
                return (
                    <PlacesAutocomplete
                        id={id}
                        value={value}
                        onChange={handlePlacesChange}
                        onSelect={handleSelect}
                        onError={onApiError}
                        onBlur={handleBlur} 
                        onFocus={handleFocus}
                    >
                        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                            <GoogleInput>
                                <input {...getInputProps({ 
                                    name: name,
                                    type: "google-maps",
                                    placeholder: placeholder, 
                                    required: required,
                                    pattern: pattern,
                                    onBlur: handleBlur,
                                })} />
                                <ListWrapper>
                                    <SuggestionList>
                                        {apiError ? <ApiError>{apiErrorMessage}</ApiError> : null}
                                        {loading ? <Loader>Loading Results...</Loader> : null}
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
                
            default: {
                return null;
            };
        }
    };

    return (
        <FormInput > 
            <label htmlFor="file">{label}</label>
            {renderInputs(type)}
            {(hasError(errorStatus) && blur) || (isValid(value, pattern, errorHandler) && blur) ? <span>{errorMessage}</span> : <span></span>}
        </FormInput>
    );
};

export default FormInputs;

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
        box-sizing: border-box;
        width: 92%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
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

const FileUpload = styled.div`
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
    justify-content: center;
    list-style-type: none;
    z-index: 3;
    cursor: pointer;
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
    display: flex;
    font-size: 12px;
    width: 100%;
    padding: 8px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: #0000002b solid 1px;
    border-left: #0000002b solid 1px;
    border-right: #0000002b solid 1px;
    font-family: Arial, Helvetica, sans-serif;
    color: #008c9e;
    background-color: #ffffff;
    font-size: 12px;
`

const ApiError = styled.div`
    display: flex;
    font-size: 12px;
    width: 100%;
    padding: 8px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: #0000002b solid 1px;
    border-left: #0000002b solid 1px;
    border-right: #0000002b solid 1px;
    font-family: Arial, Helvetica, sans-serif;
    color: #bd345d;
    background-color: #ffffff;
    font-size: 12px;
    border-radius: 0 0 10px 10px;
`
