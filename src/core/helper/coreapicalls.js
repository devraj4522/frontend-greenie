import axios from "axios";
import { authenticate, getToken, getUser } from "../../auth/helper";
import { API } from "../../backend";

export const getProducts = () => {
	const token = getToken();

	if (!token) return []

	const headers = {
		'Authorization': `Token ${token}`,
		'Content-Type': 'application/json',
	  };
	
	console.log("get")
	return axios.get(`${API}/product`, { headers: headers })
		.then((response) => {
			if (typeof response.data !== 'object' || !Array.isArray(response.data))
        		return [];
			return response.data;
		})
		.catch((err) => err);
};

export const getSingleProduct = (id) => {
	const token = getToken();

	if (!token) return []

	const headers = {
		'Authorization': `Token ${token}`,
		'Content-Type': 'application/json',
	  };
	
	console.log("get")
	return axios.get(`${API}/product/${id}`, { headers: headers })
		.then((response) => {
			if (response.data && response.data.detail)
        		throw response.data.detail;
			return response.data;
		})
		.catch((err) => err);
};

export const getProductReviews = (id) => {
	const token = getToken();

	if (!token) return []

	const headers = {
		'Authorization': `Token ${token}`,
		'Content-Type': 'application/json',
	  };
	
	if (!id) return {}
	return axios.get(`${API}/product/review/?product__id=${id}`, {headers: headers})
		.then((response) => {
			if (response.data && response.data.detail)
        		throw response.data.detail;
			return response.data;
		})
		.catch((err) => err);
};

export const postProductReviews = (review) => {
	const token = getToken();
	const user = getUser()
	if (!token || !user) throw("Login first!")
	if (!review.product) throw("Not a valid product")
	
	const headers = {
		'Authorization': `Token ${token}`,
		'Content-Type': 'application/json',
	  };

	const payload =  {
		...review,
		"user": user.id
	};
	console.log(review)
	return axios.post(`${API}/product/review/`, payload, {headers: headers})
		.then((response) => {
			if (response.data && response.data.detail)
        		throw response.data.detail;
			return response.data;
		})
		.catch((err) => err);
};

export const getCategory = () => {
	const token = getToken();

	if (!token) return []

	const headers = {
		'Authorization': `Token ${token}`,
		'Content-Type': 'application/json',
	  };
	
	
	return axios.get(`${API}/product/category/`, { headers: headers })
		.then((response) => {
			if (typeof response.data !== 'object' || !Array.isArray(response.data))
        		return [];
			return response.data;
		})
		.catch((err) => err);
};

//localhost:8000/api/product/category/
export const getProductByCategory = (category) => {
	const token = getToken();

	if (!token) return []

	const headers = {
		'Authorization': `Token ${token}`,
		'Content-Type': 'application/json',
	  };
	
	
	return axios.get(`${API}/product/?category=${category}`, { headers: headers })
		.then((response) => {
			if (typeof response.data !== 'object' || !Array.isArray(response.data))
        		return [];
			return response.data;
		})
		.catch((err) => err);
};


//localhost:8000/api/product/category/
export const submitContactForm = (submitedData) => {
	const formData = new FormData();

	for (const name in submitedData) {
		formData.append(name, submitedData[name]);
	}

	return fetch(`${API}user/contact/`, {
		method: "POST",
		body: formData,
	})
		.then((response) => {
			if (response.ok) return response.json();
			else return { error: "Not Able to Add Review" };
		})
		.catch((err) => console.log(err));
};
