import "./header.css";

//eslint-disable-next-line
import React from "react";
//eslint-disable-next-line
import Cart from "./cart";

let header = ({cart, currentUser}) => {
    return (
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
    );
};

export default header;
