// calculate the smallest missing number in an unsorted array 

function solution(A) {
    let set = new Set();
    let N = A.length;

    for(let val of A){
        if(val > 0){
            set.add(val);
        }
    }
    for(let i=1; i<=N+1; i++){
        if(!set.has(i)){
            return i;
        }
    }
}