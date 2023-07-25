import React, { useMemo, useCallback, useState, useRef } from "react";
import { GoogleMap, useJsApiLoader, useLoadScript, Marker } from "@react-google-maps/api";
import Spinner from "../Spinner/Spinner";

const Map = ({ apiKey, latLng }) => {
    const { isLoaded, loadError } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: apiKey,
    })
    
    const onLoad = useCallback(
        function onLoad (mapInstance) {
            console.log("...Google Map Loaded...");
        }
    )

    const center = useMemo(() => ({
        lat: latLng.lat,
        lng: latLng.lng,
    }), [latLng]);

    const styles = {
        width: "auto",
        height: "500px",
        borderRadius: 10,
        border: "solid 6px #fafafa",
        boxShadow: "2px 3px 10px 0px #36363621",
        marginRight: "0px",
    };
    
    const RenderMap = () => {
        return (<GoogleMap 
                    // options={options}
                    onload={onLoad} 
                    center={center} //Add center object
                    zoom={16}
                    mapContainerStyle={styles} //Add style object
                >
            {
                //Map Components:
                <Marker position={center} />
            }
        </GoogleMap>)
    }
    if (loadError) {
        return <div>Map cannot be loaded at this time</div>
    }

    return isLoaded ? RenderMap() : Spinner()
}

export default React.memo(Map)
