/**
 * River Sizes 
 * 
 * Youre given 2-D array (a matrix) of potential unequal height and width only containing `0`s and `1`s. Each `0` represents land and each `1` represents part of a river. A river consists of any number of `1`s that are either horizontally or vertically adjascent(but not diagonally adjacent). THe number of adjacent `1`s forming a river determine its size.
 * 
 * Write a function that returns an array of the sizes of all the rivers represented in the input matrix. TH esizes dont need to be in any particular order
 */
function riverSizes(matrix) {
    // Write your code here.
      const sizes = [];
      const visited = matrix.map(row => row.map(value => false));
      for (let i = 0; i < matrix.length; i++){
          for (let j = 0; j < matrix[i].length; j++){
              if (visited[i][j]) continue;
              traverseNode(i, j, matrix, visited, sizes);
          }
      }
      return sizes;
  }
  
  function traverseNode(i, j, matrix, visited, sizes){
      let currentRiverSize = 0;
      const nodesToExplore = [[i, j]];
      while (nodesToExplore.length) {
          const currentNode = nodesToExplore.pop();
          i = currentNode[0];
          j = currentNode[1];
          if (visited[i][j]) continue;
          visited[i][j] = true;
          if (matrix[i][j] === 0) continue;
          currentRiverSize++;
          const unvisitedNeighbors = getUnvisitedNeighbors(i, j, matrix, visited);
          for (const neighbor of unvisitedNeighbors) {
              nodesToExplore.push(neighbor)
          }
      }
      if (currentRiverSize > 0)sizes.push(currentRiverSize);
  }
  function getUnvisitedNeighbors(i, j, matrix, visited) {
      const unvisitedNeighbors = [];
      if (i > 0 && !visited[i - 1][j]) unvisitedNeighbors.push([i - 1, j]);
      if (i < matrix.length - 1 && !visited[i + 1][j]) unvisitedNeighbors.push([i + 1, j]);
      if (j > 0 && !visited[i][j - 1]) unvisitedNeighbors.push([i, j - 1]);
      if (j < matrix[0].length -  1 && !visited[i][j + 1]) unvisitedNeighbors.push([i, j + 1]);
      return unvisitedNeighbors;
  }
  // Do not edit the line below.
  exports.riverSizes = riverSizes;