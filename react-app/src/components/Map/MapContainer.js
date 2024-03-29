import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getKey } from '../../store/map';
import Map from './Map';

const MapContainer = () => {
    const key = useSelector(state => state.mapsKey.key);
    const currentEventObj = useSelector(state => state.events.oneEvent)
    const event = Object.values(currentEventObj)[0]
    const latLng = {lat: event?.lat, lng: event?.lng};
    const dispatch = useDispatch();

    useEffect(() => {
        if (!key) {
            dispatch(getKey())
        }
    }, [dispatch, key]);

    if (!key) return null

    return (
        <Map apiKey={ key } latLng={ latLng }/>
    );
};

export default MapContainer;
