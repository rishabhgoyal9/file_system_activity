let fs = require("fs"); 

function appendfiles(fileone,filetwo){
    let fileonecontent = fs.readFileSync(fileone).toString()
    fs.appendFileSync( filetwo , fileonecontent );
}

module.exports = {
    fn : appendfiles
}