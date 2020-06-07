// Basic JS function example:
function triple(x) {
	return x * 3;
}

// In Functional Programming, an anonymous function can be created and asigned to a value:
const triple2 = function(x) {
	return x * 3;
}

const waffle = triple2;
waffle(10);

// In FP, functions are values!
// Or, it can be passed into other functions...

// Higher-Order Functions:

// Example to filter all animals that are dogs:
const animals = [
	{ name: 'Fluffykins', species: 'rabbit' },
	{ name: 'Caro', species: 'dog' },
	{ name: 'Hamilton', species: 'dog' },
	{ name: 'Harold', species: 'fish' },
	{ name: 'Ursula', species: 'cat' },
	{ name: 'Jimmy', species: 'fish' },
]

// Basic JS solution:
const dogs = [];
for(let i = 0; i < animals.length; i++) {
	if(animals[i].species === 'dog')
	dogs.push(animals[i]);
}

// In FP, there is the COMPOSITION
// It allows to compose a lot of small functions into bigger functions

// FP solution using filter:
const dogs2 = animals.filter(function(animal) {
	return animal.species === 'dog'
});

// Filter function returns a new array with the filtered objects

// But, it can be a little bit more functional, to make this code 
// more composable and reusable:
const isDog = function(animal) {
	return animal.species === 'dog';
}

const dogs3 = animals.filter(isDog);
