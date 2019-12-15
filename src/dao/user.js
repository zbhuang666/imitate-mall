import req from "./helpers/interface";
const queryAllUsers = () => {
    return req.get("/allUser");
};
const authentication = (param) => {
    return req.get("/authentication",param);
};
const test =() => {
    return req.get("/test");
}
export {
    queryAllUsers,
    authentication,
    test
}
