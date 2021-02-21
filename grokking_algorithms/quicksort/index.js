// Quicksort:

// 1. Chose a pivot
// 2. Create first sub-array with elements less than pivot
// 3. Create second sub-array with elements greater than pivot
// 4. Call quicksort recursively for both array
const x = [2, 4, 6, 8, 7];

const quicksort = (array) => {
	if (array.length < 2) {
		return array;
	}

	let pivot = array[0];
	const less = array.slice(1).filter(i => i < pivot)
	const greater = array.slice(1).filter(i => i > pivot)

	return quicksort(less).concat([pivot], quicksort(greater));
}

console.log('quicksort ', quicksort(x));


// Exercises:

const printItems = (array) => {
	if (array.length < 2) {
		return array;
	}

	let low = 0;
	let high = array.length - 1;
	let middle = Math.floor((low + high) / 2);
	let pivot = array[middle];

	const less = []
	const greater = []

	for (let i = 0; i < array.length; i++) {
		if (array[i] < pivot) {
			less.push(array[i])
		}
		if (array[i] > pivot) {
			greater.push(array[i])
		}
	}

	return printItems(less).concat([pivot], printItems(greater));
}

console.log(printItems(x));

const y = [123, 4343, 3243, 34235, 65745645, 76756, 4343, 234]

console.log(printItems(y));
