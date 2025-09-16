function solution(A) {
    let totalSum = 0;
    for (let val of A) {
        totalSum += val;  // create the total sum of the array
    }

    let minDiff = Infinity;
    let leftSum = 0;

    // iterate until N-1 (because both sides must be non-empty)
    for (let i = 0; i < A.length - 1; i++) {
        leftSum += A[i];
        let rightSum = totalSum - leftSum;
        let diff = Math.abs(leftSum - rightSum);

        if (diff < minDiff) {
            minDiff = diff;
        }
    }

    return minDiff;
}