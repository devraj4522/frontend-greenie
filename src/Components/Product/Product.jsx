import { ShoppingBagIcon } from "@heroicons/react/solid";
import "./Product.css";
import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom";
import ImageHelper from "../../core/helper/ImageHelper";
import { isAuthenticated } from "../../auth/helper";
import {
  addItemToCart,
  removeItemFromCart,
} from "../../core/helper/cartHelper";
import toast from "react-hot-toast";

const Product = ({
  product,
  addtoCart = true,
  removeFromCart = false,
  reload = undefined,
  setReload = (f) => f,
  // function(f){return f}
}) => {
  const [redirect, setRedirect] = useState(false);

  const cartTitle = product ? product.name : "A photo from pexels";
  const cartPrice = product ? product.price : "0";

  const addToCart = () => {
    if (isAuthenticated()) {
      addItemToCart(product, () => setRedirect(true));
      toast.success("Added to cart");
    } else {
      toast.error("Login Please!");
    }
  };

  const getAredirect = (redirect) => {
    if (redirect) {
      return <Redirect to="/cart" />;
    }
  };

  const showAddToCart = (addToCart) => {
    return (
      addtoCart && (
        // <div className="flex justify-center items-end h-1/5">
        <button
          onClick={addToCart}
          className=" cursor-pointer inline-block bg-pink-600 hover:bg-pink-800 outline-none  group  text-slate-50 font-medium rounded-full px-4 py-2"
        >
          <span>Add to Cart </span>{" "}
          <ShoppingBagIcon className="-pt-1 h-6 pl-auto inline-block  text-slate-50 group-hover:text-slate-600" />
        </button>
        // </div>
      )
    );
  };

  const showRemoveFromCart = (removeFromCart) => {
    return (
      removeFromCart && (
        // <div className="flex justify-center items-end h-1/5">
        <button
          onClick={() => {
            removeItemFromCart(product.id);
            setReload(!reload);

            console.log("Product removed from cart");
          }}
          className="cursor-pointer inline-block bg-pink-600 hover:bg-pink-800 outline-none  group  text-slate-50 font-medium rounded-full px-4 py-2"
        >
          <span>Remove From Cart </span>{" "}
          <ShoppingBagIcon className="-pt-1 h-6 pl-auto inline-block  text-slate-50 group-hover:text-slate-600" />
        </button>
        // </div>
      )
    );
  };

  return (
    <div className=" grid auto-cols-fr justify-between items-center shadow-xl relative rounded-sm px-6 pb-6 hover:cursor-pointer productMain">
      <Link to={"/single/" + product.id}>
        {/* {getAredirect(redirect)} */}
        <ImageHelper product={product} className="text-center object-fill" />
      </Link>
      <div className="grid grid-flow-col space-x-2 auto-cols-auto items-center justify-between ">
        <div className="grid  auto-rows-max">
          <div className="font-semibold uppercase text-xs text-lime-700 ">
            Indoor
          </div>
          <div className=" inline-block font-bold gray-700 capitalize">
            {cartTitle}
          </div>
        </div>
        <div className="bg-teal-700 rounded-full text-white text-xs font-bold px-3 py-2 leading-none">
          {"??? "}
          {cartPrice}
        </div>
      </div>
      {showAddToCart(addToCart)}
      {showRemoveFromCart(removeFromCart)}
    </div>
  );
};

export default Product;
