import {SIGNIN_USER, LOGIN_USER, LOGOUT_USER, BOOK_FLIGHT} from '../actions/actionTypes';

export default function (state = null, action) {
    console.log(action);
    switch (action.type){
        case SIGNIN_USER:
            return action.payload || false;
        case LOGIN_USER:
            return action.payload || false;
        case LOGOUT_USER:
            return ''
        case BOOK_FLIGHT:
            return action.payload
        default: 
            return state;
    }
}