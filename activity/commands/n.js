let fs = require("fs");

function numbering(src){
let contentArray = fs.readFileSync(src);
var res = contentArray.toString().split("\n");
let count  = 1 ;
    for(let i = 0 ; i<res.length ; i++){
       console.log(count,res[i]);
       count++; 
    }
}
module.exports = {
    fn : numbering
}