'use strict';

let LL = require('../../lib/linked-lists.js');

describe('Linked List', () => {

  it('constructor()', ()=> {
    let list = new LL();
    expect(list.head).toBeNull();
  });

  it('append()', ()=> {
    let list = new LL();
    let initialValue = 'John';
    list.append(initialValue);
    expect(list.head.value).toEqual(initialValue);

    let newValue = 'Cathy';
    list.append(newValue);
    expect(list.head.value).toEqual(initialValue);

    let anotherOne = 'Mary';
    list.append(anotherOne);

    // console.log(list);
    
  });

  it('prepend()', ()=> {
    let list = new LL();
    list.append('John');
    list.append('Cathy');
    list.append('Mary');
    list.prepend('Joey');
    expect(list.head.value).toEqual('Joey');

    console.log(list);
    
  });

  it('reverse()', ()=> {
    let list = new LL();
    list.append('1');
    list.append('2');
    list.append('3');
    list.append('4');
    list.append('5');
    // console.log(list);
  });

});