// Map is another Higher-Order Function, but
// unlike filter, it doesn't throw the objects away, instead it
// transforms them.

// Example to get just the name list:
const pets = [
	{ name: 'Fluffykins', species: 'rabbit' },
	{ name: 'Caro', species: 'dog' },
	{ name: 'Hamilton', species: 'dog' },
	{ name: 'Harold', species: 'fish' },
	{ name: 'Ursula', species: 'cat' },
	{ name: 'Jimmy', species: 'fish' },
]

// Basic JS solution:
const names = [];
for(let i = 0; i < pets.length; i++) {
	names.push(pets[i].name);
};
// log: ["Fluffykins", "Caro", "Hamilton", "Harold", "Ursula", "Jimmy"]

// FP solution using map:
const names2 = pets.map(function(pet) {
	return pet.name
});
// log: ["Fluffykins", "Caro", "Hamilton", "Harold", "Ursula", "Jimmy"]

// Map expects the callback to return any object,
// and we can use this to create completely new objects:

const names3 = pets.map(function(pet) {
	return pet.name + ' is a ' + pet.species;
});
/*
log: 
[ "Fluffykins is a rabbit", 
"Caro is a dog", 
"Hamilton is a dog", 
"Harold is a fish", 
"Ursula is a cat", 
"Jimmy is a fish" ] */