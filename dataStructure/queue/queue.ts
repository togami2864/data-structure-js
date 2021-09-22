export class Queue<T> {
  head = -1;
  tail = 0;
  size = 0;
  values;

  constructor(size: number) {
    this.size = size;
    this.values = new Array(this.size);
  }
  public isEmpty() {
    return this.head === -1;
  }
  public enqueue(data: T) {
    if (this.isEmpty() || this.values.every((val) => val === null)) {
      this.head = 0;
      this.values[this.head] = data;
    } else {
      this.tail += 1;
      this.values[this.tail] = data;
    }
  }
  public dequeue() {
    if (this.isEmpty()) throw new Error("under flow");
    const value = this.values[this.head];
    this.values.splice(this.head, 1);
    return value;
  }
}

const queue = new Queue(5);
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
