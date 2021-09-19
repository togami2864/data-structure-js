export class SinglyLinkedList<T> {
  head: ListNode<T> = null;
  tail: ListNode<T> = null;
  public isEmpty() {
    return this.head === null;
  }
  public addLast(data: T) {
    // time complexity O(1)
    if (this.isEmpty()) {
      this.head = this.tail = new ListNode(data, null);
    } else {
      this.tail.next = new ListNode(data, null);
      this.tail = this.tail.next;
    }
  }
}

class ListNode<T> {
  data: T;
  next: ListNode<T>;
  constructor(data: T, next: ListNode<T>) {
    this.data = data;
    this.next = next;
  }
}
