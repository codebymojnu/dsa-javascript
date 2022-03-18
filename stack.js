// program to implement stack data structure

class Stack{
    constructor(){
        this.items = [];
    }

    // add item to stack
    add(element){
        return this.items.push(element);
    }

    // remove item from the stack
    remove(){
        if(this.items.length > 0){
            return this.items.pop();
        }
    }

    // stack size
    size(){
        return this.items.length;
    }

    // clear the stack
    clear(){
       this.items = [];
    }
}

const stack = new Stack();

stack.add(1);
stack.add(2);
stack.add(3);
console.log(stack.items);
stack.remove();
console.log(stack.size());
stack.clear();
console.log(stack.items);

