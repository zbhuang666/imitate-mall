import { GETUSERSSUCCESS } from "../constant";
import { userState } from "../../../utils/initState";

const userReducer = (state = userState, action) => {
  switch (action.type) {
    case GETUSERSSUCCESS:
        return { ...state, users : action.users};
    default:
        return { ...state };
  }
};

export {
  userReducer
};
