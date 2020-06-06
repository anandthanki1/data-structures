
class Stack {
 
    constructor() {
        this._storage = {};
        this._keyCount = 0;
    }

    /**
     * Helper functions
     */
    getObjectKeys() {
        return Object.keys(this._storage);
    }

    length() {
        return this._keyCount;
    }

    /**
     * Adds a new value at the end of Stack
     * @param value - the value to be pushed inside Stack
     */
    push(value) {
        if(value !== undefined && !(value instanceof Array)) {
            let keys = this.getObjectKeys();
            if(keys.length === 0) {
                this._storage[this._keyCount] = value;
            } else {
                this._keyCount++;
                this._storage[this._keyCount] = value;
            }
        } else {
            throw new Error('Please give a valid value.');
        }
    }

    /**
     * Removes the value from the end of Stack and returns it.
     */
    pop() {
        let keys = this.getObjectKeys();
        if(keys.length === 0) {
            return undefined;
        } else {
            let value = this._storage[keys.length - 1];
            delete this._storage[keys.length - 1];
            this._keyCount--;
            return value;
        }
    }

    /**
     * Returns the value at the end of Stack without deleting it
     */
    peek() {
        let keys = this.getObjectKeys();
        if(keys.length === 0) {
            return undefined;
        } else {
            return this._storage[keys.length - 1];
        }
    }
}

const myStack = new Stack();