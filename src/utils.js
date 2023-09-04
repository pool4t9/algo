const directionsValue = {
  left: [0, -1],
  up: [-1, 0],
  right: [0, 1],
  down: [1, 0],
  diagonalUpperLeft: [-1, -1],
  diagonalUpperRight: [-1, 1],
  diagonalDownLeft: [1, -1],
  diagonalDownRight: [1, 1],
};

export function findPath(i, j, di, dj, n, m, arr, directions = []) {
  let ds = [];
  let paths = [];
  let ans = [];

  const vis = Array(n)
    .fill()
    .map(() => Array(m).fill(0));
  helper(i, j, di, dj, n, m, arr, paths, ds, vis, directions);

  ans = paths.map((path) => {
    let temp = Array(n)
      .fill()
      .map(() => Array(m).fill(0));
    path.forEach((point, idx) => (temp[point[0]][point[1]] = idx + 1));
    return temp;
  });
  return ans;
}

/**
 *
 * @description 1--> path, 0--> block
 * @returns
 */

function helper(i, j, di, dj, n, m, maze, paths, ds, vis, directions) {
  if (i < 0 || j < 0 || i >= n || j >= m || maze[i][j] == 0 || vis[i][j] === 1)
    return;
  if (i == di && j == dj) {
    ds.push([i, j]);
    paths.push([...ds]);
    ds.pop();
    return;
  }
  vis[i][j] = 1;
  ds.push([i, j]);
  // const dirs = [-1, 0, 1, 0, -1];
  directions.forEach((direction) => {
    let points = directionsValue[direction];
    let newI = i + points[0];
    let newJ = j + points[1];
    helper(newI, newJ, di, dj, n, m, maze, paths, ds, vis, directions);
  });
  ds.pop();
  vis[i][j] = 0;
  return;
}
