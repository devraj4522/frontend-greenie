import axios from "axios";
import { getToken } from "../../auth/helper";
import { API } from "../../backend";

export const createOrder = (orderInfo) => {

  const payload = {...orderInfo}

  const token = getToken();
	if (!token) return []

	const headers = {
		'Authorization': `Token ${token}`,
		'Content-Type': 'application/json',
	  };
	
  	return axios.post(`${API}/order/create-order/`, payload, { headers: headers })
		.then((response) => {
      if (response.status == 200)
			  return response.data.data_dict;
      else throw Error("Error in processing order.")
		})
		.catch((err) => err);
};
