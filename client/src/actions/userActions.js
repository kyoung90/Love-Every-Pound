import { api_url } from "../commons/api_url";

export function fetchUser(id) {
  return dispatch => {
    dispatch({ type: "LOADING" });
    return fetch(`${api_url}users/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    })
      .then(response => {
        return response.json();
      })
      .then(responseJSON => {
        dispatch({ type: "FETCH_CURRENT_USER", payload: responseJSON });
      });
  };
}

export function loginAction(formData) {
  return dispatch => {
    dispatch({ type: "LOADING" });
    return fetch(`${api_url}login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then(response => {
        return response.json();
      })
      .then(responseJSON => {
        localStorage.setItem("token", responseJSON.token);
        localStorage.setItem("currentUserId", responseJSON.id);
        dispatch({ type: "LOGIN", payload: responseJSON });
      });
  };
}

export function signupAction(formData) {
  return dispatch => {
    dispatch({ type: "LOADING" });
    return fetch(`${api_url}signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then(response => {
        return response.json();
      })
      .then(responseJSON => {
        dispatch({ type: "SIGNUP", payload: responseJSON });
      });
  };
}

export function addUserWeight(weight) {
  return dispatch => {
    dispatch({ type: "LOADING" });
    return fetch(`${api_url}users/weights`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(weight)
    })
      .then(response => {
        return response.json();
      })
      .then(responseJSON => {
        if (!responseJSON.error) {
          dispatch({ type: "ADD_CURRENT_USER_WEIGHT", payload: responseJSON });
        } else {
          console.log(responseJSON.error);
        }
      });
  };
}

export function updateUserWeight(id, weight) {
  return dispatch => {
    dispatch({ type: "LOADING" });
    return fetch(`${api_url}users/weights/${id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ weight: weight })
    })
      .then(response => {
        return response.json();
      })
      .then(responseJSON => {
        if (!responseJSON.error) {
          dispatch({
            type: "UPDATE_CURRENT_USER_WEIGHT",
            payload: responseJSON
          });
        } else {
          console.log(responseJSON.error);
        }
      });
  };
}

export function deleteUserWeight(id) {
  return dispatch => {
    dispatch({ type: "LOADING" });
    return fetch(`${api_url}users/weights/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
      .then(response => {
        return response.json();
      })
      .then(responseJSON => {
        if (!responseJSON.error) {
          dispatch({ type: "DELETE_CURRENT_USER_WEIGHT", payload: responseJSON });
        } else {
          console.log(responseJSON.error);
        }
      });
  };
}

export function logoutAction() {
  return dispatch => {
    return new Promise((resolve, reject) => {
      dispatch({ type: "LOGOUT_USER" });

      resolve();
    });
  };
}
