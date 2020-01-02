import req from "./helpers/interface";
const queryAllUsers = () => {
    return req.get("/allUser");
};
const authentication = (param) => {
    return req.get("api/authentication",param);
};
const test =() => {
    return req.get("api/test");
}
export {
    queryAllUsers,
    authentication,
    test
}
