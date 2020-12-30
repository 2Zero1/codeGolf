function originalCode(){
    var resArr = [];
    var primeArr = [];
    var numArr = [];
    var start = 2;
    var end = 100;
    var n = start;

    for(var i = start;i <= end;i++){
        numArr.push(i);
    }

    while(numArr.length){
        n = numArr.shift()

        primeArr.push(n);

        for(var i =numArr.length - 1; i >= 0; i--){
            if(numArr[i]%n==0) numArr.splice(i, 1);
        }
        if(n*n>numArr[numArr.length-1])break;
    }

    resArr = primeArr.concat(numArr)
    return resArr;
}

console.log(originalCode())