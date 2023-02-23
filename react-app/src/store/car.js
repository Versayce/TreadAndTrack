// Defining action type variables
const LOAD_ALL_CARS = 'cars/LOAD_ALL'
const LOAD_ONE_CAR = 'cars/LOAD_ONE'
const ADD_CAR = 'cars/ADD'
// const ADD_IMAGE = 'cars/ADDIMAGE'
const EDIT_CAR = 'cars/EDIT'
const DELETE_CAR = 'cars/DELETE'
const CLEAR_ONE = 'cars/CLEAR_ONE'

// TODO add create and delete thunks/actions


//------------------------------   ACTIONS   ------------------------------//
export const loadAllCars = (cars) => {
    return {
        type: LOAD_ALL_CARS,
        cars
    };
};

export const loadOneCar = (car) => {
    return {
        type: LOAD_ONE_CAR,
        car
    };
};

export const addCar = (car) => {
    return {
        type: ADD_CAR,
        car
    };
};

export const editCar = (car) => {
    return {
        type: EDIT_CAR,
        car
    };
};

export const removeCar = (carId) => {
    return {
        type: DELETE_CAR,
        carId
    };
};

export const clearOneCar = () => {
    return {
        type: CLEAR_ONE
    };
};


//------------------------------   THUNKS   ------------------------------//
export const getAllCars = () => async (dispatch) => {
    const res = await fetch('/api/cars', {
        headers: { "content-Type": "application/json" }
    });
    
    if(res.ok) {
        const data = await res.json();
        await dispatch(loadAllCars(data.cars))
    };
};

export const getOneCar = (carId) => async (dispatch) => {
    const res = await fetch(`/api/cars/${carId}`, {
        headers: { "content-type": "application/json" }
    });
    
    if(res.ok) {
        const data = await res.json()
        await dispatch(loadOneCar(data))
    };
};

export const createCar = (car) => async (dispatch) => {
    const res = await fetch('/api/cars', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(car)
    });
    
    if(res.ok) {
        const data = await res.json();
        dispatch(addCar(data))
    };
};

// export const createCarImage = (image_url, name, car_id) => async (dispatch) => {
//     const imageData = {name, image_url, car_id}
//     const res = await fetch('/api/cars/images', {
//         method: 'POST',
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify(imageData)
//     });
    
//     if(res.ok) {
//         const data = await res.json();
//     };
// }


export const editCarById = (car) => async (dispatch) => {
    const res = await fetch(`/api/cars/${car.id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(car)
    });

    if(res.ok) {
        const data = await res.json();
        dispatch(editCar(data))
    };
};

export const deleteEvent = (carId) => async (dispatch) => {
    const res = await fetch(`/api/cars/${carId}`, {
        method: 'DELETE'
    })

    if(res.ok) {
        dispatch(removeCar(carId))
    };
};


//------------------------------   REDUCER   ------------------------------//
const initialState = { allCars: {}, oneCar: {} }
const carReducer = (state = initialState, action) => {
    switch(action.type) {

        case LOAD_ALL_CARS:
            {
                const newState = { allCars: {...state.allCars}, oneCar: {...state.oneCar}}
                action.cars.forEach(car => {
                    newState.allCars[car.id] = car;
                });
                return newState;
            };
            
        case LOAD_ONE_CAR:
            {
                const newState = { allCars: {...state.allCars}, oneCar: {}}
                newState.oneCar[action.car.id] = action.car
                return newState; 
            };

        case ADD_CAR:
            {
                const newState = { allCars: {...state.allCars}, oneCar: {}}
                newState.allCars[action.car.id] = action.car
                newState.oneCar[action.car.id] = action.car
                return newState;
            };

        case EDIT_CAR:
            {
                const newState = { allCars: {...state.allCars}, oneCar: {}}
                newState.allCars[action.car.id] = action.car
                newState.oneCar[action.car.id] = action.car
                return newState;
            };

        case DELETE_CAR:
            {
                const newState = { allCars: {...state.allCars}, oneCar: {...state.oneCar}}
                delete newState.allCars[action.eventId]
                delete newState.oneCar[action.eventId]
                return newState;
            };

        case CLEAR_ONE:
            {
                const newState = { allCars: {...state.allCars}, oneCar: {}}
                return newState
            };
        
        default:
            return state;

    };
};

export default carReducer
