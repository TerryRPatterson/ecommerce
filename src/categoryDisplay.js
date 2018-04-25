import React from "react";
import Placeholder from "./placeHolder";

let categoryDisplay = ({category, products}) => {
    let productsVDOM = [];
    let id = category["id"];
    let name = category["name"];
    products.forEach( ({categoryId, name, id:Pid}) => {
        if (id === categoryId) {
            productsVDOM.push(
                <div key={Pid}>
                    <Placeholder text="Product Display"/>
                    <p>{name}</p>
                </div>);
        }
    });
    return(<section>
        <h1>{name}</h1>
        <span>{productsVDOM}</span>
    </section>);
};

export default categoryDisplay;
