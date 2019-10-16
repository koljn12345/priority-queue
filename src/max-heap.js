const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root= null;
		this.parentNodes= [];
		
	} 

	push(data, priority) {
		let node;
		node= new Node(data,priority);
		this.insertNode(node);
		this.shiftNodeUp(node);
	}

	pop() {
		
	}

	detachRoot() {
		
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		
	}

	isEmpty() {
		
	}

	clear() { 
		
	}

	insertNode(node) {
		let currentIndex= this.parentNodes.length-1;
		if(!this.parentNodes.length) {this.root=node;
		this.parentNodes.push(node);}
		else {
			this.parentNodes[0].appendChild(node);
			if(this.parentNodes[0].left && this.parentNodes[0].right) {
				this.parentNodes.shift();
			}
			this.parentNodes.push(node);
		}

	}

	shiftNodeUp(node) {
		
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
