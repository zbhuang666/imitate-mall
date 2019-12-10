import React from "react";
const LoginCenter = props => {
  const { queryAllUsers, users } = props;
  return (
    <div>
      <button onClick={queryAllUsers}>确认</button>
      <span>{JSON.stringify(users)}</span>
    </div>
  );
};
export default LoginCenter;
