/*eslint-disable no-unused-vars*/
//They are used in jsx
import React from "react";
import {Link} from "react-router-dom";
/*eslint-enable no-unused-vars*/

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
                {`${name} (${count})`}</Link></li>);
    });
    return (
        <ul>
            {categoriesVDom}
        </ul>
    );
};

export default categoryList;
