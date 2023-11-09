export function hasPairWithSum2(array: number[], sum: number): boolean {
  if (!array || array.length == 0 || !sum) return false;

  let leftIndex = 0;
  let rightIndex = array.length - 1;

  while (leftIndex != rightIndex) {
    const currentCursorSum = array[leftIndex] + array[rightIndex];
    if (currentCursorSum == sum) return true;
    if (currentCursorSum > sum) rightIndex--;
    if (currentCursorSum < sum) leftIndex++;
  }

  return false;
}

// console.log(hasPairWithSum2([1, 2, 3, 4, 5], 7));
// console.log(hasPairWithSum2([1, 3, 4, 5], 7));
// console.log(hasPairWithSum2([1, 3, 5], 7));
// console.log(hasPairWithSum2([1, 3, 5], 8));

/**
 * 1, 5  = 6 -> < 7
 * increment left index
 * 2,5 = 7 -> = 7 return true
 */
