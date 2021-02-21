/**
 * Writing a Breadth-First Search Algorithm
 * Steps:
 * 1. Create a queue to start;
 * 2. Pop a person off the queue;
 * 3. Check id this person is a mango seller;
 * 4. If yes, this is done. If not, add their neighbors to the queue;
 * 5. Mark that person as searched, and loop until get the mango seller 
 * or the queue is empty.
 */

const graph = {};

graph['you'] = ['alice', 'bob', 'claire'];
graph['bob'] = ['anuj', 'peggy'];
graph['alice'] = ['peggy'];
graph['claire'] = ['thom', 'jonny'];
graph['anuj'] = [];
graph['peggy'] = [];
graph['thom'] = [];
graph['jonny'] = [];


// Function to determine whether a person is a seller
const isSeller = name => name === "jonny";

// Function to find a mango seller
const search = name => {
  let searchQueue = [...graph[name]];
  const searched = [];

  while (searchQueue.length) {
    const person = searchQueue.shift();

    if (searched.indexOf(person) === -1) {
      if (isSeller(person)) {
        console.log(`${person} is a mango seller!`);
        return true;
      }
      searchQueue = searchQueue.concat(graph[person]);
      searched.push(person);
    }
  }
  return false;
}

console.log(search('you'));
/**
 * RESULT:
 * jonny is a mango seller!
 */
