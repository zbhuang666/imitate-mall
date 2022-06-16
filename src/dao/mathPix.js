import req from "./helpers/interface";
const getQuestionImg = (param) => {
    return req.post("/ocr/operate/getQuestionImg", param);
};

const getQuestionList = (param) => {
    return req.post("/ocr/operate/getQuestionList", param);
}
export {
    getQuestionImg,
    getQuestionList
}