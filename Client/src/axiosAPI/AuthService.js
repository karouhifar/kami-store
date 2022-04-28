import axios from "axios";
import endPoint from "./EndPoint";

async function login(username, password) {
  const body = JSON.stringify({ username, password });

  const user = await axios
    .post(`${endPoint.API_STRING}/api/Categories`, body)
    .catch((err) => console.log(err));
  if (!user.data) {
    if (user.status === 401) logout();
    const error = user && user.statusText;
    return Promise.reject(error);
  }

  const data = user && localStorage.setItem("token", JSON.stringify(user.data));

  return data;
}

function logout() {
  localStorage.removeItem("token");
}

async function signup(FormData) {
  const res = await axios
    .post(`${endPoint.API_STRING}/api/Categories.signup`, FormData)
    .catch((err) => console.log(err));
  return res;
}

export const userService = {
  login,
  logout,
  signup,
};
