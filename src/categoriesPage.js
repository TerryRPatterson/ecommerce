import React from "react";
import {connect} from "react-redux";
import {categoryDisplay as CategoryDisplay} from "./categoryDisplay";
let mapStateToProps = ({categories, products}) => {
    return {
        categories,products
    }
};
let categoriesPage = ({categories, products}) => {
    let vDomList = categories.map( (category) => {
        return <CategoryDisplay key={category["id"]} category={category}
            products={products}/>;
    });
    return <section>{vDomList}</section>;
};

let categoriesPageConnected = connect(mapStateToProps)(categoriesPage);

export {categoriesPage};
export default categoriesPageConnected;
