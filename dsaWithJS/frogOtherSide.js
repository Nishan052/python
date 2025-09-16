function solution(X, Y, D) {
    return Math.ceil((Y - X) / D);
}

// OR

function solution(X, Y, D) {
    let distance = Y - X;
    let jumps = (distance / D) | 0; // bitwise OR with 0 truncates to int
    if (distance % D !== 0) {
        jumps += 1;
    }
    return jumps;
}