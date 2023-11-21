const matrix = [
    [ 0, 1, 0, 0, 1 ],
    [ 1, 0, 0, 0, 1 ],
    [ 1, 1, 0, 1, 1 ],
    [ 0, 1, 1, 0, 0 ],
    [ 0, 0, 0, 0, 0 ]
];

function getNeighbors(node, matrix) {
    // Create an array to hold the valid neighbors
    let neighbors = []
    // UP:
        // Identify the node above the current node, if it exists
        // Push that node into the new array
    const upRow = node[0] - 1;
    const upCol = node[1];
    if (upRow >= 0) {
        neighbors.push([upRow, upCol]);
    }
    // DOWN:
        // Identify the node below the current node, if it exists
        // Push that node into the new array
    const downRow = node[0] + 1;
    const downCol = node[1];
    if (downRow < matrix.length) {
        neighbors.push([downRow, downCol]);
    }
    // LEFT:
        // Identify the node to the left of the current node, if it exists
        // Push that node into the new array
    const leftRow = node[0];
    const leftCol = node[1] - 1;
    if (leftCol >= 0) {
        neighbors.push([leftRow, leftCol]);
    }

    // RIGHT:
        // Identify the node to the right of the current node, if it exists
        // Push that node into the new array
    const rightRow = node[0];
    const rightCol = node[1] + 1;
    if (rightCol < matrix[0].length) {
        neighbors.push([rightRow, rightCol]);
    }
    // Return the neighbors array
    return neighbors;
}

// returns the correct neighbors from an internal node
getNeighbors([2,2], matrix) // returns [ [1,2], [3,2], [1,2], [3,2] ]

// returns the correct neighbors from a corner node
getNeighbors([0,0], matrix) // returns [ [1,0], [0,1] ]

// returns the correct neighbors from an edge node
getNeighbors([2,0], matrix) // returns [ [1,0], [3,0], [2,1] ]
