import axios from "axios";
import { getToken } from "../../auth/helper";
import { API } from "../../backend";

export const getmeToken = async () => {
  const token = getToken();
	if (!token) return []

	const headers = {
		'Authorization': `Token ${token}`,
		'Content-Type': 'application/json',
	  };
	
  	return axios.get(`${API}/payment/gettoken/`, { headers: headers })
		.then((response) => {
      if (response.status == 200)
			  return response.data.data_dict;
      else throw Error("Error in generation of payment token.")
		})
		.catch((err) => err);
};

export const processPayment = (paymentInfo) => {

  const payload = {...paymentInfo}

  const token = getToken();
	if (!token) return []

	const headers = {
		'Authorization': `Token ${token}`,
		'Content-Type': 'application/json',
	  };
	
  	return axios.post(`${API}/payment/makepayment/`, payload, { headers: headers })
		.then((response) => {
      if (response.status == 200)
			  return response.data.data_dict;
      else throw Error("Error in generation of payment token.")
		})
		.catch((err) => err);
};
