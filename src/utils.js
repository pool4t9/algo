export function findPath(i, j, n, m, arr) {
  let ds = [];
  let paths = [];
  let ans = [];
  helper(i, j, n, m, arr, paths, ds);
  ans = paths.map((path) => {
    let temp = Array(n)
      .fill()
      .map(() => Array(m).fill(0));
    path.forEach((point, idx) => (temp[point[0]][point[1]] = idx + 1));
    return temp;
  });
  return ans;
}

function helper(i, j, n, m, maze, paths, ds) {
  if (i < 0 || j < 0 || i >= n || j >= m || maze[i][j] == 0) return;
  if (i == n - 1 && j == m - 1) {
    ds.push([i, j]);
    paths.push([...ds]);
    ds.pop();
    return;
  }
  maze[i][j] = 0;
  ds.push([i, j]);
  const dirs = [-1, 0, 1, 0, -1];
  for (let k = 0; k < 4; k++) {
    helper(i + dirs[k], j + dirs[k + 1], n, m, maze, paths, ds);
  }
  ds.pop();
  maze[i][j] = 1;
  return;
}
