import _ from 'lodash';

const heroes = [
	{ name: 'Wolverine', power: 'claws', isReal: false },
	{ name: 'Batman', power: 'rich', isReal: false },
	{ name: 'Iron Man', power: 'rich', isReal: true },
	{ name: 'Hulk', power: 'strength', isReal: true },
];

const getElementIndex = _.findIndex(heroes, (hero) => {
	return hero.name === 'Batman';
});
console.log(getElementIndex); // 1

const getElementByIndex = _.nth(heroes, 1);
console.log(getElementByIndex); // { name: 'Batman', power: 'rich', isReal: false }

_.forEach(heroes, (hero) => {
	console.log(hero.name); // Wolverine, Batman, Iron Man, Hulk
});

const filteredHeroes = _.filter(heroes, (hero) => {
	return hero.isReal;
});

console.log(filteredHeroes);
// [
//   { name: 'Iron Man', power: 'rich', isReal: true },
//   { name: 'Hulk', power: 'strength', isReal: true }
// ]

const chunked = _.chunk(heroes, 2);
console.log(chunked);
// [
//   [
//     { name: 'Wolverine', power: 'claws', isReal: false },
//     { name: 'Batman', power: 'rich', isReal: false }
//   ],
//   [
//     { name: 'Iron Man', power: 'rich', isReal: true },
//     { name: 'Hulk', power: 'strength', isReal: true }
//   ]
// ]

const unrealHeroes = _.dropWhile(heroes, (hero) => {
	return !hero.isReal;
});

console.log(unrealHeroes);
// [
//   { name: 'Iron Man', power: 'rich', isReal: true },
//   { name: 'Hulk', power: 'strength', isReal: true }
// ]

const first = _.first(heroes);
console.log(first); // { name: 'Wolverine', power: 'claws', isReal: false }

const head = _.head(heroes);
console.log(head); // { name: 'Wolverine', power: 'claws', isReal: false }

const last = _.last(heroes);
console.log(last); // { name: 'Hulk', power: 'strength', isReal: true }

const camelCase = _.camelCase('iron man');
console.log(camelCase); // ironMan

const kebabCase = _.kebabCase('iron man');
console.log(kebabCase); // iron-man

const capitalize = _.capitalize('iron man');
console.log(capitalize); // Iron man
