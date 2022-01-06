import { NetworkError } from "Apis/index";
import TmpApi from "..";

interface Params {
  token: string;
}
interface ResponseData {
  name: string;
  type: string;
}
const getCheck = async (params: Params) => {
  try {
    const { data } = await TmpApi.get<ResponseData>("/user", { params });
    return data;
  } catch (error) {
    const err = error as NetworkError;
    if (err.status !== 404) {
      alert("내부 에러입니다.");
    } else {
      alert("인증정보가 만료되었습니다.");
    }
    return null;
  }
};

export default getCheck;
