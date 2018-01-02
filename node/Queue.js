class Queue {
  constructor() {
    this.data = [];
  }
  
  size() {
    return this.data.length;
  }
  
  peek() {
    return this.data[0];
  }
  
  add(d) {
    this.data.push(d);
  }
  
  remove() {
    if (this.size()) {
      const toReturn = this.data[0];
      this.data.shift();
      return toReturn;
    }
  }
}

module.exports = Queue;