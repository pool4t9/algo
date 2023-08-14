
export function findPath(i, j, n, m, arr) {
    let paths = [];
    let ds = []
    helper(i, j, n, m, arr, paths, ds);
    console.log(paths, '************')
    return paths;
}

function helper(i, j, n, m, maze, ans, ds) {
    if (i < 0 || j < 0 || i >= n || j >= m || maze[i][j] == 0) return false;
    if (i == n - 1 && j == m - 1) {
        console.log('here')
        ds.push([i, j]);
        ans.push(ds);
        ds.pop();
        return true;
    }
    maze[i][j] = 0;
    ds.push([i, j]);

    helper(i - 1, j, n, m, maze, ans, ds);
    helper(i + 1, j, n, m, maze, ans, ds);
    helper(i, j - 1, n, m, maze, ans, ds);
    helper(i, j + 1, n, m, maze, ans, ds);
    // console.log(ds)
    ds.pop();
    maze[i][j] = 1;
    return false;
}