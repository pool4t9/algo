const mazeInstruction = [
  {
    id: "1",
    name: "What is project about",
    description:
      "In the maze matrix, 0 means the block is a dead end and 1 means the block can be used in the path from source to destination. The rat can move in 4 directions",
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
      "Create a paths[] array, and a another array ds[] (data structure) which will we used to store indexs where rat can move to reach the destination",
      "Create a recursive function, which takes initial maze, paths[], ds[] position of rat (i, j).",
      "if the position is out of the maze or the position is not valid (maze[i][j]==0) then return.",
      "Mark the position maze[i][j] as 0, push the index to ds[] and check if the current position is destination or not. If destination is reached push the ds to paths[]",
      "Recursively call for position (i+1, j) , (i-1, j), (i,j+1) and (i,j-1).",
      "Unmark position (i, j) and pop the (i,j) from ds[], i.e maze[i][j] = 1.",
      "In final step, we will create solution from generated paths[] from array of indexs",
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
    description: "backtracing, javascript",
    childrens: [],
  },
];

export default mazeInstruction;
