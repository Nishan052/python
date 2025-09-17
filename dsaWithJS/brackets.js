function solution(A){
    let stack = [];
    let pairs = {
        ")" : "(",
        "]" : "[",
        "}" : "{"
    }
    for(let ch of A){
        if(ch === "(" || ch === "[" || ch === "{" ){
            stack.push(ch)
        } else {
            if(stack.length === 0) return 0;
            let top = stack.pop();
            if(pairs[ch] !== top){
                return 0;
            }
        }
    }
    return 1;
}