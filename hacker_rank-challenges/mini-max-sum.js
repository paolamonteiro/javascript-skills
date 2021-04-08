const array = [1, 2, 3, 4, 5, 6, 9, 8, 9];

function miniMaxSum(arr) {
  let sum = arr.reduce((a, b) => a + b);
  let maxVal = Math.max(...arr);
  let minVal = Math.min(...arr);
  console.log((sum - maxVal) + ' ' + (sum - minVal));
}

miniMaxSum(array);
