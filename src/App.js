import React, { StrictMode, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Route } from "react-router-dom";
import { getUser } from "./auth/helper";
import { ProductsContext } from "./Context/MainContext";
import { loadCart } from "./core/helper/cartHelper";
import Routes from "./Routes";

export default function App() {
  const [cartitems, setCartItems] = useState([]);
  const [user, setUser] = useState();
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
		try {
			const response = await getUser();
			setUser(response);
		} catch (error) {
			toast.error("Error occured in loading User!")
		}
	}, [reloadCart]);

	const toggleLoading = () => setIsLoading(!isLoading);
	const toggleReloadCart = () => setReloadCart(!reloadCart);

  return (
    <StrictMode>
		<ProductsContext.Provider value={{cartitems, toggleLoading, toggleReloadCart, isLoading, user}}>
    		<Routes />
    	</ProductsContext.Provider>
    </StrictMode>
  );
}
