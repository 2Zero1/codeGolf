function yourCode(w, h, mapArr, x1, y1, x2, y2) {
    var resArr = [];
    var arr = [];
    for(var i = 0; i < w * h; i++) arr[i] = Infinity;

    function genCstMap(x, y, cst) {
        cst += mapArr[x + y * w];
        if (cst >= arr[x + y * w]) return;
        arr[x + y * w] = cst;
        if (x>0) genCstMap(x - 1, y, cst)
        if (y>0) genCstMap(x, y - 1, cst)
        if (x<w-1) genCstMap(x + 1, y, cst)
        if (y<h-1) genCstMap(x, y+1, cst)
    }
    console.log(-mapArr[x2 + y2 * w]);
    console.log(x2 + y2 * w);
    genCstMap(x2, y2, -mapArr[x2 + y2 * w]);

    for(var y = 0; y < h; y++){
        var s = "";
        for(var x = 0; x < w; x++){
            var c = arr[x+y*w];
            s +=(c<10?" " + c:c)+", ";
        }
        console.log(s);
    }

    function bckMv(x,y){
        var cst = Infinity, tmp;
        var x2, y2;
        if(x > 0 && (tmp = arr[(x-1)+y*w]) < cst) {
            cst = tmp; x2 = x - 1; y2 = y
        }
        if(y > 0 && (tmp = arr[x+(y-1)*w]) < cst) {
            cst = tmp; x2 = x; y2 = y-1;
        }
        if(x < w-1 && (tmp=arr[(x+1)+y*w])<cst){
             cst = tmp; x2 = x+1; y2 =y;
        }
        if(y<h-1 &&(tmp=arr[x+(y+1)*w])<cst){
            cst = tmp;x2 = x; y2 = y+1;
        }
        if(cst = 0) return;
        resArr.push(x2, y2);
        bckMv(x2, y2);
    }
    resArr.push(x1,y1);
    bckMv(x1,y1);
    resArr.push(x2,y2);
    return resArr;
   
}

var arr = [5,5,4,2,1,1,1,2,2,3,
        5,4,3,2,1,1,2,2,3,4,
        5,4,2,1,1,2,2,4,5,5,
        4,4,2,1,2,2,3,3,4,5,
        4,3,1,1,4,3,3,3,4,5,
        3,1,1,5,4,3,2,3,4,5,
        2,1,3,4,3,3,2,2,3,4,
        1,1,3,4,3,2,1,1,2,3,
        2,1,1,3,4,2,2,3,4,4,
        3,2,1,1,3,3,3,3,4,5]
yourCode(10,10,arr,4,0,5,9)