import { createStore, combineReducers,compose } from 'redux';

import placesReducer from './reducers/places';

const rootReducer = combineReducers({
    places: placesReducer
});

const componseEnhancers = compose;
if(__DEV__){
    componseEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose;
}

const configureStore = () => {
    return createStore(rootReducer,componseEnhancers());
};

export default configureStore;