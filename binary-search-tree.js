// Before starting, copy and paste your guided practice work from
// `binary-search-tree.js` into this file

// Your code here
// Do not change this
class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }

  class BinarySearchTree {

    constructor() {
      // Your code here
      this.root = null;
    }

    insert(val, currentNode=this.root) {
      // Your code here
      let newNode = new TreeNode(val);
      if (!this.root) {
        this.root = newNode;
        return this;
      }

      if (val < currentNode.val) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return this;
        } else {
          return this.insert(val, currentNode.left)
        }
      }

        if (val > currentNode.val) {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          } else {
            return this.insert(val, currentNode.right);
          }
        }
      }




    search(val) {
      let current = this.root;
      if (!this.root) return false;

      while (current) {
        if (val < current.val) {
          current = current.left
        } else if (val > current.val) {
          current = current.right;
        } else return true;
      }
      return false;
    }


    preOrderTraversal(currentNode = this.root) {
      // Your code here
      if (!currentNode) return;
      console.log(currentNode.val);
      this.preOrderTraversal(currentNode.left);
      this.preOrderTraversal(currentNode.right);

    }


    inOrderTraversal(currentNode = this.root) {
      if (!currentNode) return;

      this.inOrderTraversal(currentNode.left);
      console.log(currentNode.val);
      this.inOrderTraversal(currentNode.right);
    }


    postOrderTraversal(currentNode = this.root) {
      if (!currentNode) return;

      this.postOrderTraversal(currentNode.left);
      this.postOrderTraversal(currentNode.right);
      console.log(currentNode.val);
    }

      // Breadth First Traversal - Iterative
    breadthFirstTraversal() {
      let queue = [];
      if (!this.root) return;
      queue.push(this.root);
      while (queue.length) {
        let current = queue.shift();

        console.log(current.val);
        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
      }
    }

    // Depth First Traversal - Iterative
    depthFirstTraversal() {
      if (!this.root) return;

      let stack = [];
      stack.push(this.root);
       while (stack.length) {
        let current = stack.pop();

        console.log(current.val);
        if (current.left) stack.push(current.left);
        if (current.right) stack .push(current.right);
       }
  }
  }

  module.exports = { BinarySearchTree, TreeNode };
