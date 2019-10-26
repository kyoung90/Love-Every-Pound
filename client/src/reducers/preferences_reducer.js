export default function preferencesReducer(state={loading: false, preferences: []}, action){
    switch(action.type){
        case 'LOADING':
            return {...state, loading: true}
        case 'FETCH_PREFERENCES':
            return {loading: false, preferences: action.payload}
        default:
            return state
    }
}