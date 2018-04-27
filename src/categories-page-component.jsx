import {connect} from "react-redux";
/*eslint-disable no-unused-vars*/
//They are used in jsx
import React from "react";
import {categoryDisplay as CategoryDisplay} from "./category-display-component";
/*eslint-enable no-unused-vars*/

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
