import React, { StrictMode, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Route } from "react-router-dom";
import { ProductsContext } from "./Context/MainContext";
import { loadCart } from "./core/helper/cartHelper";
import Routes from "./Routes";

export default function App() {
  const [cartitems, setCartItems] = useState([])
	const [reloadCart, setReloadCart] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(async () => {
		try {
			setIsLoading(true)
			const response = await loadCart();
			setCartItems(response?.data_dict);
			setIsLoading(false)
		} catch (error) {
			toast.error("Error occured in loading Cart!")
		}
	}, [reloadCart]);

	const toggleLoading = () => setIsLoading(!isLoading);
	const toggleReloadCart = () => setReloadCart(!reloadCart);

  return (
    <StrictMode>
		<ProductsContext.Provider value={{cartitems, toggleLoading, toggleReloadCart, isLoading}}>
    <Routes />
    </ProductsContext.Provider>
    </StrictMode>
  );
}
