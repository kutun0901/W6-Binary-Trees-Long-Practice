const { BinarySearchTree, TreeNode } = require("./binary-search-tree.js");
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST(rootNode) {
  // let min = Infinity
  // const current = rootNode;
  // if (!rootNode) return;
  //  while (current) {
  //   if (current.val < min) {
  //     min = current;
  //   } else {
  //     current = current.left;
  //   }
  //  }
  //  return current.val;

  if (!rootNode) return undefined;
  if (rootNode.left) {
    return findMinBST(rootNode.left);
  }
  return rootNode.val;
}

function findMaxBST(rootNode) {
  if (!rootNode) return undefined;
  if (rootNode.right) {
    return findMaxBST(rootNode.right);
  }
  return rootNode.val;
}

function findMinBT(rootNode) {
  let min = rootNode.val;
  // let currentNode = rootNode
  // if right and left
  if (rootNode.left) min = Math.min(min, findMinBT(rootNode.left));
  if (rootNode.right) min = Math.min(min, findMinBT(rootNode.right));
  return min;
}

function findMaxBT(rootNode) {
  // Your code here
  let max = rootNode.val;
  // let currentNode = rootNode
  // if right and left
  if (rootNode.left) max = Math.max(max, findMaxBT(rootNode.left));
  if (rootNode.right) max = Math.max(max, findMaxBT(rootNode.right));
  return max;
}

function getHeight(rootNode) {
  //! Recursive Solve -------------------
  // if (!rootNode) return -1;
  // // let height = 0;
  // let lHeight = getHeight(rootNode.left);
  // let rHeight = getHeight(rootNode.right);
  // if (lHeight > rHeight) return lHeight + 1;
  // else return rHeight + 1;
  //! -------------------

  //todo ------------------------------
  //! Assesment ******************************************

  if (!rootNode) return -1;
  rootNode.height = 0;
  let stack = [];
  let depthHeight = -1;
  stack.push(rootNode);
  while (stack.length) {
    let current = stack.pop();
    depthHeight = Math.max(current.height, depthHeight);
    if (current.left) {
      current.left.height = current.height + 1;
      stack.push(current.left);
    }
    if (current.right) {
      current.right.height = current.height + 1;
      stack.push(current.right);
    }
  }
  return depthHeight;

  //todo ------------------------------
  //! Assesment ******************************************

  //! Iterative Solve

  // if (!rootNode) return -1;
  // let stack =[rootNode];
  // let height = -1;
  // while (stack.length) {
  //   let length = stack.length;
  //   for ( i = 0; i < length; i++) {
  //     let current =stack.pop();
  //     if (current.left) stack.push(current.left);
  //     if (current.right) stack.push(current.right);
  //   }
  //   height++;
  // }
  // return height;

  //! ---------------------
}

function balancedTree(rootNode) {
  // Your code here
  if (!rootNode) return new Error("tree is empty");
  const queue = [rootNode];
  while (queue.length) {
    let shifted = queue.shift();
    let leftHeight = getHeight(shifted.left);
    let rightHeight = getHeight(shifted.right);
    if (Math.abs(leftHeight - rightHeight) > 1) return false;
    if (shifted.left) queue.push(shifted.left);
    if (shifted.right) queue.push(shifted.right);
  }
  return true;
}
//! depth traverse solve
// function balancedTree(rootNode) {
//   //Step 1: Create an array as stack, push the root to stack
//   let stack = [rootNode];
//   while (stack.length) {// Step 2: while the stack is not empty repeat step 3 and 4
//     //Step 3: pop a node from stack and get left and right height
//     let node = stack.pop();

//     let lHeight = getHeight(node.left);
//     let rHeight = getHeight(node.right);
//     if (Math.abs(lHeight - rHeight) > 1) return false;
//     //Step 4: push the 2 children
//     if (node.left) stack.push(node.left);
//     if (node.right) stack.push(node.right);
//   }
//   return true;
// }

//! recursive solve
// function balancedTree(rootNode) {
//   if (!rootNode) return true;
//   if (
//     Math.abs(getHeight(rootNode.left) - getHeight(rootNode.right)) <= 1 &&
//     balancedTree(rootNode.left) &&
//     balancedTree(rootNode.right)
//   ) {
//     return true;
//   }
//   return false;
// }

// function countNodes(rootNode) {
//   // Your code here
//   if (!rootNode) return 0;
//   let count = 0;

//   let stack = [];

//   stack.push(rootNode);
//   while (stack.length) {
//     let current = stack.pop();
//     count++;
//     if (current.left) {
//       stack.push(current.left);
//     }
//     if (current.right) {
//       stack.push(current.right);
//     }
//   }
//   return count;
// }

function countNodes(rootNode) {
  // Your code here
  if (!rootNode) return 0;

  return countNodes(rootNode.left) + countNodes(rootNode.right) + 1;
}

function getParentNode(rootNode, target) {
  // Your code here
}

function inOrderPredecessor(rootNode, target) {
  // Your code here
}

function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent
  // Undefined if the target cannot be found
  // Set target based on parent
  // Case 0: Zero children and no parent:
  //   return null
  // Case 1: Zero children:
  //   Set the parent that points to it to null
  // Case 2: Two children:
  //  Set the value to its in-order predecessor, then delete the predecessor
  //  Replace target node with the left most child on its right side,
  //  or the right most child on its left side.
  //  Then delete the child that it was replaced with.
  // Case 3: One child:
  //   Make the parent point to the child
}

module.exports = {
  findMinBST,
  findMaxBST,
  findMinBT,
  findMaxBT,
  getHeight,
  countNodes,
  balancedTree,
  getParentNode,
  inOrderPredecessor,
  deleteNodeBST,
};
