function findFactorialIterative(n) {
    let factorial = 1;

    for (let i = n; i >= 1; i--) {
        factorial *= i;
    }

    return factorial;
}

console.log(findFactorialIterative(5)); // 120

/*
factorial*=i
is equal to
factorial=factorial*i
*/