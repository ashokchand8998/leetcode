/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    let rows = [];
    let cols = [];
    let grids = [];
    for (let count = 0; count < 3; count++) {
        for (let countj = 0; countj < 3; countj++) {
            let grid = []
            for (let i = countj * 3; i < ((countj + 1) * 3); i++) {
                for (let j = count * 3; j < ((count + 1) * 3); j++) {
                    if (board[i][j] != ".") {
                        rows[i] = rows[i] || [];
                        rows[i].push(board[i][j])
                        cols[j] = cols[j] || [];
                        cols[j].push(board[i][j])
                        grid.push(board[i][j])
                    }
                }
            }
            if (grid.length) {
                grids.push(grid);
            }
        }
    }
    rows = rows.filter(row => !!row)
    cols = cols.filter(col => !!col)
    for (let row of rows) {
        if (new Set(row).size !== row.length) {
            return false;
        }
    }
    for (let col of cols) {
        if (new Set(col).size !== col.length) {
            return false;
        }
    }
    for (let i = 0; i < grids.length; i++) {
        if (new Set(grids[i]).size !== grids[i].length) {
            return false;
        }
    }
    return true;
};