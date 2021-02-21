const list2 = [...Array(100000000).keys()];
			
const simple = (list, x) => {
	console.time('simple')
	for(let i = 1; i < list.length; i++) {
		if(x === list[i]) {
			console.log('found at index: ', i);
			console.timeEnd('simple')
			return;
		}
	}
}

simple(list2, 99999999);
