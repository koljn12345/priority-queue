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
		if(this.root) {
			let detach;
			detach=this.detachRoot();
			this.restoreRootFromLastInsertedNode(detach);

		}
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
		this.root=null;
		this.parentNodes=[];
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
		if(node.parent) {
			if(node.data>node.parent.data) {
				if(this.parentNodes.indexOf(node.parent)>=0) {
					let tempIndexCh;
					let tempIndexParent;
					tempIndexCh=this.parentNodes.indexOf(node);
					tempIndexParent=this.parentNodes.indexOf(node.parent);
					this.parentNodes[tempIndexCh]=node.parent;
					this.parentNodes[tempIndexParent]=node;
				}
				else {
					this.parentNodes[this.parentNodes.indexOf(node)]=node.parent;
				}
				node.swapWithParent();
				this.shiftNodeUp(node);
			}
		}
		else this.root=node;
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
