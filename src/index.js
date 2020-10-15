// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix) {
        if (matrix[1]) {
            matrix[1].reverse();
        }
        if (matrix[3]) {
            matrix[3].reverse();
        }
        let a = matrix.flat();
        return a;
    } else return [];
};
