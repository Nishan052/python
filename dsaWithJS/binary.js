function solution(N) {
    let binary = N.toString(2); // Convert to binary string
    let maxGap = 0;
    let currentGap = 0;
    let foundOne = false;

    for (let bit of binary) {
        if (bit === '1') {
            if (foundOne) {
                maxGap = Math.max(maxGap, currentGap);
            }
            currentGap = 0;
            foundOne = true;
        } else { // bit === '0'
            if (foundOne) {
                currentGap++;
            }
        }
    }

    return maxGap;
}