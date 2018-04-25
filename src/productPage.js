import React from "react";

import ProductDisplay from "./productDisplay";
import CategoryList from "./categoryList";
import {connect} from "react-redux";

let mapStateToProps = ({products, categories},props) => {
    let id = props["match"]["params"]["id"];
    let product = products.find(
        ({id:Pid}) => {
            return (Pid.toString() === id)
        });
    return {
        products,
        categories,
        product
    };
};

let productPage = ({categories,product, products}) => {
    return (
        <section>
            <CategoryList categories={categories} products={products}/>
            <ProductDisplay {...product}/>
        </section>
    );
};

let productPageConnected = connect(mapStateToProps)(productPage);

export {productPage};
export default productPageConnected;
