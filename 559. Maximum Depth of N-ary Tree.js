var maxDepth = function(r) {
    if(!r) return 0;
     z = 0;
    for( x of r.children) {
       z = Math.max(z, maxDepth(x));
    }
    return z + 1;
}

//one line:
maxDepth=r=>{if(!r)return 0;z=0;for(x of r.children){z=Math.max(z,maxDepth(x));}return z+1;}