const ADDRESS_TO_COORDS = "address/convert"


export const getCoords = (coords) => {
    return {
        type: ADDRESS_TO_COORDS,
        coords
    };
};


export const getLocationCoords = (address) => async (dispatch) => {

    console.log('ADDRESS DATA IN THUNK',address)
    const zipcode = address.zipcode
    const streetName = address.address
    const city = address.city
    const state = address.state
    const key = 'AIzaSyBkhhJI1Ut2H-dWP6W8gKw-KGcTbxRLYlE'
    // %${streetIdentifier}
    const res = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address.zipcode}%${address.streetName}%${address.city}%${address.state}&key=${key}`);
    if(res.ok) {
        const data = await res.json();
        console.log("INSIDE GEOCODING THUNK:", data)
        await dispatch(getCoords(data))
    };
};



const initialState = { currentEventLocation: {} }
const locationReducer = (state = initialState, action) => {
    switch(action.type) {

        case ADDRESS_TO_COORDS: 
            {
                const newState = { currentEventLocation: {...state.currentEventLocation}}
                newState.currentEventLocation = {...action.coords}
                return newState;
            }

        default:
            return state;

    };
};


export default locationReducer
