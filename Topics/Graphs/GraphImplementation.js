class Graph {
  constructor() {
    this.adjacentList = {};
    this.numberOfNodes = 0;
  }

  addVertex(node) {
    this.adjacentList[node] = [];
    this.numberOfNodes++;
  }

  addEdge(node1, node2) {
    //undirected graph.We add both connections(Eg:Node 1 is connected to Node 2 and vice versa)
    this.adjacentList[node1].push(node2);
    this.adjacentList[node2].push(node1);
  }
}

const graph = new Graph();

graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);

/*

{
  1: [],
  2: [],
  3: []
}

*/

graph.addEdge(1, 2);
graph.addEdge(2, 3);

/*

{
  1: [2],
  2: [1, 3],
  3: [2]
}

*/

console.log(graph);
