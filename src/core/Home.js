import React, { useState, useEffect } from "react";

import { getProducts } from "./helper/coreapicalls";
import Base from "./Base";
import "../styles.css";
import Card from "./Card";
import Hero from "./Hero/Hero";
import Section2 from "./Section2/Section2";
import Product from "./Product/Product";
import CardGallery from "./CardGallery/CardGallery";

export default function Home() {
  return (
    <Base title="Home Page" description="Welcome to Tshirt store">
      <div className="row">
        {/* {products.map((product, index) => {
          return (
            <div key={index} className="col-4 mb-4">
              <Product product={product} />
            </div>
          );
        })} */}
        <Hero />
        <Section2 />
      </div>
    </Base>
  );
}
