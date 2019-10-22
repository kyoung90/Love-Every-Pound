export default function usersReducer(
  state = { loading: false, currentUser: null },
  action
) {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: true };
    case "FETCH_CURRENT_USER":
      return { loading: false, currentUser: action.payload };
    case "LOGIN":
      return { loading: false, currentUser: action.payload };
    case "LOGOUT_USER":
      localStorage.removeItem("token");
      localStorage.removeItem("currentUserId");
      return { loading: false, currentUser: null };
    case "SIGNUP":
      return { ...state, loading: false };
    case "ADD_CURRENT_USER_WEIGHT":
      let user = state.currentUser
      user.weights = [...user.weights, action.payload]
      return {...state, loading:false, currentUser: user}
    default:
      return state;
  }
}
