import LoginCenter from "./loginCenter";
import { loginConnect } from "../../service/login/container/connect";

const LoginWrap = loginConnect(LoginCenter);
export {
  LoginWrap
}
