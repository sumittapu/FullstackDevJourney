class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.items.length === 0)
            return "Stack is empty!";
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    display() {
        console.log(this.items);
    }
}


const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.display();

console.log("Top:", stack.peek());
console.log("Removed:", stack.pop());
stack.display();