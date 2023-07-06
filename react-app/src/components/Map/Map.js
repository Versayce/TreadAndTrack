import React, { useMemo, useCallback, useState, useRef } from "react";
import { GoogleMap, useJsApiLoader, useLoadScript, Marker } from "@react-google-maps/api";
import Spinner from "../Spinner/Spinner";

const options = {
    zoomControlOptions: {
        // position: google.maps.ControlPosition.RIGHT_CENTER
    }
}


const Map = ({ apiKey, latLng }) => {
    const { isLoaded, loadError } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: apiKey,
    })

    const center = useMemo(() => ({
        lat: latLng.lat,
        lng: latLng.lng,
    }), [latLng]);

    const styles = {
        width: "auto",
        height: "100%",
        borderRadius: 20,
        border: "solid 4px #7924321d",
        boxShadow: "2px 3px 10px 0px #36363621",
        marginRight: "0px",
    };
    
    const RenderMap = () => {
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

    return isLoaded ? RenderMap() : Spinner()
}

export default React.memo(Map)
