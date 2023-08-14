
export function findPath(i, j, n, m, arr) {
    let paths = Array(n).fill().map(() => Array(m).fill(0));
    helper(i, j, n, m, arr, paths);
    return paths;
}

function helper(i, j, n, m, maze, ans) {
    if (i < 0 || j < 0 || i >= n || j >= m || maze[i][j]) return false;
    if (i == n - 1 && j == m - 1) {
        ans[i][j] = 1;
        return;
    }
    maze[i][j] = 1;
    const dirs = [-1, 0, 1, 0, 1];
    for (let i = 0; i < 4; i++) {
        if (helper(i + dirs[i], j + dirs[i + 1], n, m, maze, ans)) return true
    }
    ans[i][j] = 0;
    return false;

}

