import React from "react";

import ProductDisplay from "./productDisplay";
import CategoryList from "./categoryList";
import testData from "./testData";


let productPage = ({categories,product, products}) => {
    return (
        <section>
            <CategoryList categories={categories} products={products}/>
            <ProductDisplay {...product}/>
        </section>
