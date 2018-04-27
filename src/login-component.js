
/*eslint-disable no-unused-vars*/
//They are used in jsx
import React from "react";
import {Link} from "react-router-dom";
import Cart from "./cart-component";
/*eslint-enable no-unused-vars*/
import {connect} from "react-redux";
import cartTotal from "./cart-total";

let mapStateToProps = ({cart, currentUser}) => {
    return {cart, currentUser};
};

let login = ({currentUser, cart}) => {
    let {currentTotal, pendingTotal} = cartTotal(cart);
    let numberOfItems = `${currentTotal}`;
    if (pendingTotal > 0) {
        numberOfItems = numberOfItems + `(${pendingTotal})`;
    }
    if (currentUser) {
        return(
            <p>
                Logged In As:{currentUser["name"]}
                <Cart numberOfItems={numberOfItems}/>
            </p>
        );
    }
    else {
        return <Link to="/login">
            <h2>Log In</h2>
        </Link>;
    }

};

let loginConnected = connect(mapStateToProps)(login);
export {login};
export default loginConnected;
