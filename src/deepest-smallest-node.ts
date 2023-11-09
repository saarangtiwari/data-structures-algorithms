class Node {
  public left: Node;
  public right: Node;
  public value: number;
  constructor(left: Node, right: Node, value: number) {
    this.left = left;
    this.right = right;
    this.value = value;
  }
}

function getSmallestSubTree(node: Node): Node | null {
  let currentLevel = 0;
  let maxLevel = 0;
  let nodeAtMaxLevel: Node;

  if (!node) return null;

  currentLevel++;

  // if(node.value) {

  // }

  if (node.left) {
    dfs(node.left, currentLevel);
  } else if (node.right) {
    dfs(node.right, currentLevel);
  }
  return node;
}

function dfs(node: Node, currentLevel: number): number {
  const level = currentLevel + 1;
  let leftLevel = level;
  let rightLevel = level;
  if (node.left) {
    leftLevel = dfs(node.left, level);
  } else if (node.right) {
    rightLevel = dfs(node.right, level);
  }
  return Math.max(leftLevel, rightLevel);
}
