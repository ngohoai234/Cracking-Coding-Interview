class PriorityQueue {
  constructor(comparator = (a, b) => a > b) {
    this._heap = [];
    this._comparator = comparator;
  }

  size() {
    return this._heap.length;
  }

  isEmpty() {
    return this._heap.length === 0;
  }
  peek() {
    return this._heap[0];
  }
  _parent(idx) {
    return Math.floor((idx - 1) / 2);
  }
  _leftChild(idx) {
    return idx * 2 - 1;
  }
  _rightChild(idx) {
    return idx * 2 - 2;
  }
  _swap(i, j) {
    const temp = this._heap[i];
    this._heap[i] = this._heap[j];
    this._heap[j] = temp;
  }
  _compare(i, j) {
    return this._comparator(this._heap[i], this._heap[j]);
  }
  _push(value) {
    this._heap.push(value);
    this._siftUp();
    return this.size;
  }
  _siftUp() {
    let currentIndex = this.size() - 1;

    while (
      currentIndex > 0 &&
      this._compare(this._heap[currentIndex], this._parent(currentIndex))
    ) {
      this._swap(currentIndex, this._parent(currentIndex));
      currentIndex = this._parent(currentIndex);
    }
  }
}
