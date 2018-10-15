[![Build Status](https://www.travis-ci.com/ashley-breunich/lab-linked-lists.svg?branch=master)](https://www.travis-ci.com/ashley-breunich/lab-linked-lists)

![cf](http://i.imgur.com/7v5ASc8.png) Linked List Data Structure
================================================================

## Submission Instructions
* Follow the data structures submission instructions

### Before you begin
* You'll need to initialize the implementation folder as a new node module, install your dependencies, setup your npm script commands, and pull in your config files


## Requirements
* implement a Singly Linked List (SLL) data structure
* implement `append(value)`, `prepend(value)`, `reverse()`, and `remove(offset)` methods to the SLL class
* implement `serialize()` and `deserialize()` methods on the class
* in a comment within each function, note the it's Big-O runtime

* implement a Doubly Linked List (DLL) data structure
* implement `append(value)`, `prepend(value)`, `reverse()`, and `remove(offset)` methods to the SLL class
* implement `serialize()` and `deserialize()` methods on the class
* in a comment within each function, note the it's Big-O runtime

#### Testing
  * write at least three test assertions for each method of the Linked List Data Structure
  * organize your tests into appropriate describe/it blocks for test output readability

##  Documentation
In order to use this program and get it running on your own computer, you will need to go to the [GitHub link](hhttps://github.com/ashley-breunich/lab-linked-lists), fork the repository, and then clone it down to your machine.

After that, you will want to make sure you install eslint and lint. You can do that by typing **npm i eslint** and **npm i lint** into the command line.

You can run the tests by installing JEST. You can do so by typing **npm i jest** in your command line after you have run npm init and set up your package.json. Once you have that set up run **jest --watchAll** in your command line to run the tests. This will allow you to see what tests are passing/failing every time you make a save. 

For more documentation on Jest, click [here](https://jestjs.io/docs/en/getting-started).

#### Append(Value)
You should be passing through a value you would like to add to the end of the linked list. 

Say your current node tree contains the following strings: 'John' -- 'Eric' -- 'Maddie'. If you pass through 'Alyssa' you will get the following updated linked list: 

'John' -- 'Eric' -- 'Maddie' -- 'Alyssa'

###### See below code sample that runs this function

```
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
```

#### Prepend(Value)

You should be passing through a value you would like to add to the beginning of the linked list. 

Say your current node tree contains the following strings: 'John' -- 'Eric' -- 'Maddie'. If you pass through 'Alyssa' you will get the following updated linked list: 

'Alyssa' -- 'John' -- 'Eric' -- 'Maddie'

###### See below code sample that runs this function

```
  prepend(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      return this; 
    }
    node.next = this.head;
    this.head = node; 
  }
```