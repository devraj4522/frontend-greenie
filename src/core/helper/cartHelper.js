import { getToken } from "../../auth/helper";
import axios from "axios";
import { API } from "../../backend";

export const addItemToCart = async (item, next) => {
  const token = getToken();
  if (!token) throw("Login Required")

  const payload = {
    "product_id": item,
    "is_add": true
  };
  const headers = {
    'Authorization': `Token ${token}`,
    'Content-Type': 'application/json',
  };

  return axios.post(`${API}/order/cart/`, payload, { headers: headers })
    .then((response) => {
      if (response.status !== 200)
        throw ("Error in adding to cart");
      if (response.data.custom_status_code)  throw("Check the data again...");
      next();
      return response.data;
    })
    .catch((err) => err);
};


export const loadCart = async () => {
  const token = getToken();
  if (!token) throw("Login Required")

  const headers = {
    'Authorization': `Token ${token}`,
    'Content-Type': 'application/json',
  };

  return axios.get(`${API}/order/cart/`, { headers: headers })
    .then((response) => {
      if (response.status !== 200)
        throw ("Error in adding to cart");
      if (response.data.custom_status_code)  throw("Check the data again...")
      return response.data;
    })
    .catch((err) => err);
};

// export const loadCart = () => {
//   if (typeof window !== undefined) {
//     if (localStorage.getItem("cart")) {
//       return JSON.parse(localStorage.getItem("cart"));
//     }
//   }
// };

export const isAvailableInCart = (id) => {
  if (typeof window !== undefined) {
    if (localStorage.getItem("cart")) {
      const items = JSON.parse(localStorage.getItem("cart"));
      for (let index = 0; index < items.length; index++) {
        const item = items[index];
        if (item.id.toString() === id.toString()) return true;
      }
    }
  }
  return false;
};

export const countSameItem = (id) => {
  let count = 0;
  if (typeof window !== undefined) {
    if (localStorage.getItem("cart")) {
      const items = JSON.parse(localStorage.getItem("cart"));

      items.forEach((item) => {
        if (item.id === id) count++;
      });
    }
  }
  return count;
};

export const removeItemFromCart = async(productId) => {
  const token = getToken();
  if (!token) throw("Login Required")

  const payload = {
    "product_id": productId,
    "is_add": false
  };
  const headers = {
    'Authorization': `Token ${token}`,
    'Content-Type': 'application/json',
  };

  return await axios.post(`${API}/order/cart/`, payload, { headers: headers })
    .then((response) => {
      if (response.status !== 200)
        throw ("Error in removing to cart");
      if (response.data.custom_status_code)  throw("Check the data again...")
      return response.data;
    })
    .catch((err) => err);
};

export const cartEmpty = (next) => {
  if (typeof window !== undefined) {
    localStorage.removeItem("cart");
    let cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
    next();
  }
};
