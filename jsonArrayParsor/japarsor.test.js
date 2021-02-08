const jsonParsor = (arr) => {

    let res = '';
    let i = 0;
    while(true){
        
    }
    
    return `[${result.slice(2)}]`;
}


const typeCheck = (v) => {
    switch(true){
        case v instanceof Object : break;
        case v instanceof Array : break;
        case v instanceof Number : break;
        case v instanceof String : console.log("====="); break;
        case v instanceof Boolean : break;
    }
}


test('test', () => {
    expect(jsonParsor([1])).toBe(`[1]`);
    expect(jsonParsor([1,2, 3, 123])).toBe(`[1, 2, 3, 123]`);
    // expect(jsonParsor(["1"])).toBe(`["1"]`);
});