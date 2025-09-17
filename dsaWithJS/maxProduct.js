function solution(A){
    A.sort((a,b) => a-b)
    let case1 = A[N-1]*A[N-2]*A[N-3];
    let case2 = A[0]*A[1]*A[N-1];
    return Math.max(case1, case2);
}