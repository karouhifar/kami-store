import axios from "axios";
import endPoint from "./EndPoint";
export default async function DeleteCategory(id) {
  const res = await axios
    .delete(`${endPoint.API_STRING}/api/Categories/${id}`)
    .catch((err) => console.log(err));
  return res.data;
}
