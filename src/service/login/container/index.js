import {GETUSERSSUCCESS} from "../constant";
import {queryAllUsers} from "../../../dao/login";
import { connect } from "react-redux";
import { getAllUsers } from "../action";

const mapStateToProps = (state) => ({
    users: state.userReducer.users
});

const mapDispatchToProps = (dispatch, state) => {
    return {
        queryAllUsers: () => {
            queryAllUsers().then(res => {
                dispatch(getAllUsers(GETUSERSSUCCESS, res))
            }).catch(error=> {
                alert(error);
            })
        }
    };
};
export default connect(mapStateToProps,mapDispatchToProps);
