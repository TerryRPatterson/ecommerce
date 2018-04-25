import React from "react";
import {Link} from "react-router-dom";

let categoryList = ({categories, products}) => {
    let categoriesVDom = [];
    categories.forEach( (category) => {
        let count = 0;
        let name = category["name"];
        let id = category["id"];
        products.forEach( (product) => {
            if (product["categoryId"] === category["id"]) {
                count ++;
            }
        });
        categoriesVDom.push(
            <li key={category["id"]}><Link to={`/categories/${id}`}
                key={category["id"]}>
                {`${category["name"]} (${count})`}</Link></li>);
    });
    return (
        <ul>
            {categoriesVDom}
        </ul>
    );
};

export default categoryList;
