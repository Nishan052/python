function solution (A){
    let N = A.length;
    let minAvg = Infinity;
    let minIndex = 0;

    for(let i = 0; i <N-1;i++){
        let avg2 = (A[i+1] + A[i]) /2;
        if(avg2 < minAvg){
            minAvg = avg2;
            minIndex = i;
        }

        if(i < N-2){
            let avg3 = (A[i+1] + A[i] +[i+2]) /3;
            if(avg3 < minAvg){
                minAvg = avg3;
                minIndex = i;
            }
        }
    }
    return minIndex;
}