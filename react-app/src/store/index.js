import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import eventReducer from './event';
import messageReducer from './message';
import modalReducer from './modal';
import carReducer from './car';
import session from './session'

const rootReducer = combineReducers({
    session,
    events: eventReducer,
    cars: carReducer,
    modal: modalReducer,
    messages: messageReducer
});


let enhancer;

if (process.env.NODE_ENV === 'production') {
    enhancer = applyMiddleware(thunk);
} else {
    const logger = require('redux-logger').default;
    const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
