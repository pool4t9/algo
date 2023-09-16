class TreeNode {
  constructor(data, parent = null) {
    this.key = Math.random() * 100;
    this.data = data;
    // this.parent = parent;
    // this.children = [];
    this.left = null;
    this.right = null;
  }

  get isLeaf() {
    return this.children.length === 0;
  }

  get hasChildren() {
    return !this.isLeaf;
  }
}

class Tree {
  constructor(data) {
    this.root = new TreeNode(data);
  }
  addNode(data, posLeft) {
    if (posLeft) {
      this.root.left = new TreeNode(data);
      return;
    }
    this.root.right = new TreeNode(data);
  }
}

const root = new Tree({ name: "p1", age: "1e3" });

root.addNode({ name: "p2", age: "1e2" }, true);
root.addNode({ name: "p3", age: "1e2" }, false);

// root.root.left=new TreeNode({ name: "p4", age: "1e2" })
root.root.left.left=new TreeNode({ name: "p4", age: "1e2" })
export default root;
