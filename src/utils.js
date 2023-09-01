export function findPath(i, j, di, dj, n, m, arr) {
  let ds = [];
  let paths = [];
  let ans = [];
  
  const vis = Array(n)
    .fill()
    .map(() => Array(m).fill(0));
  helper(i, j, di, dj, n, m, arr, paths, ds, vis);

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

function helper(i, j, di, dj, n, m, maze, paths, ds, vis) {
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
  const dirs = [-1, 0, 1, 0, -1];
  for (let k = 0; k < 4; k++) {
    helper(i + dirs[k], j + dirs[k + 1], di, dj, n, m, maze, paths, ds, vis);
  }
  ds.pop();
  vis[i][j] = 0;
  return;
}
