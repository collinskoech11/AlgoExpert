/**
 * # Shift Linked LIst
 * Write a function that takes the head of a Singly LInked LIst and  an integer `k`, shifts the list in place (i.e doesnt create a brand new list )
 * by k positions , and returns its new head.
 * 
 * Shifting a LInked LIst means movin its nodes forward and backward and wrapping them around the list where appropriate.
 * For example, shifting a linked list forward by one position would make its tail become the new  head of the linked list 
 * 
 * Whether nodes are moved forward or backward is determined by whether `k` is positive or negative .
 * 
 * Each `Linked LIst` node has an integer `value` as well as `next` node pointing to the next node in the list or to `none`/`null`
 * if its the tai of the list.
 * 
 * you can assume that the input LInked List will always have at least one node; in other words the head will never be `none`/`null`
 * 
 * ## Sample Input
 * 
 * `head = 0 -> 1 -> 2 -> 3 -> 4 -> 5 //the head node with value 0
 * k = 2`
 * 
 * ## Sample Output 
 * 
 * `4 -> 5 -> 0 -> 1 -> 2 -> 3 // the head node with value 4`
 * 
 *
 */



function shiftLinkedList(head, k){

    let listLength = 1;
    let listTail = head;
    while (listTail.next !== null){
        listTail = listTail.next;
        listLength++;
    }

    const offset = Math.abs(k) % listLength;
    if (offset === 0) return head;

    const newTailPosition = k > 0 ? listLength - offset : offset;
    let newTail = head;
    for (let i = 1; i < newTailPosition; i++){
        newTail = newTail.next;
    }

    const newHead = newTail.next;
    newTail.next = null;
    listTail.next = head;
    return newHead;
}

class linkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}



exports.shiftLinkedList = shiftLinkedList;