// Q. Find capacity to ship packages within D days.

// input: weights[3,2,2,4,1,4]
// days=3
// Day1=3,2
// Day2=2,4
// Day3=1,4
// Output: 6

function ship(weights, days) {
  function getDays(capacity) {
    let total = 0;
    let days = 1;
    for (let i = 0; i < weights.length; i++) {
      total += weights[i];
      if (total > capacity) {
        days++;
        total = weights[i];
      }
    }
    return days;
  }

  let start = Math.max(...weights);
  let end = weights.reduce((a, b) => a + b);
  while (start < end) {
    const mid = Math.floor((start + end) / 2);
    const D = getDays(mid);
    if (D > days) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }
  return end;
}
console.log(ship([3, 2, 2, 4, 1, 4], 3));
