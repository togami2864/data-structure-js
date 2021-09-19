import { SinglyLinkedList } from "../../dataStructure/LinkedList/SinglyLinkedList";

describe("Data Structure: Singly Linked List", () => {
  const LinkedList = new SinglyLinkedList();
  describe("", () => {
    const EmptyLinkedList = new SinglyLinkedList();
    it("should add data to the empty linked list", () => {
      const DATA = 5;
      EmptyLinkedList.addLast(DATA);
      expect(EmptyLinkedList.head.data).toBe(DATA);
      expect(EmptyLinkedList.head.next).toBe(null);
      expect(EmptyLinkedList.tail.data).toBe(DATA);
    });
  });
});
