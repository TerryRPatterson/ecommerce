
let cartCount = (cart) => {
    let currentTotal = 0;
    let pendingTotal = 0;
    cart.forEach((item) => {
        currentTotal += item["quantity"] || 0;
        pendingTotal += item["pendingQuantityAdd"] || 0;
        pendingTotal -= item["pendingQuantityRemove"] || 0;
    });
    return {pendingTotal,currentTotal}
};

export default cartCount;
