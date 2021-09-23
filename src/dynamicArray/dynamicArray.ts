// need refactoring
export class dynamicArray<T> {
  private array: T[] | null;
  private size: number = 0;
  private capacity: number;

  constructor(capacity: number) {
    if (capacity < 0) throw new Error("Illegal Capacity:" + capacity);
    this.capacity = capacity;
    this.array = new Array<T>(capacity);
  }

  public isEmpty(): boolean {
    return this.size === 0;
  }
  public clear() {
    for (let i = 0; i < this.size; i++) {
      this.array[i] = null;
      this.size = 0;
    }
  }

  public lookup(index: number) {
    // time complexity -> O(1)
    if (index < 0 || index >= this.capacity)
      throw new Error("index is out of array:" + index);
    return this.array[index];
  }

  public search(element: T) {
    // time complexity -> O(n)
    for (let i = 0; i < this.size; i++) {
      if (element === this.array[i]) return i;
    }
    return new Error("The array doesn't have:" + element);
  }

  public insert(index: number, element: T) {
    // time complexity -> O(1)
    if (index < 0 || index >= this.capacity)
      throw new Error("index is out of array:" + index);
    this.array[index] = element;
  }

  public append(element: T) {
    // time complexity -> O(1) :amortized
    if (this.capacity < this.size - 1) {
      if (this.capacity === 0) this.capacity = 1;
      else this.capacity *= 2; // double the size
      const newArray = new Array<T>(this.capacity);
      for (let i = 0; i <= this.size; i++) newArray[i] = this.array[i];
      this.array = newArray;
    }
    this.array[this.size + 1] = element;
  }
}
