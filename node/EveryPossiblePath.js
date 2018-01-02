class Path {
  constructor(data = []) {
    this.data = data;
  }
  
  has(node) {
    return this.data.indexOf(node) !== -1;
  }
  
  add(node) {
    this.data.push(node);
  }
  
  size() {
    return this.data.length;
  }
  
  first() {
    return this.data[0];
  }
  
  last() {
    return this.data[this.data.length - 1];
  }
}

function everyPossiblePath(from, to, edges) {
  
  let paths = [];
  
  function explore(curNode, path) {
    if (path.size() && path.first() === from && path.last() === to) {
      paths.push(path.data);
    } else {
      edges[curNode]
        .filter(n => !path.has(n)) //get unvisited nodes
        .forEach(n => explore(n, new Path([...path.data, n])));
    }
  }
  
  explore(from, new Path([from]));
  return paths;
  
}

let edges = {
  'a':['b', 'd', 'e'],
  'b':['c', 'e'],
  'c':['d'],
  'd':['e', 'b'],
  'e':[],
}

console.log(everyPossiblePath('a', 'e', edges));