function solution(A,B,K){
let start = A;
while(start%K !== 0 && start <= B){
    start++;
}
if (start > B) return 0;

let end = B;
while(end% K !== 0){
    end--;
}
return((end - start) / K) +1
}