import { GET_ERRORS, CLEAR_ERRORS } from '../actionTypes';

// RETURN ERRORS
export const returnErrors = (msg="", status="", id = 400) => {
    return {
        type: GET_ERRORS,
        payload: { msg, status, id }
    }
}

// CLEAR ERRORS
export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS
    }
}