class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.items.length === 0)
            return "Queue is empty!";
        return this.items.shift();
    }

    front() {
        return this.items[0];
    }

    display() {
        console.log(this.items);
    }
}


const queue = new Queue();
queue.enqueue("A");
queue.enqueue("B");
queue.enqueue("C");
queue.display();


console.log("Front:", queue.front());
console.log("Removed:", queue.dequeue());
queue.display();