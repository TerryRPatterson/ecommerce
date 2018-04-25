import React from "react";
import Placeholder from "./placeHolder";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

const defaultDescription = "The vendor has not set a description yet 🙁";
const defaultPrice = "Not for sale";

let mapStateToProps = ({categories},{categoryId}) => {
    return {categoryName:categories.find( ({id}) => {
        return (id === categoryId);
    })["name"]};

};

let product = ({categoryName,categoryId, price=defaultPrice, name, id, min=0, max=100,
    description=defaultDescription, available=true}) => {
    if (price === defaultPrice) {
        available=false
    }
    if (min < 0) {
        min = 0;
        throw new Error("Invaild min value");
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
