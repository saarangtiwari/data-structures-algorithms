export namespace BST {
  class Node {
    public left: Node | null;
    public right: Node | null;
    public value: number;

    constructor(value: number) {
      this.left = null;
      this.right = null;
      this.value = value;
    }
  }

  export class BinarySearchTree {
    public root: Node | null;
    constructor() {
      this.root = null;
    }

    public insert(value: number) {
      this.root = this.insertRecursively(value, this.root);
    }

    public lookup(value: number): Node | null {
      return this.lookupRecursively(value, this.root);
    }

    private lookupRecursively(value: number, node: Node | null): Node | null {
      if (!node) return null;
      if (value == node.value) return node;
      if (value > node.value) return this.lookupRecursively(value, node.right);
      if (value < node.value) return this.lookupRecursively(value, node.left);
      return null;
    }

    private insertRecursively(value: number, node: Node | null): Node {
      if (!node) {
        return new Node(value);
      }

      if (value > node.value) {
        node.right = this.insertRecursively(value, node.right);
      } else {
        node.left = this.insertRecursively(value, node.left);
      }
      return node;
    }
  }
}
