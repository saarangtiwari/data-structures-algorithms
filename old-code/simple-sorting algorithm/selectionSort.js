// selection sort:

function selectionSort(inputArray, wall) {

    // wall - index, point to the first number behind the 'wall'.
    let indexOfSmallest = wall;

    // find the smallest number.
    for (let i = wall + 1; i < inputArray.length; i++) {
        if (inputArray[indexOfSmallest] > inputArray[i]) {
            // smallest is on indexOfSmallest.
            indexOfSmallest = i;
        }
    }

    // swap.
    let tempSwap = inputArray[indexOfSmallest];
    inputArray[indexOfSmallest] = inputArray[wall];
    inputArray[wall] = tempSwap;

    while(wall < inputArray.length -1){
        wall++;
        selectionSort(inputArray, wall);
    }

}


let aInput = [36, 10, 15, 23, 2, -1, 1 , 9, 28, 1, 36];
console.log(aInput);

selectionSort(aInput, 0);
console.log(aInput);