import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import {
  addItemToCart,
  countSameItem,
  removeItemFromCart,
} from "../../core/helper/cartHelper";
import "./Counter.css";

const Counter = ({ product }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(countSameItem(product.id));
  }, []);

  if (!count) return <></>;
  return (
    <>
      <div className="custom-number-input h-10 w-20 my-4">
        <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
          <button
            data-action="decrement"
            className=" bg-zinc-300 text-zinc-600 hover:text-zinc-700 hover:bg-zinc-400 h-full w-20 rounded-l cursor-pointer outline-none"
            onClick={() => {
              removeItemFromCart(product.id);
              setCount(count - 1);
              toast.success("Item Removed From Cart");
            }}
          >
            <span className="m-auto text-lg font-thin">−</span>
          </button>
          <input
            type="number"
            className="focus:outline-none text-center w-full bg-zinc-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-zinc-700  outline-none"
            name="custom-input-number"
            value={count}
          ></input>
          <button
            data-action="increment"
            className="bg-zinc-300 text-zinc-600 hover:text-zinc-700 hover:bg-zinc-400 h-full w-20 rounded-r cursor-pointer"
            onClick={() => {
              addItemToCart(product, () =>
                toast.success(` ${count} items in Cart`)
              );
              setCount(count + 1);
            }}
          >
            <span className="m-auto text-lg font-thin">+</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Counter;
