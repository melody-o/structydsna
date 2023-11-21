/*Given an object representing friendships in a social network,
write a function socialConnections that takes in a name and an integer degrees and
returns a list of all users within the degrees of friendship from the given name.

Alice's first-degree friends are Bob and Frank, and Charlie and Geraldine are second-degree friends.
*/

friendships = {
    'Alice': ['Bob', 'Frank'],
    'Bob': ['Alice', 'Charlie', 'Geraldine'],
    'Charlie': ['David', 'Bob'],
    'David': ['Charlie', 'Frank'],
    'Eve': [],
    'Frank': ['Alice', 'Charlie'],
    'Geraldine': ['Bob']
  }

  function getNeighbors(node, graph) {
    return graph[node];
  }

  function socialConnections(name, degrees, graph) {
    // Create a queue and enqueue a path to the starting node
    const queue = [[name]];

    // Create a set to store visited nodes
    const visited = new Set();

    const friends = [];

    // While the queue is not empty...
    while (queue.length > 0) {
      // Dequeue the first path
      let path = queue.shift(); //alice
      // console.log(path, 'path')

      for (item of path) {
        if (!visited.has(item)) {
            visited.add(item)
            if (path.length > 1 && path.length <= degrees + 1) {
                friends.push(currentNode);
              }

              // Put paths to all its neighbors in the back of the queue
              let neighbors = getNeighbors(currentNode, graph);
              for (let i = 0 ; i < neighbors.length ; i++) {
                let pathCopy = [...path];
                pathCopy.push(neighbors[i]);
                queue.push(pathCopy);
              }
        }
      }

      // grab the last node from the path
    //   let currentNode = path[path.length - 1]; // [frank]
      // console.log(currentNode, 'currentNode')

      // and check if it's been visited
    //   if (!visited.has(currentNode)) {
    //     // If not, mark it as visited
    //     visited.add(currentNode);

    //     // Add to the friends array if the path is within the number of degrees
    //     if (path.length > 1 && path.length <= degrees + 1) {
    //       friends.push(currentNode);
    //     }

    //     // Put paths to all its neighbors in the back of the queue
    //     let neighbors = getNeighbors(currentNode, graph);
    //     for (let i = 0 ; i < neighbors.length ; i++) {
    //       let pathCopy = [...path];
    //       pathCopy.push(neighbors[i]);
    //       queue.push(pathCopy);
    //     }
    //   }
    }

    return friends;

}

  console.log(socialConnections('Alice', 1, friendships));
  // ['Bob', 'Frank']

  console.log(socialConnections('Alice', 2, friendships));
  // ['Bob', 'Frank', 'Charlie', 'Geraldine']
