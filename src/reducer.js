
let router = {
    "/fetch":null,
    "/cart":null,
    "/login":null,
    "@@INIT":state => state
}

let initalState = {
    cart:[
        {id:1,quantity:1},{id:2,quantity:3}
    ],
    users:[
        { "id": 1, "name": "Terry" },
        { "id": 2, "name": "Redux Help", "categoryId": 3 },
        { "id": 3, "name": "Super Amazing Computer", "categoryId": 1 },
        { "id": 4, "name": "Werewolf", "categoryId": 4 }
    ],
    products:[
        { "id": 1, "name": "Coffee Maker", "categoryId": 2, price:10 },
        { "id": 2, "name": "Redux Help", "categoryId": 3 , price:10},
        { "id": 3, "name": "Super Amazing Computer", "categoryId": 1, price:10 },
        { "id": 4, "name": "Werewolf", "categoryId": 4 , price:10}
    ],
    categories:[
        { "id": 1, "name": "Technology" },
        { "id": 2, "name": "Food and Beverage" },
        { "id": 3, "name": "Educational" },
        { "id": 4, "name": "Board Games"}
    ],
    currentUser:{ "id": 1, "name": "Terry" },
};
let reducer = (oldState=initalState, action) => {
    let type = action["type"];
    for (let route in router) {
        if (type.startsWith(route)){
            return router[route](oldState,action);
        }
    };
    throw new Error(`Action ${type} not found.`);
}

export default reducer;
