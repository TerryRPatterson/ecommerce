
let routes = {
    "quantityField":null,
    "usernameField":null,
    "passwordField":null
}

let uiReducer = (oldState, action) => {
    let type = action["type"].replace("ui/","");
    return routes[type](oldState, action);
}
