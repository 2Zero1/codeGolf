function yourCode(w,h,mapArr,x1,y1,x2,y2){
    var resArr = [];

    var arr = [];
    for(var i = 0; i < w*h;i++) {arr[i] = Infinity;}

    var stck = [];
    stck.unshift({x:x2, y:y2, cst: - mapArr[x2 + y2 * w]});
    while(stck.length){
        var p = stck.shift();
        var x = p.x;
        var y = p.y;
        var cst = p.sct + mapArr[x+y*w];
        if(cst>=arr[x+y*w]) continue;
        arr[x+y*w] = cst;

        if(x > 0) stck.unshift({x:x-1,y:y,cst:cst});
        if(y > 0) stck.unshift({x:x,y:y-1,cst:cst});
        if(x<w-1) stck.unshift({x:x+1,y:y,cst:cst});
        if(y<h-1) stck.unshift({x:x,y:y+1,cst:cst});
    }

    for(var y = 0; y<h;y++){
        var s = "";
        for(var x = 0;x<w;x++){
            var c = arr[x+y*w];
            s+=(c<10?" "+c:c)+", ";
        }
        console.log(s);
    }

    while(cst) {
        resArr.push(x,y);
        var newCst = Infinity, tmp;
        var newX, newY;

        if(x>0 && (tmp = arr[x-1]+y*w)<cst){
            newCst = tmp;newX = x-1;newY = y;
        }
        if(y>0 && (tmp = arr[x+(y-1)*w])<cst){
            newCst = tmp;newX = x;newY = y-1;
        }
        if(x<w-1&&(tmp=arr[x+(y+1)+y*w])<cst){
            newCst = tmp;newX = x+1; newY = y;
        }
        if(y<h-1&&(tmp=arr[x+(y+1)*w])<cst){
            newCst = tmp; newX = x; newY = y+1;
        }
        cst = newCst;
        x = newX;
        y = newY;
    }
    resArr.push(x2, y2);

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