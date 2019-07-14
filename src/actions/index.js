import axios from 'axios';
import {SIGNIN_USER, LOGIN_USER, LOGOUT_USER, FETCH_FLIGHTS, SORT_FLIGHTS, BOOK_FLIGHT} from './actionTypes'; 

export const signInUser = (data) => {
    return async (dispatch, getState) => {
        const res = await axios.post('http://localhost:5000/signin', data);
        dispatch(
            {
                type: SIGNIN_USER,
                payload: res.data
            }
        )
        return res.msg;
    }
}

export const loginUser = (data) => {
    return async (dispatch, getState) => {
        const res = await axios.post('http://localhost:5000/login', data);
        dispatch(
            {
                type: LOGIN_USER,
                payload: res.data
            }
        )
    }
}

export const logOut = () =>   {
    return (
        {
            type: LOGOUT_USER,
            payload: '' 
        }
    )         
}

export const fetchFlights = data => {
    return async (dispatch, getState) => {
        const res = await axios.post('http://localhost:5000/api/search/flights', data);
        dispatch(
            {
                type: FETCH_FLIGHTS,
                payload: res.data
            }
        )
        return res.msg;
    }
}

export const sortFlights = data => {
    return (
        {
            type: SORT_FLIGHTS,
            payload: data
        }
    )
}

export const bookFlight = data => {
    return async (dispatch, getState) => {
        console.log(data, '[[[[[')
        const res = await axios.post('http://localhost:5000/api/book/flight', data);
        dispatch(
            {
                type: BOOK_FLIGHT,
                payload: res.data
            }
        )
        return res.msg;
    }
}

export const fetchBookings = (data) => {
    return async (dispatch, getState) => {
        console.log(data, '[[[[[')
        const res = await axios.post('http://localhost:5000/api/my-bookings', data);
        dispatch(
            {
                type: BOOK_FLIGHT,
                payload: res.data
            }
        )
        return res.msg;
    }
}