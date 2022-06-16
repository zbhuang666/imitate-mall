import { connect } from "react-redux";
import {GET_QUESTION_IMG_SUCCESS, GET_QUESTION_LIST_SUCCESS} from "../constant";
import {getQuestionImg, getQuestionList} from "../../../dao/mathPix";
import {getQImg, getQList} from "../action";

const mapStateToProps = (state) => ({
    aiQuestionImgCompareDtoList: state.mathPixReducer.aiQuestionImgCompareDtoList,
    aiQuestionList: state.mathPixReducer.aiQuestionList
});

const mapDispatchToProps = (dispatch, state) => {
    return {
        getQuestionImg: (params) => {
            getQuestionImg(params).then(res => {
                dispatch(getQImg(GET_QUESTION_IMG_SUCCESS, res))
            }).catch(error=> {
                alert(error);
            })
        },
        getQuestionList:(params) => {
            getQuestionList(params).then(res => {
                dispatch(getQList(GET_QUESTION_LIST_SUCCESS, res))
            }).catch(error=> {
                alert(error);
            })
        }
    };
};
export default connect(mapStateToProps,mapDispatchToProps);
