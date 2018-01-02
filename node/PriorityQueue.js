module.exports = class PriorityQueue {
  constructor() {
    this.nodes = [];
  }
  
  add(priority = 0, data = {}) {
    this.nodes.push({priority, data});
    this.sort();
  }
  
  sort() {
    this.nodes.sort((a,b) => a.priority - b.priority);
  }
  
  pop() {
    return this.nodes.shift().data;
  }
  
  size() {
    return this.nodes.length;
  }
}