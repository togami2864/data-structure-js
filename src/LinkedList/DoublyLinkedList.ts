// need refactoring
export class DoublyLinkedList<T> {
  head: ListNode<T>;
  tail: ListNode<T>;
  public isEmpty() {
    return this.head === null;
  }
  public addToTail(data: T) {
    if (this.isEmpty()) {
      this.head = this.tail = new ListNode(data, null, null);
    } else {
      this.tail.next = new ListNode(data, null, this.tail);
    }
  }
  public search(data: T) {
    let currentNode = this.head;
    while (currentNode !== null && currentNode.data === data) {
      currentNode = currentNode.next;
    }
    return currentNode || null;
  }
}

class ListNode<T> {
  data: T;
  next: ListNode<T>;
  prev: ListNode<T>;
  constructor(data: T, next: ListNode<T>, prev: ListNode<T>) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}
