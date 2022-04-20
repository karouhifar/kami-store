import axios from "axios";
import endPoint from "./EndPoint";
export default async function PostProduct(id, FormData) {
  const res = await axios
    .post(`${endPoint.API_STRING}/api/Categories/${id}/PostProduct`, FormData)
    .catch((err) => console.log(err));
  return res;
}
