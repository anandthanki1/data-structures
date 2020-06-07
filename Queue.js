
class Queue {

    constructor() {
        this._storage = {};
        this._length = 0;
        this._headIndex = 0;
    }

    /**
     * It returns a new Value at the end of the queue.
     * @param value - value to enqueue
     */
    enqueue(value) {
        if(value && !(value instanceof Array)) {
            this._storage[this._length + this._headIndex] = value;
            this._length++;
        } else {
            throw new Error('Please enter a valid value');
        }
    }

    /**
     * It returns the first item at the beginning of the queue.
     */
    dequeue() {
        const keys = Object.keys(this._storage);
        if(keys.length !== 0) {
            let head = this._storage[keys[this._headIndex]];
            delete this._storage[keys[this._headIndex]];
            this._length--;
            this._headIndex++;
            return head;
        } else {
            return undefined;
        }
    }

    /**
     * It return value at the beginning of the queue without 
     removing it.
     */
    peek() {
        const keys = Object.keys(this._storage);
        if(keys.length !== 0) {
            return this._storage[keys[0]];
        } else {
            return undefined
        }
    }
}

const myQueue = new Queue();