/*eslint-disable no-unused-vars*/
//They are used in jsx
import React from "react";
import Placeholder from "./placeHolder";
import {Link} from "react-router-dom";
/*eslint-enable no-unused-vars*/
import {connect} from "react-redux";

const defaultDescription = "The vendor has not set a description yet 🙁";
const defaultPrice = "Not for sale";

let mapStateToProps = ({categories},{categoryId}) => {
    return {category:categories.find( ({id}) => {
        return (id === categoryId);
    })};

};

let product = ({category,categoryId, price=defaultPrice, name, min=0, max=100,
    description=defaultDescription, available=true}) => {
    let {name:categoryName} = category;

    if (price === defaultPrice) {
        available=false;
    }

    if (min < 0) {
        min = 0;
        console.error("Invaild min value");
    }

    return (
        <article>
            <header>
                <Link to={`/categories/${categoryId}`}>
                    {categoryName} => {name}</Link>
            </header>
            <section>
                <Placeholder text="Image Gallery"/>
                <div>
                    <input type="number" min={min} max={max}
                        placeholder="Quantity" disabled={!available}/>
                    <button type="button" disabled={!available}>
                        Add to Cart</button>
                    {price}
                </div>
            </section>
            <main>
                <h2>{name}</h2>
                {description}
            </main>
        </article>
    );
};

let productConnected = connect(mapStateToProps)(product);
export default productConnected;
