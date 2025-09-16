function solution(A) {
    let N = A.length;
    let seen = new Set();
    let sum = 0;

    for (let val of A) {
        if (val < 1 || val > N) {
            return 0; // out of valid range
        }
        if (seen.has(val)) {
            return 0; // duplicate
        }
        seen.add(val);
        sum += val;
    }

    let expectedSum = (N * (N + 1)) / 2;
    return sum === expectedSum ? 1 : 0;
}