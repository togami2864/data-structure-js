interface StackInterface<T> {
  // util
  isEmpty(): boolean;
  // primary
  push(data: T);
  pop(): T;
}

export class Stack<T> implements StackInterface<T> {
  values: T[];
  constructor() {
    this.values = [];
  }
  public isEmpty() {
    return this.values.length === 0;
  }

  public push(data: T) {
    // time complexity O(1)
    this.values.push(data);
  }
  public pop() {
    // time complexity O(1)
    if (this.isEmpty()) throw new Error("Under Flow");
    const value = this.values[this.values.length - 1];
    this.values.splice(this.values.length - 1);
    return value;
  }
}

const stack = new Stack();
stack.push(5);
console.log(stack);
stack.push(6);
console.log(stack);
stack.pop();
console.log(stack);
stack.pop();
console.log(stack);
stack.pop();
