import connect from "./index";
import { withRouter } from "react-router-dom";
const loginConnect = component => withRouter(connect(component));
export {
  loginConnect
}
