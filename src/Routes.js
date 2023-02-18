import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./core/Home";
import PrivateRoutes from "./auth/helper/PrivateRoutes";
import UserDashboard from "./user/UserDashboard";
import Signin from "./user/Signin";
import Cart from "./core/Cart";
import Signup from "./core/Signup/Signup";
import Login from "./core/Login/Login";
import Shopping from "./core/Shopping/Shopping";
import SingleProduct from "./core/SingleProduct/SingleProduct";
import { ThemeProvider } from "@material-tailwind/react";
import SingleCategory from "./core/SingleCategory/SingleCategory";
import Profile from "./core/Profile/Profile";
import Contact from "./core/Contact/Contact";
import PlantCare from "./core/PlantCare/PlantCare";
import { isAuthenticated } from "./auth/helper";

const Routes = () => {
		 
	return (
		<>
			<BrowserRouter>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/signup" exact component={Signup} />
					<Route path="/signin" exact component={Login} />
					<PrivateRoutes path="/shopping" exact component={Shopping} />
					<Route path="/contact" exact component={Contact} />
					<Route path="/care" exact component={PlantCare} />
					<PrivateRoutes path="/cart" exact component={Cart} />
					<Route
						path="/category/:id"
						exact
						component={SingleCategory}
					/>
					<Route path="/single/:id" exact component={SingleProduct} />
					<PrivateRoutes
						path="/user/dashboard"
						exact
						component={UserDashboard}
					/>
					<PrivateRoutes
						path="/user/profile"
						exact
						component={Profile}
					/>
				</Switch>
			</BrowserRouter>
		</>
	);
};

export default Routes;
