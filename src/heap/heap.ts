interface HeapInterface {
  data: number[];
  //primary
  poll();
  peek();
  push(key: number);

  parent(i: number): number;
  left(i: number): number;
  right(i: number): number;

  //util
  isEmpty(): boolean;
  swap(i1, i2): void;
  heapifyUp();
  heapifyDown();
}

export class Heap implements HeapInterface {
  data: number[];
  constructor() {
    this.data = [];
  }

  isEmpty() {
    return this.data.length === 0;
  }

  peek() {
    return this.data[0];
  }

  parent(i: number) {
    return Math.floor((i - 1) / 2);
  }
  left(i: number) {
    return i << 1;
  }
  right(i: number) {
    return (i << 1) + 1;
  }

  swap(i1: number, i2: number) {
    const temp = this.data[i1];
    this.data[i1] = this.data[i2];
    this.data[i2] = temp;
  }

  push(key: number) {
    this.data[this.data.length] = key;
    this.heapifyUp();
  }

  heapifyUp() {
    let current = this.data.length - 1;

    while (this.data[current] > this.data[this.parent(current)]) {
      this.swap(current, this.parent(current));
      current = this.parent(current);
    }
  }

  poll() {
    const maxValue = this.data[0];
    this.data[0] = this.data[this.data.length - 1];
    this.data.length--;
    this.heapifyDown();
    return maxValue;
  }

  heapifyDown() {
    let current = 0;
    while (this.data[this.left(current)] !== undefined) {
      let biggestChild = this.left(current);
      if (
        this.data[this.right(current)] !== undefined &&
        this.data[this.right(current)] > this.data[this.left(current)]
      ) {
        biggestChild = this.right(current);
      }
      if (this.data[current] < this.data[biggestChild]) {
        this.swap(current, biggestChild);
        current = biggestChild;
      } else {
        return;
      }
    }
  }
}

const heap = new Heap();
console.log(heap);
heap.push(25);
heap.push(5);
heap.push(40);
heap.push(70);
heap.push(90);
heap.push(44);

console.log(heap.data.join(","));

let a = [];
a.push(heap.poll());
a.push(heap.poll());
a.push(heap.poll());
a.push(heap.poll());
a.push(heap.poll());

console.log("Top 5 items:", a);

console.log(heap.data.join(","));
