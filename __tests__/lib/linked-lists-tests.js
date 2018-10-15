'use strict';

let LL = require('../../lib/linked-lists.js');

describe('Linked List Constructor', () => {

  it('constructor() will be null', ()=> {
    let list = new LL();
    expect(list.head).toBeNull();
  });

});

describe('Append', () => {

  it('Append will keep the same head value when new values are appended.', ()=> {
    let list = new LL();
   
    list.append(1);  
    list.append(2);
    list.append(3);

    expect(list.head.value).toBe(1);
    expect(list.head.next.value).toBe(2);
    expect(list.head.next.next.value).toBe(3);
      
  });

  it('if there is no head, the head will become the node value entered', ()=> {
    let list = new LL();
    list.prepend('1');
    expect(list.head.value).toBe('1');
        
  });

});

describe('Prepend', () => {

  it('prepend() will change the head to the most recently prepended value', ()=> {
    let list = new LL();
    list.append('John');
    list.append('Cathy');
    list.append('Mary');
    list.prepend('Joey');
    list.prepend('Alyssa');
    expect(list.head.value).toBe('Alyssa');
    expect(list.head.next.value).toBe('Joey');
    expect(list.head.next.next.value).toBe('John');
    console.log(list);
        
  });

  it('if there is no head, the head will become the node value entered', ()=> {
    let list = new LL();
    list.prepend('Joey');
    expect(list.head.value).toBe('Joey');
        
  });

});