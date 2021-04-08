// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

const matrix = [[1, 2, 3], [4, 5, 6], [9, 8, 9]];

let firstDiagonal = 0;
let secondDiagonal = 0;

function diagonalDifference(arr) {
  let positionLength = arr[0].length;
  let left = 0
  let right = 0
  let sum = 0

  for (let i = 0, j = (positionLength - 1); i < positionLength, j >= 0; i++, j--) {
    left += arr[i][i];
    right += arr[i][j];
  }

  sum = left - right;

  if (sum > 0) {
    return sum;
  }
  if (sum < 0) {
    return Math.abs(sum);
  }
  return 0;
}

console.log(diagonalDifference(matrix));
