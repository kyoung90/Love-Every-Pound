import {api_url} from "../commons/api_url"

export function fetchPreferences() {
    return (dispatch) => {
        dispatch({ type: 'LOADING' });
        return fetch(`${api_url}preferences`)
            .then(response => {
                return response.json()
            }).then(responseJSON => {
                dispatch({type: "FETCH_PREFERENCES", payload: responseJSON})
            })
    };
}