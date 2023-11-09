import { BST } from "./binary-search-tree";

const bst = new BST.BinarySearchTree();
bst.insert(9);
bst.insert(4);
bst.insert(6);
bst.insert(20);
bst.insert(170);
bst.insert(15);
bst.insert(1);
// console.log(bst.root);

console.log(bst.lookup(15));
console.log(bst.lookup(4));
