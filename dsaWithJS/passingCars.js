function solution(A){
    let eastCars = 0;
    let passingPair = 0;

    for(let car of A){
        if(car === 0){
            eastCars++;
        } else {
            passingPair += eastCars;
            if(passingPair > 100000){
                return -1;
            }
        }
    }
    return passingPair;
}