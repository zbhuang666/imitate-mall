import React, {useState} from "react";
import { Input, Button } from "antd";
import "./index.css";
const LoginCenter = props => {
  const { queryAllUsers, authentication, users, test } = props;
  const [usename,setUsername] = useState("");
  const [password,setPassword] = useState("");
  return (
      <div className={"login"}>
          <div className={"loginCenter"}>
              <div className={"login-left"}></div>
              <div className={"login-right"}>
                  <div className={"name"}>
                      <span>用户账号</span>
                      <Input value={usename} className={"name"} onChange={e => setUsername(e.target.value)}/>
                  </div>
                  <div className={"password"}>
                    <span>
                        <span>用户密码</span>
                        <Input value={password} onChange={e => setPassword(e.target.value)}/>
                    </span>
                  </div>
                  <div className={"login-button"}>
                      <Button onClick={() => authentication(usename,password)}>登录</Button>
                      <Button onClick={()=>test()}>注册</Button>
                  </div>
              </div>
          </div>
      </div>
  );
};
export default LoginCenter;