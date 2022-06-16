import { combineReducers } from "redux";
import { userReducer } from "../service/login/reducer";
import { mathPixReducer } from "../service/mathPix/reducer";
export default combineReducers({
  userReducer,
  mathPixReducer
});
