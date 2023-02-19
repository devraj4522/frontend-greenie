import axios from "axios";
import { authenticate, getToken, getUser } from "../../auth/helper";
import { API } from "../../backend";

export const getProducts = async (page, categoryId) => {
	const token = getToken();
	console.log(token)
	if (!token) return []

	const headers = {
		'Authorization': `Token ${token}`,
		'Content-Type': 'application/json',
	  };
	
	return axios.get(`${API}/product/product-list/?page=${page}&category=${categoryId}`, { headers: headers }, )
		.then((response) => {
			if (response.status !== 200)
				return []
			return response.data;
		})
		.catch((err) => {throw new Error(err)});
};

export const getSingleProduct = async (id) => {
	const token = getToken();

	const headers = {
		'Authorization': `Token ${token}`,
		'Content-Type': 'application/json',
	  };
	
	return axios.get(`${API}/product/${id}`, { headers: headers })
		.then((response) => {
			if (response.data && response.data.detail)
        		throw response.data.detail;
			return response.data;
		})
		.catch((err) => err);
};

export const getProductReviews = async (id) => {
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

export const postProductReviews = async (review) => {
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
	// console.log(review)
	return axios.post(`${API}/product/review/`, payload, {headers: headers})
		.then((response) => {
			if (response.status && response.data.detail)
        		throw response.data.detail;
			return response.data;
		})
		.catch((err) => err);
};

export const getCategory = async() => {
	const token = getToken();
	if (!token) throw("Login First")

	const headers = {
		'Authorization': `Token ${token}`,
		'Content-Type': 'application/json',
	  };
	
	
	return await axios.get(`${API}/product/category/`, { headers: headers })
		.then((response) => {
			if (typeof response.data !== 'object' || !Array.isArray(response.data))
        		return [];
			return response.data;
		})
		.catch((err) => {throw new Error(err)});
};

//localhost:8000/api/product/category/
export const getProductByCategory = async (category) => {
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
export const submitContactForm = async (submitedData) => {
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
