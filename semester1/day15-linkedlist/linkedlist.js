class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Append node at end
  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  // Insert node at start
  insertAtStart(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  // Delete node by value
  delete(value) {
    if (!this.head) return;

    if (this.head.data === value) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    while (current.next && current.next.data !== value) {
      current = current.next;
    }

    if (current.next) {
      current.next = current.next.next;
    }
  }

  // Display all nodes
  display() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const list = new LinkedList();

// Append nodes
list.append(10);
list.append(20);
list.append(30);

// Insert at start
list.insertAtStart(5);

// Delete a value
list.delete(20);

console.log("Linked List:");
list.display();
