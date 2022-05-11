// code your solution here
function superbowlWin(x){  
    
    const a = x.find(function(x){
        return x.result==='W';
    });
    if(a !== undefined){
        return a.year;
    }

}

    