import axios from "axios";
import { setHeaders } from "../utils";
import endPoint from "./EndPoint";
export default async function PutProduct(id, FormData) {
  const res = await axios
    .put(`${endPoint.API_STRING}/api/Categories/${id}`, FormData, setHeaders())
    .catch((err) => console.log(err));
  return res;
}
