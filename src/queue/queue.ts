interface QueueInterface<T> {
  // util
  isEmpty(): boolean;
  //primary
  enqueue(data: T): void;
  dequeue(): T;
}

export class Queue<T> implements QueueInterface<T> {
  values: T[];

  constructor() {
    this.values = [];
  }

  public isEmpty() {
    return this.values.length === 0;
  }

  public enqueue(data: T) {
    // time complexity O(1)
    if (this.isEmpty()) {
      this.values[0] = data;
    } else {
      this.values.push(data);
    }
  }

  public dequeue() {
    // time complexity O(1)
    if (this.isEmpty()) throw new Error("under flow");
    return this.values[this.values.length - 1];
  }
}

const queue = new Queue();
queue.enqueue(5);
console.log(queue);
queue.enqueue(6);
console.log(queue);
queue.enqueue(7);
console.log(queue);
queue.dequeue();
console.log(queue);
queue.dequeue();
console.log(queue);
queue.dequeue();
console.log(queue);
queue.dequeue();
console.log(queue);
