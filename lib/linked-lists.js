'use strict';

const Node = require('./node.js');

class LinkedList {

  constructor () {
    this.head = null;
  }

  // This is like the push value
  append(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      return this; 
    }

    let currentNode = this.head;
    while(currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = node;
    return this;
  }

  prepend(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      return this; 
    }
    node.next = this.head;
    this.head = node; 
  }

  // reverse(list) {
    
  // }

  // remove() {
  // }
  
}

// let list = new LinkedList();
// console.log(list);

module.exports = LinkedList;