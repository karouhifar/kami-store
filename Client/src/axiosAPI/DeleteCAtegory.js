import axios from "axios";
import { setHeaders } from "../utils";
import endPoint from "./EndPoint";
export default async function DeleteCategory(id) {
  const res = await axios
    .delete(`${endPoint.API_STRING}/api/Categories/${id}`, setHeaders())
    .catch((err) => console.log(err));
  return res.data;
}
