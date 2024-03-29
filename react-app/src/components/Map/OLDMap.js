import React, { useState, useMemo, useRef, useCallback } from 'react'

import { GoogleMap, useLoadScript, Marker, MarkerClusterer, InfoWindow } from '@react-google-maps/api';
import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
    ComboboxOptionText,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from 'use-places-autocomplete'



const libraries = ['places']
const Maps = ({ apiKey }) => {
    const { isLoaded } = useLoadScript({
        id: 'google-map-script',
        googleMapsApiKey: apiKey,
        libraries
    });
    return (
        <>
            {isLoaded && (
                <Map />
            )}
        </>
    )
}




const containerStyle = {
    width: '400px',
    height: '400px',
}

const Map = () => {
    const [showMarkers, setShowMarkers] = useState(false)
    const [cityMarkers, setCityMarkers] = useState([])
    const [selectedMarker, setSelectedMarker] = useState(null)
    const mapRef = useRef()
    const center = useMemo(() => ({
        lat: 38.9072,
        lng: 77.0369,
    }), [])
    const onLoad = useCallback(map => (mapRef.current = map), [])
    const trackNewCenter = async () => {
        const lat = mapRef.current?.getCenter().lat()
        const lng = mapRef.current?.getCenter().lng()
        const zoom = mapRef.current?.getZoom()

        if (lat && lng) {
            const res = await fetch(`/api/map/${lat}/${lng}/${zoom}`)
            if (res.ok) {
                const data = await res.json()
                if (data.places.length > 0) {
                    setCityMarkers(data.places)
                }
            }
        }
    }

    return (
        <>
            <div>
                <PlacesAutocomplete setCityMarkers={setCityMarkers} setSelected={(position) => {
                    setShowMarkers(true)
                    mapRef.current?.panTo(position)
                }} />
            </div>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
                onLoad={onLoad}
                onCenterChanged={trackNewCenter}
            >
                {showMarkers && (
                    <MarkerClusterer>
                        {(clusterer) =>
                            cityMarkers?.map((mark, i) => (
                                <Marker
                                    label={{ fontWeight: 'bold', fontSize: '7px', text: `${mark.price.toFixed(2)}` }}
                                    key={mark.id}
                                    position={{ lat: parseFloat(mark.lat), lng: parseFloat(mark.lng) }}
                                    clusterer={clusterer}
                                    onClick={() => setSelectedMarker(mark)}
                                >
                                    {(selectedMarker && mark.id === selectedMarker.id) ? (
                                        <InfoWindow>
                                            <div>
                                                {selectedMarker.address}
                                            </div>
                                        </InfoWindow>
                                    ) : null}
                                </Marker>
                            ))}

                    </MarkerClusterer>
                )
                }

            </GoogleMap>
        </>
    )
}

const PlacesAutocomplete = ({ setSelected, setCityMarkers }) => {
    const {
        ready,
        value,
        setValue,
        suggestions: { status, data },
        clearSuggestions
    } = usePlacesAutocomplete()

    const handleSelect = async (address) => {

        const results = await getGeocode({ address })
        const { lat, lng } = await getLatLng(results[0])
        setSelected({ lat, lng })
        const zoom = 10

        const res = await fetch(`/api/map/${lat}/${lng}/${zoom}`)
        if (res.ok) {
            const data = await res.json()

            setCityMarkers(data.places)
        }
        setValue(address, false)
        clearSuggestions()

    }

    return (
        <>
            <Combobox onSelect={handleSelect}>
                <ComboboxInput
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    disabled={!ready}
                    placeholder='Search an address'
                />
                <ComboboxPopover>
                    <ComboboxList>
                        {status === 'OK' &&
                            data?.map(({ place_id, description }) => (
                                <ComboboxOption
                                    key={place_id}
                                    value={description}
                                />
                            ))}
                    </ComboboxList>
                </ComboboxPopover>
            </Combobox>
        </>
    )
}

export default React.memo(Maps)
