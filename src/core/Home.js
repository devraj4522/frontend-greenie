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
    <Base title="Home Page" description="Welcome to Plant store">
      <div className="row">
        <Hero />
        <Section2 />
      </div>
    </Base>
  );
}
