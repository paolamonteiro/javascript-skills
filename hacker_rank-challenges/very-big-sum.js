// Complete the aVeryBigSum function in the editor below. It must return the sum of all array elements.

const list = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];


function aVeryBigSum(arr) {
  const sum = arr.reduce((acc, curr) => {
    return acc += curr;
  }, 0)
  return sum;
}

console.log(aVeryBigSum(list));
