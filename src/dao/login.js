import req from "./helpers/interface";
const queryAllUsers = () => {
    return req.get("/allUser");
};
export {
    queryAllUsers
}
