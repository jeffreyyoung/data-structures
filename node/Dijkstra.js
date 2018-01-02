const PriorityQueue = require('./PriorityQueue');

class Graph {
  constructor(graph = {}) {
    this.graph = graph;
  }
  
  _ensureNodeExists(n) {
    if (!this.graph[n]) {
      this.graph[n] = {}
    }
  }
  
  addEdge(from, to, weight) {
    this._ensureNodeExists(from);
    this._ensureNodeExists(to);
    this.graph[from][to] = weight;
  }
  
  getNodes() {
    return Object.keys(this.graph);
  }
  
  getNeigbors(n) {
    return Object.keys(this.graph[n]);
  }
  
  getEdgeWeight(from, to) {
    return this.graph[from][to];
  }
}

function dijkstraShortestPath(from, to, graph) {
  const INFINITY = 1/0;
  let distances = {};
  let previous = {};
  
  const queue = new PriorityQueue();
  
  graph.getNodes().forEach(n => {
    if (n === from) {
      distances[n] = 0;
      queue.add(0, n);
    } else {
      distances[n] = INFINITY;
      queue.add(INFINITY, n);
    }
  });
  
  while (queue.size()) {
    let curNode = queue.pop();
    let distanceToCurNode = distances[curNode];
    graph.getNeigbors(curNode).forEach(neighbor => {
      const edgeWeight = graph.getEdgeWeight(curNode, neighbor);
      const distanceToNeighborFromCurNode = distanceToCurNode + edgeWeight;
      if (distanceToNeighborFromCurNode < distances[neighbor]) {
        distances[neighbor] = distanceToNeighborFromCurNode;
        previous[neighbor] = curNode;
        console.log('distance to: ', neighbor, distanceToNeighborFromCurNode);
        queue.add(distanceToNeighborFromCurNode, neighbor);
      }
    });
  }
}


let g = new Graph();

g.addEdge('a', 'b', 4)
g.addEdge('a', 'c', 6)
g.addEdge('b', 'c', 1)
g.addEdge('b', 'e', 5)
g.addEdge('c', 'e', 1)
g.addEdge('c', 'b', 1)

dijkstraShortestPath('a', 'e', g);


