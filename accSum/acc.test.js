
const acc = (arr_) => {
    return _acc([...arr_]);
}

const _acc = (arr_) => {
    let arr =[...arr_];
    const stack = [];
    let res = 0;
    while(arr.length || stack.length) {
        if(!arr.length) {
            arr = stack.shift();
            // continue;
        }else{
            const item = arr.shift();
            if(typeof item == "object"){
                stack.unshift(arr);
                arr = [...item];
            }else{
                res += item
            }
        }
    }
    return res;
}

test('test', ()=>{
    expect(acc([1,2])).toBe(3);
    expect(acc([1,2,3])).toBe(6);
    expect(acc([1,[1]])).toBe(2);
    expect(acc([1,[1],1])).toBe(3);
    expect(acc([1,[1],1,1,1])).toBe(5);
    expect(acc([1,[1,1,[1,[1,1,1,1,1,[1,[1]]]]],1])).toBe(12);
});


