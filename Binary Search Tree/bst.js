    var allInput = [];


function valueInsert() {
    inputval =  parseInt(document.getElementById("inpval").value,10);
    document.getElementById("inpval").value = "";
bst.push(inputval);
}
function Node(val) {
    this.value = val;
    this.left = null;
    this.right = null;
    this.x = 500;
  this.y = 70;
}
function BinarySearchTree() {
    this.root = null;
}
BinarySearchTree.prototype.push = function (val) {

    var root = this.root;

    if (!root) {
        this.root = new Node(val);
        var n1 = new Circle(this.root.x, this.root.y, 20);
           var txt = new Text(this.root.x, this.root.y, inputval);
        return;
    }

    var currentRootNode = root;
    var newNode = new Node(val);

    for (var k=1;currentRootNode;k++) {

        if (val < currentRootNode.value) {
            if (!currentRootNode.left) {
                newNode.x = currentRootNode.x - (100/k);
                newNode.y = currentRootNode.y + 70;
                currentRootNode.left = newNode;
                var l1 = new Line(currentRootNode.x, currentRootNode.y, newNode.x, newNode.y);
                var n1 = new Circle(newNode.x, newNode.y, 20);
                var txt = new Text(newNode.x, newNode.y, inputval);

                break;
            }
            else {
                currentRootNode = currentRootNode.left;
            }
        }
        else {
            if (!currentRootNode.right) {
                newNode.x = currentRootNode.x + (100/k);
                newNode.y = currentRootNode.y + 70;
                currentRootNode.right = newNode;
                 var l1 = new Line(currentRootNode.x, currentRootNode.y, newNode.x, newNode.y);
                var n1 = new Circle(newNode.x, newNode.y, 20);
                  var txt = new Text(newNode.x, newNode.y, inputval);
                break;
            }
            else {
                currentRootNode = currentRootNode.right;
            }
        }

    }
}
  var bst = new BinarySearchTree();
