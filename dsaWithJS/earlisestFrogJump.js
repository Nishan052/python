function solution(X, A) {
    let positions = new Set();
    
    for (let i = 0; i < A.length; i++) {
        let pos = A[i];
        if (!positions.has(pos)) {
            positions.add(pos);
        }
        if (positions.size === X) {
            return i;  // earliest time when all positions are covered
        }
    }
    return -1; // frog cannot cross
}