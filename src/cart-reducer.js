import clone from "lodash/cloneDeep";

let addToCart = (oldState, action) => {
    let cart = clone(oldState["cart"]);
    let product = clone(action["product"]);
    product["status"] = "pending";
    product["pendingQuantityAdd"] = product["quantity"];
    product["quantity"] = 0;
    cart.push(product);
    let newState = {...oldState, cart};
    return(newState);
};

let changeCart = (oldState, action) => {
    let cart = clone(oldState["cart"]);
    let product = clone(action["product"])
    let productId = product["id"];
    product["status"] = "pending";
    if (isPositive(product["quantity"])) {
        product["pendingQuantityAdd"] = product["quantity"];
    } else {
        product["pendingQuantityRemove"] = Math.abs(product["quantity"]);
    }
    let productIndex = cart.find( ({id}) => id === productId);
    product["quantity"] = 0;
    cart[productIndex] = product;
    let newState = {...oldState, cart};
    return(newState);
};

let removeFromCart = (oldState, action) => {
    let cart = clone(oldState["cart"]);
    let productId = action["id"];
    let productIndex = cart.find( ({id}) => id === productId);
    cart[productIndex]["status"] = "pending removal";
    let newState = {...oldState, cart};
    return newState;
};

let routes = {
    "add":addToCart,
    "change":changeCart,
    "remove":removeFromCart
};

let cartReducer = (oldState, action) => {
    let type = action["type"].replace("cart/","");
    return routes[type](oldState,action);
};

let isPositive = (number) => {
    return (Math.sign(number) === 1);
}

export default cartReducer;
