import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
 } from './constants';

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD, //name or action
    payload: text //action in text
});

export const requestsRobots = () => (dispatch) => {
    dispatch({ type: REQUEST_ROBOTS_PENDING})
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => dispatch({type: REQUEST_ROBOTS_SUCCESS, payload: data}))
    .catch(error => dispatch({tyye: REQUEST_ROBOTS_FAILED,  payload: error})) //error
}