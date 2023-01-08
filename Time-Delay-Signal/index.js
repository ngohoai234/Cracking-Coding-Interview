class PriorityQueue {
  constructor(comparator = (a, b) => a > b) {
    this._heap = [];
    this._comparator = comparator;
  }

  size() {
    return this._heap.length;
  }

  peek() {
    return this._heap[0];
  }

  isEmpty() {
    return this._heap.length === 0;
  }

  _parent(idx) {
    return Math.floor((idx - 1) / 2);
  }

  _leftChild(idx) {
    return idx * 2 + 1;
  }

  _rightChild(idx) {
    return idx * 2 + 2;
  }

  _swap(i, j) {
    [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
  }

  _compare(i, j) {
    return this._comparator(this._heap[i], this._heap[j]);
  }

  push(value) {
    this._heap.push(value);
    this._siftUp();

    return this.size();
  }

  _siftUp() {
    let nodeIdx = this.size() - 1;

    while (0 < nodeIdx && this._compare(nodeIdx, this._parent(nodeIdx))) {
      this._swap(nodeIdx, this._parent(nodeIdx));
      nodeIdx = this._parent(nodeIdx);
    }
  }

  pop() {
    if (this.size() > 1) {
      this._swap(0, this.size() - 1);
    }

    const poppedValue = this._heap.pop();
    this._siftDown();
    return poppedValue;
  }

  _siftDown() {
    let nodeIdx = 0;

    while (
      (this._leftChild(nodeIdx) < this.size() &&
        this._compare(this._leftChild(nodeIdx), nodeIdx)) ||
      (this._rightChild(nodeIdx) < this.size() &&
        this._compare(this._rightChild(nodeIdx), nodeIdx))
    ) {
      const greaterChildIdx =
        this._rightChild(nodeIdx) < this.size() &&
        this._compare(this._rightChild(nodeIdx), this._leftChild(nodeIdx))
          ? this._rightChild(nodeIdx)
          : this._leftChild(nodeIdx);

      this._swap(greaterChildIdx, nodeIdx);
      nodeIdx = greaterChildIdx;
    }
  }
}

const networkDelayTime = (times, n, k) => {
  const distances = new Array(n).fill(Infinity);
  const adjList = distances.map(() => []);
  const heap = new PriorityQueue((a, b) => distances[a] < distances[b]);
  for (let i = 0; i < times.length; i++) {
    const [source, target, weight] = times[i];
    adjList[source - 1].push([target - 1, weight]);
  }
  distances[k - 1] = 0;
  heap.push(k - 1);

  while (!heap.isEmpty()) {
    const currentVertex = heap.pop();
    const adjacent = adjList[currentVertex];
    for (let i = 0; i < adjacent.length; i++) {
      const neighBoringVertex = adjacent[i][0];
      const weight = adjacent[i][1];

      if (distances[currentVertex] + weight < distances[neighBoringVertex]) {
        distances[neighBoringVertex] = distances[currentVertex] + weight;
        heap.push(neighBoringVertex);
      }
    }
  }
  const maxValue = Math.max(...distances);
  return Number.isFinite(maxValue) ? maxValue : -1;
};
console.log(networkDelayTime([[1, 2, 1]], 2, 2));
