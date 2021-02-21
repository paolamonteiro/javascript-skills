/**
 * Creating a graph with people and their favorite ice cream flavors
 */

class PersonNode {
  constructor(name) {
    this.name = name;
    this.favoriteFlavors = [];
  }

  addFavoriteFlavor(flavor) {
    this.favoriteFlavors.push(flavor);
  }
}

class IceCreamFlavorNode {
  constructor(flavor) {
    this.flavor = flavor;
  }
}

class Graph {
  constructor() {
    this.peopleNodes = [];
    this.iceCreamFlavorNodes = [];
    this.edges = [];
  }

  addPersonNode(name) {
    const personNode = new PersonNode(name);
    this.peopleNodes.push(personNode);
  }

  addIceCreamFlavorNode(flavor) {
    const iceCreamFlavorNode = new IceCreamFlavorNode(flavor);
    this.iceCreamFlavorNodes.push(iceCreamFlavorNode);
  }

  getPerson(name) {
    return this.peopleNodes.find(person => person.name === name);
  }

  getFlavor(flavor) {
    return this.iceCreamFlavorNodes.find(flavor => flavor === flavor);
  }

  addEdge(personName, flavorName) {
    const person = this.getPerson(personName);
    const flavor = this.getFlavor(flavorName);

    person.addFavoriteFlavor(flavor);
    this.edges.push(`${person} - ${flavor}`)
  }

  print() {
    return this.peopleNodes.map(({ name, favoriteFlavors }) => {
      return `${name} => ${favoriteFlavors.map(flavor => `${flavor.flavor},`).join(' ')}`;
    }).join('\n')
  }
}

const graph = new Graph(true);
graph.addPersonNode('Emma');
graph.addPersonNode('Kai');
graph.addPersonNode('Sarah');
graph.addPersonNode('Maranda');
graph.addIceCreamFlavorNode('Chocolate Chip');
graph.addIceCreamFlavorNode('Strawberry');
graph.addIceCreamFlavorNode('Cookie Dough');
graph.addIceCreamFlavorNode('Vanilla');
graph.addIceCreamFlavorNode('Pistachio');

graph.addEdge('Emma', 'Chocolate Chip');
graph.addEdge('Emma', 'Cookie Dough');
graph.addEdge('Emma', 'Vanilla');
graph.addEdge('Kai', 'Vanilla');
graph.addEdge('Kai', 'Strawberry');
graph.addEdge('Kai', 'Cookie Dough');
graph.addEdge('Kai', 'Chocolate Chip');
graph.addEdge('Kai', 'Pistachio');
graph.addEdge('Maranda', 'Vanilla');
graph.addEdge('Maranda', 'Cookie Dough');
graph.addEdge('Sarah', 'Strawberry');

console.log(graph.print());

/**
 * RESULT:
 * Emma => Chocolate Chip, Chocolate Chip, Chocolate Chip,
 * Kai => Chocolate Chip, Chocolate Chip, Chocolate Chip, Chocolate Chip, Chocolate Chip,
 * Sarah => Chocolate Chip,
 * Maranda => Chocolate Chip, Chocolate Chip,
 */