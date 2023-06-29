import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getKey } from '../../store/map';
import Map from './Map';

const MapContainer = () => {
    const key = useSelector(state => state.mapsKey.key)
    console.log(key)
    const dispatch = useDispatch()
    useEffect(() => {
        if (!key) {
            dispatch(getKey())
        }
    }, [dispatch, key])

    if (!key) return null

    return (
        <Map apiKey={key} />
    )
}

export default MapContainer;
