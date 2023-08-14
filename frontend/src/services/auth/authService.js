import http from "../httpService";
import config from "../../config.json";

const loginEndPoint = config.apiUrl + "/user/login";
const registerEndPoint = config.apiUrl + "/user/register";
const tokenKey = "user";

http.setBearerToken(getBearerToken());

export async function login(email, password) {
  const { data }  = await http.post(loginEndPoint, { email, password });
  localStorage.setItem(tokenKey, JSON.stringify(data));
}

export function register(user) {
  return http.post(registerEndPoint, {
    name: user.name,
    email: user.email,
    password: user.password
  });
}

// export function loginWithJwt(jwt) {
//   localStorage.setItem(tokenKey, jwt);
// }

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function getBearerToken() {
  try {
    const { token } = JSON.parse(localStorage.getItem(tokenKey));
    return 'Bearer ' + token;
  } catch (ex) {
    return null;
  }
}

export function getCurrentUser() {
  try {
    const { user } = JSON.parse(localStorage.getItem(tokenKey));
    return user;
  } catch (ex) {
    return null;
  }
}

export default {
  register,
  login,
  // loginWithJwt,
  logout,
  getCurrentUser,
  getBearerToken
};
