var isValidSudoku = function(f) {
     x = [], z = [], y = []
    for( i =0;i<f.length;i++){
        x.push(new Set())
        z.push(new Set())
        y.push(new Set())
        
    }
    for( i =0;i<f.length;i++){
        for( j=0; j<f[i].length; j++){
             p = f[i][j]
            if(p === '.') continue 
             u = 3 * Math.floor(i / 3) + Math.floor(j / 3)
            if(x[i].has(p) || z[j].has(p) || y[u].has(p)) return false
            x[i].add(p)
            z[j].add(p)
            y[u].add(p)
            
        }
    }
    
    return true 
    
};