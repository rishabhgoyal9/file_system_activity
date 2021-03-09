let fs = require("fs");
let path = require("path");


function display(src){
    var data = fs.readFileSync(src, "utf8");
    console.log(data.toString());
}

 module.exports = {
     fn : display
 }

