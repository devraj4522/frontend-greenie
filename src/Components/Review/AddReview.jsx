import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { Rating } from "react-simple-star-rating";
import { css } from "react-star-rating-input";
import { useRef } from "react/cjs/react.production.min";
import { authenticate, getUser, isAuthenticated } from "../../auth/helper";
import { postProductReviews } from "../../core/helper/coreapicalls";
import Review from "./Review";
import classes from "./AddReview.module.css";


const AddReview = ({ product, setReload, reload }) => {
  const [rating, setRating] = useState(0);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const currUser = getUser();
    const currToken = isAuthenticated && isAuthenticated().token;
    setUser(currUser);
    setToken(currToken);
  }, []);

  const tooltipArray = ["Terrible", "Bad", "Average", "Great", "Awesome"];
  const fillColorArray = [
    "#f17a45",
    "#f19745",
    "#f1a545",
    "#f1b345",
    "#f1d045",
  ];

  const handleRating = (rate) => setRating(rate / 20);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user) {
      toast.error("User Not Found: Please Login to Your Account");
      return;
    }
    const review = {
      "title": title,
      "description": desc,
      "rating": rating,
      "product": product,
  };
    postProductReviews(review)
    .then((res) => {
      if (res.satus != 200) 
      {
        toast.error("Check all fields");
        return;
      }
      toast.success("Review Added");
      setReload(!reload);
      setDesc("");
      setTitle("");
      setRating(1);
    })
    .catch(error => toast.error("Check your input"));
  };

  return (
    <div className="md:w-2/3 flex flex-col w-full md:py-8 mt-8 md:mt-0">
      <h2 className="text-gray-900 text-3xl mb-1 font-bold title-font">
        Add A Produc Review
      </h2>
      <p className="leading-relaxed mb-5 text-gray-600">
        Review this product Share your thoughts with other customers
      </p>
      <div className="relative mb-4">
        <label htmlFor="title" className="leading-7 text-sm text-gray-600">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full bg-zinc-50 rounded border border-gray-300 focus:border-amber-200 focus:ring-2 focus:ring-amber-100 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>

      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">
          Rating
        </label>

        <div>
          <Rating
            className={`${classes.changeSvg}`}
            onClick={handleRating}
            ratingValue={rating}
            size={32}
            transition
            showTooltip
            tooltipArray={tooltipArray}
            fillColorArray={fillColorArray}
          />
        </div>
      </div>
      <div className="relative mb-4">
        <label
          htmlFor="description"
          className="leading-7 text-sm text-gray-600"
        >
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className="w-full bg-zinc-50 rounded border border-gray-300 focus:border-amber-200 focus:ring-2 focus:ring-amber-100  h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
        ></textarea>
      </div>
      <button
        onClick={handleSubmit}
        className=" mt-3 md:w-1/5 text-white bg-lime-500 border-0 py-2 px-6 focus:outline-none hover:bg-lime-600 rounded text-lg"
      >
        Submit
      </button>
      <p className="text-xs text-gray-500 mt-5">
        Your Feedback is important htmlFor us.
      </p>
    </div>
  );
};

export default AddReview;
