import "./header.css";

//eslint-disable-next-line
import React from "react";
//eslint-disable-next-line
import Cart from "./cart";
import Product from "./productDisplay";
import CategoryList from "./categoryList";
import testData from "./testData";

let header = ({cart, currentUser}) => {
    return (
        <main>
        <header className="siteHeader">

            <div>
                <img src="Icon.png" className="logo" alt={"Light Brown Guinea Pig."+
                "The site logo"}/>
            Digital Crafts
            </div>
            <div className="subHeader">
                <p>Logged In As:{currentUser["name"]}</p>
                <Cart numberOfItems={cart.length}/>
            </div>
        </header>
        <Product price="12.99" category="Shirt" name="Black Shirt" id="10"/>
        <CategoryList {...testData}/>
    </main>
    );
};

export default header;
