function mergeSort(aInput) {

    if (aInput.length <= 1) {
        // return if length is 1 or below:
        return aInput;
    }
    // get mid point:
    const mid = Math.floor(aInput.length / 2);

    // split the array into two halves recursively:
    let a = mergeSort(aInput.slice(0, mid));
    let b = mergeSort(aInput.slice(mid));

    // final array to hold the result:

    let result = [];

    // keep track of indexes we are going to iterate
    // when sorting elements in a and b:

    let indexA = indexB = 0;

    while (indexA < a.length && indexB < b.length) {

        let elementA = a[indexA];
        let elementB = b[indexB];

        // push smaller values to the result and increment their respective indexes:
        if (elementA < elementB) {
            result.push(elementA);
            indexA++;
        } else {
            result.push(elementB);
            indexB++;
        }
    }

    while (indexA < a.length) {
        result.push(a[indexA]);
        indexA++;
    }

    while (indexB < b.length) {
        result.push(b[indexB]);
        indexB++;
    }

    return result;

}


console.log(mergeSort([36, 10, 15, 23, 2, -1, 1, 9, 28, 1, 36]));