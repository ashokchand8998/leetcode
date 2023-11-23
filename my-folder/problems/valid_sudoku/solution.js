/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    let rows = (new Array(9)).fill().map(() => new Array(9));
    let cols = (new Array(9)).fill().map(() => new Array(9));
    let grids = (new Array(3)).fill().map(() => new Array(3));

    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (board[row][col] !== ".") {
                let gridR = Math.floor(row/3);
                let gridC = Math.floor(col/3);
                if ((rows[row] && rows[row][board[row][col]]) ||
                    (cols[col] && cols[col][board[row][col]]) ||
                    (grids[gridR] && grids[gridR][gridC] && grids[gridR][gridC][board[row][col]])
                ) {
                    return false;
                } else {
                    rows[row][board[row][col]] = 1;
                    cols[col][board[row][col]] = 1;
                    if(!grids[gridR][gridC]) {
                        grids[gridR][gridC] = []
                    }
                    grids[gridR][gridC][board[row][col]] = 1;
                }
            }
        }
    }
    return true;
};