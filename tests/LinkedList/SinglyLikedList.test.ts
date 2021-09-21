import {
  SinglyLinkedList,
  ListNode,
} from "../../dataStructure/LinkedList/SinglyLinkedList";

describe("Data Structure: Singly Linked List", () => {
  const LinkedList = new SinglyLinkedList();
  describe("Insert at head/tail", () => {
    describe("empty LinkedList", () => {
      const TEST_DATA = 5;
      beforeEach(() => {
        LinkedList.clear();
      });
      expect(LinkedList.head).toBe(null);
      expect(LinkedList.tail).toBe(null);

      it("should add the data to the head of empty LinkedList", () => {
        LinkedList.addToHead(TEST_DATA);
        expect(LinkedList.head.data).toBe(TEST_DATA);
        expect(LinkedList.head.next).toBe(null);
        expect(LinkedList.tail.data).toBe(TEST_DATA);
        expect(LinkedList.tail.next).toBe(null);
      });

      it("should add the data to the tail of empty LinkedList", () => {
        LinkedList.addToTail(TEST_DATA);
        expect(LinkedList.head.data).toBe(TEST_DATA);
        expect(LinkedList.head.next).toBe(null);
        expect(LinkedList.tail.data).toBe(TEST_DATA);
        expect(LinkedList.tail.next).toBe(null);
      });
    });
    describe("single node", () => {
      const TEST_DATA = 5;
      const ADD_DATA = 6;
      beforeEach(() => {
        LinkedList.clear();
        LinkedList.addToHead(TEST_DATA);
      });

      it("should add the data to the head", () => {
        LinkedList.addToHead(ADD_DATA);
        expect(LinkedList.head.data).toBe(ADD_DATA);
        expect(LinkedList.tail.data).toBe(TEST_DATA);
      });

      it("should add the data to the tail", () => {
        LinkedList.addToTail(ADD_DATA);
        expect(LinkedList.head.data).toBe(TEST_DATA);
        expect(LinkedList.tail.data).toBe(ADD_DATA);
      });
    });
  });
});
