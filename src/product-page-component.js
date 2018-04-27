/*eslint-disable no-unused-vars*/
//They are used in jsx
import React from "react";
import ProductDisplay from "./product-display-component";
import CategoryList from "./category-list-component";
/*eslint-enable no-unused-vars*/
import {connect} from "react-redux";

let mapStateToProps = ({products, categories},props) => {
    let id = props["match"]["params"]["id"];
    let product = products.find(
        ({id:Pid}) => {
            return (Pid.toString() === id);
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
