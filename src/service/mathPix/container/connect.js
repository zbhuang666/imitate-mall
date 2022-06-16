import connect from "./index";
import { withRouter } from "react-router-dom";
const mathPixConnect = component => withRouter(connect(component));
export {
    mathPixConnect
}