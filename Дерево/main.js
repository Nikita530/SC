
let root = {
    number: 10,
    left: null,
    right: null
}

let stringRepresentation = '';

function Add(number) {
    let currentNode = root;
    while ((number < currentNode.number && currentNode.left != null) || (number > currentNode.number && currentNode.right != null)) {
        if (number < currentNode.number) {
            currentNode = currentNode.left;
        }
        else {
            currentNode = currentNode.right;
        }
    }

    if (number == currentNode.number) {
        return;
    }

    if (number < currentNode.number) {
        currentNode.left = {
            number: number,
            left: null,
            right: null
        }
        console.log('Number', currentNode.left.number, ' was added to left of', currentNode.number, ' node');
    }
    else {
        currentNode.right = {
            number: number,
            left: null,
            right: null
        }
        console.log('Number', currentNode.right.number, ' was added to right of', currentNode.number, ' node');
    }
}

function Remove(number) {
    let currentNode = root;
    do {
        if (number < currentNode.number) {
            currentNode = currentNode.left;
        }
        else {
            currentNode = currentNode.right;
        }
    }
    while ((currentNode != null) && (number != currentNode.number));

    if (currentNode != null) {
        console.log(currentNode.number, 'node was deleted');
        currentNode = null;
    }
    else {
        console.log('Node was not found');
    }
}

function Bypass(option) {
    stringRepresentation = '';
    switch (option) {
        case 'LCR':
            LCR(root);
            break;
        case 'RCL':
            RCL(root);
            break;
        case 'CLR':
            CLR(root);
            break;
    }
    console.log(stringRepresentation);
}
function LCR(node) {
    if (node.left != null) {
        LCR(node.left);
    }

    stringRepresentation = stringRepresentation + node.number;

    if (node.right != null) {
        LCR(node.right);
    }
}

function RCL(node) {
    if (node.right != null) {
        RCL(node.right);
    }

    stringRepresentation = stringRepresentation + node.number;

    if (node.left != null) {
        RCL(node.left);
    }
}

function CLR(node) {
    stringRepresentation = stringRepresentation + node.number;

    if (node.left != null) {
        CLR(node.left);
    }

    if (node.right != null) {
        CLR(node.right);
    }
}

Add(5);
Add(3);
Add(15);
Add(12);
Add(20);
Add(17);
Bypass('LCR');
Bypass('RCL');
Bypass('CLR');
Remove(7);