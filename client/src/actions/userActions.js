import {api_url} from "../commons/api_url"

export function fetchUser(id) {
    return (dispatch) => {
        dispatch({ type: 'LOADING' });
        return fetch(`${api_url}users/${id}`)
            .then(response => {
                return response.json()
            }).then(responseJSON => {
                dispatch({type: "FETCH_CURRENT_USER", payload: responseJSON})
            })
    };
}

export function loginAction(formData) {
    return (dispatch) => {
        dispatch({ type: 'LOADING' });
        return fetch(`${api_url}login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)   
        })
            .then(response => {
                return response.json()
            }).then(responseJSON => {
                localStorage.setItem('token', responseJSON.token)
                dispatch({type: "LOGIN", payload: responseJSON})
            })
    };
}

// export function fetchUser(id) {
//     return (dispatch) => {
//         dispatch({ type: 'LOADING' });
//         return fetch(`${api_url}users/${id}`)
//             .then(response => {
//                 return response.json()
//             }).then(responseJSON => {
//                 dispatch({type: "FETCH_CURRENT_USER", payload: responseJSON})
//             })
//     };
// }

