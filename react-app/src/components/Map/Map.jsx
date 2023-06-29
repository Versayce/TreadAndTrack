import React, { useMemo, useCallback, useState, useRef } from "react";
import { GoogleMap, useJsApiLoader, useLoadScript, Marker } from "@react-google-maps/api";

const options = {
    zoomControlOptions: {
        // position: google.maps.ControlPosition.RIGHT_CENTER
    }
}


const Map = ({ apiKey }) => {
    const { isLoaded, loadError } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: apiKey,
    })

    const center = useMemo(() => ({
        lat: 33.4949,
        lng: -111.9260,
    }), []);

    const styles = {
        width: "800px",
        height: "500px",
        borderRadius: 20,
        border: "solid 4px #7924321d",
        boxShadow: "2px 3px 10px 0px #36363621",
    };
    
    const renderMap = () => {
        // const onLoad = useCallback(
        //     function onLoad (mapInstance) {
        //         console.log("...Google Map Loaded...");
        //     }
        // )
        return <GoogleMap 
                    options={options}
                    // onload={onLoad} 
                    center={center} //Add center object
                    zoom={16}
                    mapContainerStyle={styles} //Add style object
                >
            {
                //Map Components:
                <Marker position={center} />
            }
        </GoogleMap>
}
    if (loadError) {
        return <div>Map cannot be loaded at this time</div>
    }

    return isLoaded ? renderMap() : <div>Loading Map...</div>
}

export default React.memo(Map)