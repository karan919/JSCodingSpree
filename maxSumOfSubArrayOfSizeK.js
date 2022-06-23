// Q. Find maximum sum of a subarray of size k

function maxSum(nums, k) {
  let sum = 0;
  let max = 0;

  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }
  max = sum;

  for (let i = k; i < nums.length; i++) {
    sum += nums[i] - nums[i - k];

    if (sum > max) {
      max = sum;
      start = i;
    }
  }
  return max;
}

console.log(maxSum([1, 4, 2, 10, 2, 3, 1, 0, 20], 4));
