import {GETUSERSSUCCESS} from "../constant";
import {authentication, queryAllUsers, test} from "../../../dao/user";
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
        },
        authentication:(username,password)=>{
            const param = {
                username:username,
                password:password
            };
            authentication(param).then(res => {
                localStorage.setItem("AUTH-TOKEN",res.data.token);
            }).catch(error=>{
                alert(error);
            })
        },
        test : ()=> {
            test().then(res=> {

            })
        }
    };
};
export default connect(mapStateToProps,mapDispatchToProps);
