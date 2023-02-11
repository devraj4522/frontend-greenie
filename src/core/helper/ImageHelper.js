import React from "react";

const ImageHelper = ({ product }) => {
  const imageurl = product && product.images && product.images.images
    ? product.images.images[0] 
    : `https://devraj4522.pythonanywhere.com/media/images/peperomiagreen_45.webp`;
  return <img className="relative  mx-auto" src={imageurl} alt="" />;
};

export default ImageHelper;
