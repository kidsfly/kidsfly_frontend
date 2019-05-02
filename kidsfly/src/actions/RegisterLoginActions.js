import axios from 'axios';

const URL = 'https://kids-fly-backend.herokuapp.com';

//Registering
export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';

//Login
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

// Logout
export const LOGOUT = 'LOGOUT'

//get-data
export const GET_DATA = 'GET_DATA';
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
export const GET_DATA_FAIL = 'GET_DATA_FAIL';

// Update Password
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD';
export const UPDATE_PASSWORD_SUCCESS = 'UPDATE_PASSWORD_SUCCESS';
export const UPDATE_PASSWORD_FAIL = 'UPDATE_PASSWORD_FAIL';

// Delete User
export const DELETE_USER = 'DELETE_USER';
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
export const DELETE_USER_FAIL = 'DELETE_USER_FAIL';

export const register = (credentials) => dispatch => {
    dispatch({ type: REGISTER_START });
    return axios.post(`${URL}/api/auth/register`, credentials)
        .then((res) => {
            console.log(res);
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('id', res.data.id);
            dispatch({ type: REGISTER_SUCCESS, payload: res.data.token, id: res.data.id });
        })
        .catch((err) => {
            console.log(err);
            dispatch({ type: REGISTER_FAIL, payload: err });
        })
}

export const login = (credentials) => dispatch => {
    dispatch({ type: LOGIN_START});
    return axios.post(`${URL}/api/auth/login`, credentials )
        .then((res) => {
            console.log(res);
            localStorage.setItem('token', res.data.token);
            dispatch({ type: LOGIN_SUCCESS, payload: res.data.token, id: res.data.id });
        })
        .catch((err) => {
            console.log(err);
            dispatch({ type: LOGIN_FAIL,  payload: err });
        })
}

export const getData = (post) => dispatch => {
    dispatch({ type: GET_DATA});
    return axios.post(`${URL}/api/post`, post, {headers: {Authorization:localStorage.getItem('token')}})
        .then((res) => {
            console.log(res);
            dispatch({ type: GET_DATA_SUCCESS, payload: res.data });
        })
        .catch((err) => {
            console.log(err);
            dispatch({ type: GET_DATA_FAIL, payload: err });
        })

    }


export const updatePassword = (password) => dispatch => {
    dispatch({ type: UPDATE_PASSWORD })
    return axios.put(`${URL}/api/auth/users`, password, {headers: {Authorization:localStorage.getItem('token')}})
        .then((res) => {
            console.log(res);
            dispatch({ type: UPDATE_PASSWORD_SUCCESS, payload: res.data });
        })
        .catch((err) => {
            console.log(err);
            dispatch({ type: UPDATE_PASSWORD_FAIL, payload: err});
        })
}

export const deleteUser = () => dispatch => {
    dispatch({ type: DELETE_USER })
    return axios.delete(`${URL}/api/auth/users`, {headers: {Authorization:localStorage.getItem('token')}})
        .then((res) => {
            console.log(res);
            dispatch({ type: DELETE_USER_SUCCESS, payload: res.data});
        })
        .catch((err) => {
            console.log(err);
            dispatch({ type: DELETE_USER_FAIL, payload: err });
        })
}

export const logout = (credentials) => dispatch => {
    dispatch({ type: LOGOUT });
    return axios.put(`${URL}/api/auth/logout`, credentials)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
}