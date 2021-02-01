/**
 * A hash function is a function where you put in a string 1 and you get back a number
 * 
 * But there are some requirements for a hash function:
 * 1 - It needs to be consistent. For example, suppose you put in “apple” and
 * get back “4”. Every time you put in “apple”, you should get “4” back.
 * Without this, your hash table won’t work.
 * 
 * 2 - It should map different words to different numbers. For example, a
 * hash function is no good if it always returns “1” for any word you put
 * in. In the best case, every different word should map to a different number.
 */

const phoneBook = {};

phoneBook['Paola'], 989327975;
phoneBook['Bruno'] = 984093784;
phoneBook['Lala'] = 515151515;
phoneBook['Lorem'] = 424242424;

const hash = (book, contact) => {
	console.log(book[contact]);
};

hash(phoneBook, 'Paola');

// Map implementation:
const phoneBook2 = new Map();

phoneBook.set('Paola', 989327975);
phoneBook.set('Bruno', 984093784);
phoneBook.set('Lala', 515151515);
phoneBook.set('Lorem', 424242424);

const hash2 = (book, contact) => {
	console.log(book.get(contact));
};

hash2(phoneBook2, 'Paola');