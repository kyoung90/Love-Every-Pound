export default function usersReducer(state={loading: false, current_user: null}, action){
    switch(action.type){
        case 'LOADING':
            return {...state, loading: true}
        case 'FETCH_CURRENT_USER':
            return {loading: false, current_user: action.payload}
        case "LOGIN":
            return {loading: false, current_user: action.payload}
        default:
            return state
    }
}