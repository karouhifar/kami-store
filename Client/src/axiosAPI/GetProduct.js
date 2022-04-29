import axios from "axios";
import { setHeaders } from "../utils";
import endPoint from "./EndPoint";
export default async function GetProduct({ id }) {
  const res = await axios
    .get(`${endPoint.API_STRING}/api/Categories/${id}/Products`, setHeaders())
    .catch((err) => console.log(err));
  return res.data;
}
