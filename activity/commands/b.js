let fs = require("fs");

function numbering_nonempty(src){
let contentArray = fs.readFileSync(src);
var res = contentArray.toString().split("\n");
let count  = 1 ;
    for(let i = 0 ; i<res.length ; i++){
        if(res[i]==false){
            console.log(res[i]);
            
        }else{
            console.log(count,res[i]);
            count++; 
        }
       
    }
}
module.exports = {
    fn : numbering_nonempty
}


