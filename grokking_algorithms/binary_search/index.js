const list = [...Array(100000000).keys()];

const binary = (list, x) => {
	console.time('binary')
	let low = 0;
	let high = list.length -1;
	
	while(low <= high) {
		let middle = Math.floor((low + high) / 2);
		let guess = list[middle]
		if(guess === x) {
			console.log('found at index: ', middle);
			console.timeEnd('binary')
			return;
		} 
		if(x > guess) {
			low = middle + 1;
		} else {
			high = middle - 1;
		}
	}
} 

binary(list, 99999999);
