function solution(A) {
    let N = A.length;
    let expectedSum = ((N + 1) * (N + 2)) / 2; // N+2 because one element is missing and array has N+1 elements
    let actualSum = 0;

    for (let val of A) {   // iterate values directly
        actualSum += val;
    }

    return expectedSum - actualSum;
}