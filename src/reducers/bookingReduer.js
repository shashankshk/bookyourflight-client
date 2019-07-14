import { BOOK_FLIGHT} from '../actions/actionTypes';

export default function (state = null, action) {
    console.log(action);
    switch (action.type){
        case BOOK_FLIGHT:
            return action.payload
        default: 
            return state;
    }
}