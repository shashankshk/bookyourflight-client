import {combineReducers} from 'redux';
import userReducer from './userReducer';
import flightsReducer from './flightsReducer';
import bookingReducer from './bookingReduer';

export default combineReducers({
    user: userReducer,
    flights: flightsReducer,
    booking: bookingReducer
})