import { authenticate } from "../../auth/helper";
import { API } from "../../backend";

export const getProducts = () => {
	return fetch(`${API}product`, { method: "GET" })
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
};

export const getSingleProduct = (id) => {
	return fetch(`${API}product/${id}`, { method: "GET" })
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
};

export const getProductReviews = (id) => {
	return fetch(`${API}product/review/${id}`, { method: "GET" })
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
};

export const postProductReviews = (productId, token, user, submitedData) => {
	const formData = new FormData();
	formData.append("user", user);

	for (const name in submitedData) {
		formData.append(name, submitedData[name]);
	}

	return fetch(`${API}product/review/add/${productId}/${token}/`, {
		method: "POST",
		body: formData,
	})
		.then((response) => {
			if (response.ok) return response.json();
			else return { error: "Not Able to Add Review" };
		})
		.catch((err) => console.log(err));
};

export const getCategory = () => {
	return fetch(`${API}category/`, { method: "GET" })
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
};

//localhost:8000/api/product/category/
export const getProductByCategory = (category) => {
	return fetch(`${API}product/category/${category}`, { method: "GET" })
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
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
