import { combineReducers } from "redux";
// import reducers
import users_reducers from "./users_reducer"
 
const rootReducer = combineReducers({
  users: users_reducers
});
 
export default rootReducer;