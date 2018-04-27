/*eslint-disable no-unused-vars*/
//They are used in jsx
import React from "react";
import Placeholder from "./place-holder-component";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
/*eslint-enable no-unused-vars*/

let mapStateToProps = ({categories, products},{match:{params:{id}}}) => {
    let category = categories.find(({id:Cid}) => {
        return (Cid.toString() === id);
    });
    return {category, products}
}


let categoryDisplay = ({category, products}) => {
    let productsVDOM = [];
    let id = category["id"];
    let name = category["name"];
    products.forEach( ({categoryId, name, id:Pid}) => {
        if (id === categoryId) {
            productsVDOM.push(
                <Link key={Pid} to={`/products/${Pid}`}>
                    <Placeholder text="Product Display"/>
                    <p>{name}</p>
                </Link>);
        }
    });
    return(<section>
        <Link to={`/categories/${id}`}>
            <h1>{name}</h1>
        </Link>
        <span>{productsVDOM}</span>
    </section>);
};

let categoryDisplayConnected = connect(mapStateToProps)(categoryDisplay);

export {categoryDisplay};
export default categoryDisplayConnected;
