import React from "react";
import CategoryDisplay from "./categoryDisplay";

let categoriesPage = ({categories, products}) => {
    let vDomList = categories.map( (category) => {
        return <CategoryDisplay key={category["id"]} category={category}
            products={products}/>;
    });
    return <section>{vDomList}</section>;
};

export default categoriesPage;
