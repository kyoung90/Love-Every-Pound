import { combineReducers } from "redux";
// import reducers
import users_reducer from "./users_reducer"
import preferences_reducer from "./preferences_reducer"
import quotes_reducer from "./quotes_reducer"
 
const rootReducer = combineReducers({
  users: users_reducer,
  preferences: preferences_reducer,
  quotes: quotes_reducer

});
 
export default rootReducer;