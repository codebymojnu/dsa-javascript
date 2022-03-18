class Queue{
    constructor(){
        this.items = [];
    }

    // add element to the queue
    add(element){
         this.items.push(element);
    }

    // remove element to the queue
    remove(){
        this.items.shift();
    }

}

const queue = new Queue();
queue.add(1);
console.log(queue.items);
queue.add(5);
console.log(queue.items);
queue.add(3);
console.log(queue.items);
queue.add(4);
console.log(queue.items);
queue.add(0);
console.log(queue.items);
queue.remove();
console.log(queue.items);
queue.remove();
console.log(queue.items);
