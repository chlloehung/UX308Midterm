function gymMembershipCost(cost, friends) {
    let discount = 0;

    if (friends === 0) {
        discount = 0; 
    }
    if (friends === 1) {
        discount = 5; 
    }
    if (friends === 2) {
        discount = 10; 
    }
    if (friends >= 3) {
        discount = 15;
    }
    let discountAmount = (cost * discount) / 100; 
    let finalCost = cost - discountAmount;
    return finalCost;

    }

console.log(gymMembershipCost(100, 1)); // 5% discount
console.log(gymMembershipCost(100, 2)); // 10% discount 
console.log(gymMembershipCost(100, 3)); // 15% discount 
console.log(gymMembershipCost(100, 4)); // 15% discount 

export {gymMembershipCost}