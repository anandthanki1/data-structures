
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}



class LinkedList {

    constructor() {
        this.head = null;
        this.tail = null;
        this._length = 0;
    }

    /**
     * Return the size of Linked List
     */
    length() {
        return this._length;
    }

    /**
     * It inserts value in Linked List
     * @param value - value to be inserted
     */
    insertFirst(value) {
        if(value) {
            if(!this.head) {
                /**
                 * If there is no head assign new Node
                 */
                this.head = new Node(value);
                this.tail = this.head;
            } else {
                /**
                 * If there is head, reassign it to new node by
                 passing old head value as a param to new Node constructor
                 */
                let currentHeadNode = this.head;
                this.head = new Node(value, currentHeadNode);
            }
            this._length++;
        } else {
            throw new Error('Please provide a valid value');
        }
    };

    /**
     * It returns the first node in Linked List
     */
    getFirst() {
        return this.head ? this.head.data : null;
    };

    /**
     * It returns the last node in Linked List
     */
    getLast() {
        return this.tail ? this.tail : null;
    };

    /**
     * It empties the linked list of any nodes
     */
    clear() {
        this.head = null;
        this.tail = null;
        this._length = 0;
    };

    /**
     * It removes the first node in the Linked list
     */
    removeFirst() {
        if(this.head) {
            let prevHead = this.head;
            this.head = prevHead.next;
            this._length--;
        } else {
            throw new Error('Please insert values in Linked List');
        }
    };

    /**
     * It removes the last node in the Linked List
     */
    removeLast() {
        if(!this.head) {
            return;
        }

        if(!this.head.next) {
            this.head = null;
            return;
        }

        let previous = this.head;
        let node = this.head.next;
        while(node.next) {
            previous = node;
            node = node.next;
        }
        this.tail = previous;
        this.tail.next = null;
        this._length--;
    }

    /**
     * Inserts a new node at the end of LinkedList
     * @param value - value to be inserted
     */
    insertLast(value) {
        if(!this.head) {
            this.head = new Node(value);
        }

        this.tail.next = new Node(value);
        this._length++;
    }

    /**
     * Returns the node at provided index
     * @param index - index of LinkedList
     */
    getAt(index) {
        let counter = 0;
        let node = this.head;

        while(node) {
            if(counter === index) {
                return node;
            }
            counter++;
            node = node.next;
        }

        return null;
    }

    /**
     * Removes the node at provided index
     * @param index - index of LinkedList
     */
    removeAt(index) {
        // Does not crash when list is empty
        // Does not crash if index is out of bounds
        if(!this.head || index > this._length - 1 || index < 0) {
            return;
        }
        // Should be able to remove first node
        // Should be able to delete the given index
        // Should be able to delete last node
        if(index === 0) {
            // We are deleting the first node
            // Assign the second node to be head
            this.head = this.head.next;
            return;
        } else {
            let previousNode = this.getAt(index - 1);
            let nodeToBeDeleted = this.getAt(index);
            previousNode.next = nodeToBeDeleted.next;
        }
        this_length--;
    }

    /**
     * Inserts the data at provided index
     * @param data - data to be inserted
     * @param index - index of the LinkedList
     */
    insertAt(data, index) {
        if(!this.head || index < 0) {
            return;
        }

        if(index === 0) {
            let currentHeadNode = this.head;
            this.head = new Node(data, currentHeadNode);
            return;
        } else if(index > this._length) {
            this.tail.next = new Node(data);
            return;
        } else if(index > 0) {
            let previousNode = this.getAt(index - 1);
            let nodeOnIndex = this.getAt(index);
            previousNode.next = new Node(data, nodeOnIndex);
        }
        this._length++;
    }

    /**
     * It finds the midElement in the LinkedList
     */
    midpoint() {
        if(!this.head) {
            return;
        }

        let slow = this.getFirst();
        let fast = this.getFirst();

        while(fast.next && fast.next.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        
        return slow;
    }

    /**
     * It checks if LinkedList is circular
     */
    isCircular() {
        if(!this.head) {
            return;
        }

        let slow = this.getFirst();
        let fast = this.getFirst();

        while(fast.next && fast.next.next) {
            slow = slow.next;
            fast = fast.next.next;

            if(slow === fast) {
                return true;
            }
        }

        return false;
    }

}

const myLinkedList = new LinkedList();