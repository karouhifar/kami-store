import axios from "axios";
import endPoint from "./EndPoint";
export default async function PostCategory(FormData) {
  const res = await axios
    .post(`${endPoint.API_STRING}/api/Categories`, FormData)
    .catch((err) => console.log(err));
  return res;
}
