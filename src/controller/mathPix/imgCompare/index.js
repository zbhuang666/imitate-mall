import React, {useEffect, useState} from "react";
import "./index.css";

const MathPix = props => {
    const [page, setPage] = useState(0);

    const { getQuestionImg,  aiQuestionImgCompareDtoList, getQuestionList, aiQuestionList} = props;
    useEffect(() => {
        const param = {
            "questionId":9
        }
        getQuestionImg(param);
        const pm = {
            "page":page
        }
        getQuestionList(pm);
    }, [])


    return (
        <div className={"mathPix"}>
            <div><span>页码</span><input onClick={() => setPage}/></div>
            <select>
                {
                    aiQuestionList && aiQuestionList.rt.map(aiQuestion => {
                        return <option value ="aiQuestion.id">aiQuestion.id</option>
                    })
                }
            </select>
            <div>
                {
                    aiQuestionImgCompareDtoList && aiQuestionImgCompareDtoList.rt.map(aiQuestionImgCompareDto => {
                        return <div key={aiQuestionImgCompareDto.questionId}>
                            <div><img src={aiQuestionImgCompareDto.pngUrl}/></div>
                            <div><img src={aiQuestionImgCompareDto.svgUrl}/></div>
                        </div>
                    })
                }
            </div>
        </div>
    );
};
export default MathPix;