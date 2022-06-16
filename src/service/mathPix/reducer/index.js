import {aiQuestionList, userState} from "../../../utils/initState";
import {GET_QUESTION_IMG_SUCCESS, GET_QUESTION_LIST_SUCCESS} from "../constant";

const mathPixReducer = (state = userState, action) => {
    switch (action.type) {
        case GET_QUESTION_IMG_SUCCESS:
            return { ...state, aiQuestionImgCompareDtoList : action.aiQuestionImgCompareDtoList};
        case GET_QUESTION_LIST_SUCCESS:
            return { ...state, aiQuestionList : action.aiQuestionList};
        default:
            return { ...state };
    }
};

export {
    mathPixReducer
};
