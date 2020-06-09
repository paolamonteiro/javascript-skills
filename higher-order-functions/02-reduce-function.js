// Map, filter, reject and find are lots of array transformations,
// it turns the list into something else but they are pretty specific,
// reduce is the multi tool on list transformations.

// Example to get the amount total:
const orders = [
	{ amount: 250 },
	{ amount: 400 },
	{ amount: 100 },
	{ amount: 325 },
];

// Basic JS solution:
let totalAmount = 0;
for (let i = 0; i < orders.length; i++) {
	totalAmount += orders[i].amount;
}
//log: 1075

// FP solution using reduce:
const totalAmount2 = orders.reduce(function (sum, order) {
	return sum + order.amount;
}, 0);

// Like map and filter, reducetakes a callback function but unlike the
// others, it expects an object, an object that can be as a starting point
// for the sum (zero).
