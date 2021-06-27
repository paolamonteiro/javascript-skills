// 1. Write a recursive function to count the number of items in a list.

const x = [2, 4, 6, 8, 7];

const count = (array) => !array.length ? 0 : 1 + count(array.slice(1));

console.log(count(x));

// 2. Find the maximum number in a list.

const findMax = (array) => {
	if (array.length === 2) {
		return array[0] > array[1] ? array[0] : array[1];
	}

	const subArray = findMax(array.slice(1));
	return array[0] > subArray ? array[0] : subArray;
}

console.log(findMax(x));

// 3. Write a recursive function to sum the numbers in a list.

const x = [2, 4, 6, 8, 7];

const sum = (list) => !list.length ? 0 : list[0] + sum(list.slice(1))

console.log('sum ', sum(x));
