function solution(A){
    let count = 1 // count starts from 1 as if it is 0 then we are returning zero
    if(A.length === 0) return 0;
    A.sort((a,b) => a-b)
    for(let i = 0; i < A.length; i++){
        if(A[i]!== A[i-1]){
            count++
        }
    }
    return count;
}