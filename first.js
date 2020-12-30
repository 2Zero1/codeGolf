function originalCode(){
    var r = "";
    for(y=x=a=40;y+a;)r+="-*\n"[x+a?x*x--+y*y<100|0:x+a||(x=a,y-=2,2)]
    return r;
}

console.log(originalCode())
