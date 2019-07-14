import {FETCH_FLIGHTS, SORT_FLIGHTS} from '../actions/actionTypes';

export default function (state = null, action) {
    console.log(action);
    switch (action.type){
        case FETCH_FLIGHTS:
            return action.payload || false;
        case SORT_FLIGHTS:
            return action.payload || false;
        default: 
            return state;
    }
}