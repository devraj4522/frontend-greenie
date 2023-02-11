import axios from "axios";
import { API } from "../../backend";
import { cartEmpty } from "../../core/helper/cartHelper";


export const signup = (user) => {
  const payload = {
    email: user.email,
    name: user.name,
    phone: user.phone,
    password: user.password,
    gender: user.gender
  };

  return axios.post(`${API}/user/user-account/`, payload)
    .then(response => {
        return response.data;
    })
    .catch(error => {
      return error;
    });
};

export const signin = (user) => {

  const params = {
    email: 'email2@gmail.com',
    password: '1234',
  };
  
  return axios.get(`${API}/user/user-account/`, {params})
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return error;
    });
  
};

export const authenticate = (data, next) => {
  if (typeof window !== undefined) {
    localStorage.setItem("jwt", JSON.stringify(data));
    next();
  }
};

export const isAuthenticated = () => {
  if (typeof window == undefined) {
    return false;
  }
  if (localStorage.getItem("jwt")) {
    return JSON.parse(localStorage.getItem("jwt"));
    //TODO: compare JWT with database json token
  } else {
    return false;
  }
};

export const getUser = () => {
  if (typeof window == undefined) {
    return false;
  }
  if (localStorage.getItem("jwt")) {
    return JSON.parse(localStorage.getItem("jwt"))["user"];
    //TODO: compare JWT with database json token
  }
  return;
};

export const getToken = () => {
  if (typeof window == undefined)
    return false;
  if (localStorage.getItem("jwt")) {
    return JSON.parse(localStorage.getItem("jwt"))["auth"]["token"];
  }
  return;
}

export const signout = (next) => {
  const userId = isAuthenticated() && isAuthenticated().user.id;

  console.log("USERID: ", userId);

  if (typeof window !== undefined) {
    localStorage.removeItem("jwt");
    cartEmpty(() => {});
    next();

  }
};
