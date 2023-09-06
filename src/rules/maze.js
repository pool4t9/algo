const mazeInstruction = [
  {
    id: "1",
    name: "What is project about",
    description:
      "In the maze matrix, 0 means the block is a dead end and 1 means the block can be used in the path from source to destination. The rat can move upto in all 8 directions and it will return all the possible ways to reach the destination from starting point.",
    childrens: [],
  },
  {
    id: "2",
    name: "How to use it",
    description:
      "U can select numbes of row and columns for matric, and also u can select the start point, end point and even block the path (blok)",
    childrens: [],
  },
  {
    id: "3",
    name: "Approch",
    description:
      "Form a recursive function, which will follow a path and check if the path reaches the destination or not. If the path does not reach the destination then backtrack and try other paths. ",
    childrens: [],
  },
  {
    id: "4",
    name: "Algorithm",
    description: " ",
    steps: [
      "<strong>Initialization</strong>: We start by creating two arrays, paths[] and ds[], which will be used to store information about the rat's movement in the maze.",
      "<strong>Recursive Function:</strong>: We define a recursive function that will explore the maze and find paths from the current position to the destination.",
      "<strong>Base Cases</strong>: <ul> <li>We ensure that the current position (i, j) is within the maze boundaries. If the rat goes out of bounds, we stop exploring in that direction.</li> <li> We check if the current position (i, j) is a valid move. In other words, is it an open path (not a wall or an obstacle)? If it's not a valid move, we don't proceed in that direction. </li> <li>We also check if the current block has already been visited. If it has, we avoid revisiting it to prevent infinite loops.</li> <li>We also check if the current block has already been visited. If it has, we avoid revisiting it to prevent infinite loops.</li> </ul> ",
      "<strong>Marking the Position</strong>: <ul> <li>If the current position is valid and has not been visited, we mark it as visited by setting vis[i][j] to 0.</li> <li>We record the current position (i, j) by pushing it onto the ds[] array.</li> <li>We check if the current position is the destination. If it is, we have found a valid path, so we add the ds[] array (which contains the path) to the paths[] array.</li> </ul>",
      "<strong>Recursive Calls</strong>: After marking the current position and checking for a destination, we recursively explore all possible directions:<ul><li>(i+1, j): Moving down\n (i-1, j): Moving up\n (i, j+1): Moving right\n (i, j-1): Moving left\n (i-1, j-1): Moving diagonally up-left\n (i-1, j+1): Moving diagonally up-right\n (i+1, j-1): Moving diagonally down-left\n (i+1, j+1): Moving diagonally down-right</li></ul>",
      "<strong>Unmarking the Position</strong>: After exploring all possible paths from the current position, we unmark the current position by setting maze[i][j] back to 1. This allows us to backtrack and explore other paths.",
      "<strong>Final Step</strong>: Once the recursive calls have explored all paths, we have stored valid paths in the paths[] array",
    ],
    childrens: [],
  },
  {
    id: "5",
    name: "Complexity Analysis",
    steps: [
      "Time Complexity: O(2^(n^2)). The recursion can run upper-bound 2^(n^2) times.",
      "Auxiliary Space: O(n^2). Output matrix is required so an extra space of size n*n is needed.",
    ],
    childrens: [],
  },
  {
    id: "6",
    name: "Topics covered",
    description: "",
    childrens: [],
    topics: [
      "Backtracing",
      "Javascript",
      "ReactJs (useState, useEffect, useContext)",
    ],
  },
];

export default mazeInstruction;
