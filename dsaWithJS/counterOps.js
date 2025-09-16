function solution(N, A) {
    let counters = new Array(N).fill(0);
    let maxValue = 0;   // current max value
    let baseValue = 0;  // minimum value after maxCounter

    for (let op of A) {
        if (op >= 1 && op <= N) {
            let index = op - 1;

            // bring counter up to date if it's below baseValue
            if (counters[index] < baseValue) {
                counters[index] = baseValue;
            }

            // increment this counter
            counters[index]++;

            // update maxValue if needed
            if (counters[index] > maxValue) {
                maxValue = counters[index];
            }
        } else if (op === N + 1) {
            // lazy update - postpone setting counters
            baseValue = maxValue;
        }
    }

    // Final pass to sync counters with baseValue
    for (let i = 0; i < N; i++) {
        if (counters[i] < baseValue) {
            counters[i] = baseValue;
        }
    }

    return counters;
}