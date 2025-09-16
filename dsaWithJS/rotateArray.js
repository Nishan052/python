function solution(A, K) {
    const N = A.length;
    if (N === 0) return A;   // Edge case: empty array

    // Effective rotations (K may be larger than N)
    K = K % N;
    if (K === 0) return A;   // No rotation needed

    // Slice last K elements and concatenate with first part
    return A.slice(N - K).concat(A.slice(0, N - K));
}


// OR

function solution(A, K) {
    let n = A.length;
    if (n === 0) return A;

    K = K % n; // important correction
    if (K === 0) return A;

    let rotated = new Array(n);

    // Copy last K elements to the front
    for (let i = 0; i < K; i++) {
        rotated[i] = A[n - K + i];
    }

    // Copy the first n-K elements
    for (let i = 0; i < n - K; i++) {
        rotated[K + i] = A[i];
    }

    return rotated;
}