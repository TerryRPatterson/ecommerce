
/*eslint-disable no-unused-vars*/
//They are used in jsx
import React from "react";
import {Link} from "react-router-dom";
import Cart from "./cart";
/*eslint-enable no-unused-vars*/
import {connect} from "react-redux";

let mapStateToProps = ({cart, currentUser}) => {
    return {cart, currentUser};
};

let login = ({currentUser, cart}) => {
    if (currentUser !== undefined) {
        return(
            <p>
                Logged In As:{currentUser["name"]}
                <Cart numberOfItems={cart.length}/>
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
