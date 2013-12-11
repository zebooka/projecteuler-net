// Lattice paths
// Problem 15
//
// Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.
//
// How many such routes are there through a 20×20 grid?

var countRoutes = function (m, n) {
    var matrix = [];
    for (var i = 0; i <= m; i++) {
        matrix[i] = [1];
    }
    for (var j = 1; j <= n; j++) {
        matrix[0][j] = 1;
    }
    for (var i = 1; i <= m; i++) {
        for (var j = 1; j <= n; j++) {
            matrix[i][j] = matrix[i - 1][j] + matrix[i][j - 1];
        }
    }
    console.log(matrix[m][n]);
};

countRoutes(2, 2);
countRoutes(20, 20);
