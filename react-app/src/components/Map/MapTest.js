import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const options = {
    zoomControlOptions: {
        position: google.maps.ControlPosition.RIGHT_CENTER,
        
    }
}


function TestMap({ apiKey }) {
    const { isLoaded, loadError } = useJsApiLoader({
        googleMapsApiKey: apiKey,
    })

    const center = {
        lat: 40.1353,
        lng: 70.0237,
    };

    const styles = {
        width: "500px",
        height: "400px",
    };
    
    const renderMap = () => {
        const onLoad = React.useCallback(
            function onLoad (mapInstance) {

            }
        )
        return <GoogleMap 
                    options={options}
                    onload={onLoad} 
                    center={center} //Add center object
                    zoom={10}
                    mapContainerStyle={styles} //Add style object
                >
            {
                //Map Components 
                <Marker 
                    position={center}
                />

            }
        </GoogleMap>
}
    if (loadError) {
        return <div>Map cannot be loaded at this time</div>
    }

    return isLoaded ? renderMap() : <Spinner />
}

export default React.memo(TestMap)
