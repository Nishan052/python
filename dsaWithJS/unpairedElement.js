function solution(A) {
    let result = 0;
    for (let i = 0; i < A.length; i++) {
        result ^= A[i];
    }
    return result;
}


//OR

function solution(A) {
    let counts = {};

    // Count occurrences
    for (let i = 0; i < A.length; i++) {
        let num = A[i];
        if (counts[num]) {
            counts[num] += 1;
        } else {
            counts[num] = 1;
        }
    }

    // Find the element with odd count
    for (let key in counts) {
        if (counts[key] % 2 !== 0) {
            return parseInt(key);
        }
    }
}