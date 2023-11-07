// simple function:

function factorial(n) {

    let result = n;

    while (n > 1) {
        n--;
        result *= n;
    }
    return result;
}


function recursiveFactorial(n) {
    if (n <= 1) {
        return 1;
    } else {
        return n * recursiveFactorial(n - 1);
    }
}
console.log(recursiveFactorial(6));