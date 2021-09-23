export class SinglyLinkedList<T> {
  head: ListNode<T> = null;
  tail: ListNode<T> = null;
  public isEmpty() {
    return this.head === null;
  }
  public clear() {
    this.head = null;
    this.tail = null;
  }
  public addToTail(data: T) {
    // time complexity O(1)
    if (this.isEmpty()) {
      this.head = this.tail = new ListNode(data, null);
    } else {
      this.tail.next = new ListNode(data, null);
      this.tail = this.tail.next;
    }
  }
  public addToHead(data: T) {
    // time Complexity O(1)
    if (this.isEmpty()) {
      this.head = this.tail = new ListNode(data, null);
    } else {
      this.head = new ListNode(data, this.head);
    }
  }
  public search(data: T) {
    // time complexity O(n)
    let currentNode = this.head;
    while (currentNode !== null && currentNode.data !== data) {
      currentNode = currentNode.next;
    }
    return currentNode || null;
  }
  public removeAtHead() {
    // time complexly O(1)
    if (this.isEmpty()) throw new Error("There is no data");
    const data = this.head.data;
    this.head = this.head.next;
    return data;
  }
  public removeAtTail() {
    //time complexity O(n)
    if (this.isEmpty()) throw new Error("There is no data");
    const data = this.tail.data;
    let currentNode = this.head;
    while (currentNode.next !== this.tail) {
      currentNode = currentNode.next;
    }
    currentNode.next = null;
    this.tail = currentNode;
    return data;
  }
  public removeInMiddle(index: number) {
    // time complexity O(n)
    let currentNode = this.head;
    for (let i = 0; i < index - 1; i++) {
      currentNode = currentNode.next;
    }
    const peekForward = currentNode.next.next;
    currentNode.next = currentNode.next.next;
    if (peekForward === null) this.tail = currentNode;
  }
}

export class ListNode<T> {
  data: T;
  next: ListNode<T>;
  constructor(data: T, next: ListNode<T>) {
    this.data = data;
    this.next = next;
  }
}
