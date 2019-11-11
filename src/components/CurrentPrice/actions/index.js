import {CURRENT_PRICE_ENDPOINT, CURRENT_PRICE_FETCH} from "../constants";

export const fetchCurrentPrice = () => dispatch => {
    dispatch({type: CURRENT_PRICE_FETCH.PENDING});
    return fetch(CURRENT_PRICE_ENDPOINT, {method: "GET"})
        .then(res => res.json())
        .then(bpi => {
                dispatch({
                    type: CURRENT_PRICE_FETCH.SUCCESS,
                    bpi
                });
            }
        ).catch(error =>{
            dispatch({type: CURRENT_PRICE_FETCH.FAIL, payload: error});
            return Promise.reject(error);
        });
};
