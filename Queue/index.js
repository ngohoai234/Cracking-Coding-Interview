class Queue {
  constructor() {
    this.in = [];
    this.out = [];
  }
  enqueue(val) {
    this.in.push(val);
  }

  dequeue() {
    if (this.out.length === 0) {
      while (this.in.length) {
        this.out.push(this.in.pop());
      }
    }
    return this.out.pop();
  }
  peek() {
    if (this.out.length === 0) {
      while (this.in.length) {
        this.out.push(this.in.pop());
      }
    }
    return this.out[this.out.length - 1];
  }
}

//

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);

console.log(queue.peek());
