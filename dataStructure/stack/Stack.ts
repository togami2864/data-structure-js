export class Stack<T> {
  top: number = -1;
  values = [];
  public isEmpty() {
    return this.top === -1;
  }
  public push(value: T) {
    // time complexity O(1)
    this.top += 1;
    this.values[this.top] = value;
  }
  public pop() {
    // time complexity O(1)
    if (this.isEmpty()) throw new Error("Under Flow");
    const value = this.values[this.top];
    this.top -= 1;
    this.values = this.values.slice(0, this.top + 1);
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
