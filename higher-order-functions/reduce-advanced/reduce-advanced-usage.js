import fs from 'fs';

// Example to transform the orders list from data.txt to a list where each object takes
// the name of customer and the items as content:

const output = fs.readFileSync('data.txt', 'utf-8');
console.log(output);
/* log:  
(The data is separated by tabs)
mark johansson  waffle iron     80      2
mark johansson  blender 200     1
mark johansson  knife   10      4
Nikita Smith    waffle iron     80      1
Nikita Smith    knife   10      2
Nikita Smith    pot     20      3 */

// FP solution using reduce:
const output2 = fs
	.readFileSync('data.txt', 'utf-8')
	.trim()
	.split('\n')
	.map((line) => line.split('\t'))
	.reduce((customers, line) => {
		customers[line[0]] = customers[line[0]] || [];
		customers[line[0]].push({
			name: line[1],
			price: line[2],
			qty: line[3],
		});
		return customers;
	}, {});

console.log(output2);
/* log: 
{
  'mark johansson': [
    { name: 'waffle iron', price: '80', qty: '2' },
    { name: 'blender', price: '200', qty: '1' },
    { name: 'knife', price: '10', qty: '4' }
  ],
  'Nikita Smith': [
    { name: 'waffle iron', price: '80', qty: '1' },
    { name: 'knife', price: '10', qty: '2' },
    { name: 'pot', price: '20', qty: '3' }
	] 
} */
