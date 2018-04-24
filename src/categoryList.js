import React from "react";

let categoryList = ({categories, products}) => {
    let categoriesVDom = [];
    categories.forEach( (category) => {
        let count = 0;
        products.forEach( (product) => {
            if (product["categoryId"] === category["id"]) {
                count ++;
            }
        });
        categoriesVDom.push(
            <li>{`${category["name"]} (${count})`}</li>);
    });
    return (
        <ul>
            {categoriesVDom}
        </ul>
    );
};

export default categoryList;
