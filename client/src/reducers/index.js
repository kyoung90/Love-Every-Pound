import { combineReducers } from "redux";
// import reducers
import users_reducers from "./users_reducer"
import preferences_reducers from "./preferences_reducer"
 
const rootReducer = combineReducers({
  users: users_reducers,
  preferences: preferences_reducers
});
 
export default rootReducer;