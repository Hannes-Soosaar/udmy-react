import axios from 'axios';
import { FETCH_USER } from './types.js';

export const fetchUser = () => async dispatch => {
    const res = await axios.get("/api/current_user")
    dispatch({ type: FETCH_USER, payload: res.data });
    console.log('We have the data.')
}

export const getTest = () => async dispatch =>{
    console.log("Recieved request for /api/test");
    try {
        const res = await axios.get("/api/test")
        dispatch({type: "test-data", payload: res.data});
    }catch (error){
        console.log("catch error", error);
    }
}