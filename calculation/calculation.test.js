/*
1. 입력한 값을 스플릿
2. 1, -, 2 를 [1, +, -2] 로 바꿔줌
3. 곱셈 또는 나눗셈을 기준으로 양 옆의 수를 빼서 역 폴란드 식으로 만든 후에 배열 째로 이전 자리에 입력.
4. 덧셈 뺄셈을 찾으면 양옆의 것을 사용하여 역폴란드 식으로 만든 후에 그  위치에 입력
5. 모든 배열을 풀어줌.

연산
1. 숫자가 나온다면 push
2. +가 나온다면 두개를 pop하여 연산 한 후에 push
3. /가 나온다면 두개를 pop 하여 연산한 후 push
*/


const calculate = (()=>{
    const parse = (expression) => {
        const exp = expression.split("");
        for(let i =0; i<expression.length; i++) {
            if(exp[i] in ops){
                if (exp[i] === "-") {
                    exp[i] = "+";
                    exp[i + 1] = "-" + exp[i + 1];
                }
            }else exp[i] = parseFloat(exp[i]);
        }
        return  exp;
    };
    const op =(result, targetOps)=>{
        let idx = 0;
        if(result.some((v, i)=>targetOps.includes(v) ? (idx = i, true) : false)){
            result.splice(idx - 1, 3, [result[idx - 1] ,result[i + 1], result[idx]]);
            return op(target, targetOps);
        }else return result
    };
    
    const multiOrDiv = arr=>op([...arr], ["*", "/"]);
    const plusOrMinus = arr=>op([...arr], ["+", "-"]);
    const ops = {
        "+":(y, x)=>x + y,
        "-":(y, x)=>x - y,
        "*":(y, x)=>x * y,
        "/":(y, x)=>x / y
    };
    const calc = arr=>{
        const commandQue = [...arr];
        const accStack = [];
        let item;
        while(item = commandQue.shift()) accStack.push(
            item in ops ? ops[item](accStack.pop(), accStack.pop()) : item
        );
        if(accStack.length !== 1) throw "invaild arr :" + arr;
        else  return accStack[0];
    };
    return str=>{
        const arr = parse(str);
        const exp = plusOrMinus(multiOrDiv(arr)).flat(Infinity);
        return calc(exp);
    };
})();


test("test", () => {
    expect(calculate("1-2")).toBe(-1);
    expect(calculate("1-2+3")).toBe(2);
    expect(calculate("1*2*3*4")).toBe(24);
    expect(calculate("1*2*3*4/2")).toBe(12);
});

test('parse', () => {
    expect(parse("1")).toStrictEqual([1]);
    expect(parse("1-2")).toStrictEqual([1,"+",-2]);
    expect(parse("1-2*3")).toStrictEqual([1,"+",-2,"*",3]);
});

test('multiOrDiv', ()=>{
    expect(multiOrDiv([1,"*",-2])).toStrictEqual([[1,-2,"*"]]);
    expect(multiOrDiv([1,"/",-2])).toStrictEqual([[1,-2,"/"]]);
    expect(multiOrDiv([1,"+",-2,"/",2,"+",1])).toStrictEqual([1,"+", [-2,2,"/"],"+",1]);
});

test('plusOrMinus', () => {
    expect(plusOrMinus([1,"+",-2])).toStrictEqual([[1,-2,"+"]]);
    expect(plusOrMinus([1,"+", [-2,2,"/"]])).toStrictEqual([[1,[-2,2,"/"],"+"]]);
    expect(plusOrMinus([1,"+", [-2,2,"/"],"+",1])).toStrictEqual([[[1,[-2,2,"/"],"+"], 1, "+"]]);
});

test('calc', () => {
    expect(calc([ 1, -2, '+' ])).toBe(-1);
    expect(calc([ 1, -2, '+', 3, "*" ])).toBe(-3);
});