function checkArrayExistence(arr1: string[], arr2: string[]): boolean {
  const arr1Hash = new Map<string, string>();
  for (let i = 0; i < arr1.length; i++) {
    arr1Hash.set(arr1[i], arr1[i]);
  }

  for (let i = 0; i < arr2.length; i++) {
    if (arr1Hash.has(arr2[i])) {
      return true;
    }
  }

  return false;
}

// console.log(checkArrayExistence(["a", "b", "c", "d"], ["x", "y", "z", "a"]));
// console.log(checkArrayExistence(["a", "b", "c", "d"], ["x", "y", "z"]));
