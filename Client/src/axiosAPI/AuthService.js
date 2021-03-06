import axios from "axios";
import endPoint from "./EndPoint";

async function login(userData) {
  const user = await axios
    .post(`${endPoint.API_STRING}/api/Categories/authenticate`, userData)
    .catch((err) => console.log(err));
  if (!user) {
    if (user.status === 401) logout();
    const error = user && user.statusText;
    return Promise.reject(error);
  }

  user && localStorage.setItem("token", user.data?.token);

  return user.data;
}

function logout() {}

async function signup(FormData) {
  const res = await axios
    .post(`${endPoint.API_STRING}/api/Categories/signup`, FormData)
    .catch(() => {
      throw new Error("Email already avaiable");
    });
  return res;
}

export const userService = {
  login,
  signup,
};
