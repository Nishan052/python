function solution(A) {
    A.sort((a, b) => a - b); // sort ascending
    let N = A.length;

    for (let i = 0; i < N - 2; i++) {
        if (A[i] >= 0 && A[i] + A[i+1] > A[i+2]) {
            return 1;
        }
    }

    return 0;
}