// Bubble sort:

function bubbleSort(inputArray) {
    let alreadySorted = true;
    for (let i = 0; i < inputArray.length - 1; i++) {
        for (let j = 0; j < inputArray.length - i - 1; j++) {
            if (inputArray[j] > inputArray[j + 1]) {
                let temp = inputArray[j];
                inputArray[j] = inputArray[j + 1];
                inputArray[j + 1] = temp;
                alreadySorted = false;
            }
        }
        if(alreadySorted) {
            console.log('already sorted');
            return;
        }
    }
}


let aInput = [36, 10, 15, 23, 2, -1, 1, 9, 28, 1, 36, 500, 323, 43, 2, 1, 4, 5, 66, 77, 8, 4, 5, 454,
    3, 8, 7, 6, 5, -4, 3, 2, 16, 10, 15, 23, 2, 8, 1, 36, 500, 323, 43, 2, 1, 4, 5, 66, 77, 8, 4, 5, 454,
    3, 8, 7, 6, 5, -4, 3, 2, 16, 10, 15, 23, 2, 8, 1, 36, 500, 323, 43, 2, 1, 4, 5, 66, 77, 8, 4, 5, 454,
    3, 8, 7, 6, 5, -4, 3, 2, 16, 10, 15, 23, 2,  1, 36, 500, 323, 43, 2, 1, 4, 5, 66, 77, 8, 4, 5, 454,
    3, 8, 7, 6, 5, -4, 3, 2, 16, 10, 15, 23, 2, 8, 1, 36, 500, 323, 43, 2, 1, 4, 5, 66, 77, 8, 4, 5, 454,
    3, 8, 7, 6, 5, -4, 3, 2, 16, 10, 15, 23, 2, 8, 1, 36, 500, 323, 43, 2, 1, 4, 5, 66, 77, 8, 4, 5, 454,
    3, 8, 7, 6, 5, -4, 3, 2, 16, 10, 15, 23, 2];

    
console.log(aInput);
const d1 = new Date();
const startTime = d1.getTime();
bubbleSort(aInput);
console.log(aInput);
const d2 = new Date();
console.log('final time elapsed');
console.log(d2.getTime() - startTime)