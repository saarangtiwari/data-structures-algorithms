export function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
  const mergedSortedArray: number[] = [];
  if ((!arr1 || !arr1.length) && (!arr2 || !arr2.length)) return [];
  if (!arr1 || !arr1.length) return arr2;
  if (!arr2 || !arr2.length) return arr1;
  let i = 0;
  let j = 0;
  while (i < arr1.length || j < arr2.length) {
    console.log(arr1[i], arr2[j]);
    if (!arr1[i] && arr2[j]) {
      mergedSortedArray.push(arr2[j]);
      j++;
    }
    if (!arr2[j] && arr1[i]) {
      mergedSortedArray.push(arr1[i]);
      i++;
    }
    if (arr1[i] && arr2[j]) {
      if (arr1[i] < arr2[j]) {
        mergedSortedArray.push(arr1[i]);
        i++;
      } else if (arr1[i] > arr2[j]) {
        mergedSortedArray.push(arr2[j]);
        j++;
      } else {
        mergedSortedArray.push(arr1[i], arr2[j]);
        i++;
        j++;
      }
    }

    // console.log(mergedSortedArray);
  }
  return mergedSortedArray;
}
