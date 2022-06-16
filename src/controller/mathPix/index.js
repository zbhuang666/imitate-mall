import { mathPixConnect } from "../../service/mathPix/container/connect";
import MathPix from "../mathPix/imgCompare";

const MathPixWrap = mathPixConnect(MathPix);
export {
    MathPixWrap
}
