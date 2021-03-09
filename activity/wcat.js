#!/usr/bin/env node
let fs = require("fs"); 
let display = require("./commands/display_single.js");
let append_fn  = require("./commands/append_a_in_b.js");
let numbering = require("./commands/n");
let numberingempty = require("./commands/b");
// const readline = require('readline'); 

let input = process.argv.slice(2);
console.log(input[0] )
if(input[0].charAt(0) == "-" ){
    let ch = input[0].charAt(1);
    switch(ch){
        case "s" :
            // b
            console.log("iam s")
            break

        case "n" :
            numbering.fn(input[1]);
            console.log("iam n")
            break

        case "b" :
            // b
            numberingempty.fn(input[1]);
            console.log("iam b")
            break

    }
}else if(input[1] == ">" || input[1] == ">>" ){
    if(input[1] == ">" ){
        console.log("23456")
        fs.copyFileSync( input[0] , input[2] );
    }else{
        console.log("hijhuiahasiud")
        // append_fn.fn(input[0] , input[2]);
        fs.appendFileSync( input[0] , input[2] );
    }
}else{
    if( input.length == 1 ){
        display.fn(input[0]);
    }else { // multple files
       let check = true;     
    for(let i = 0 ; i<input.length ; i++){
        if(input[i] == "-s" ||input[i] == "-n"||input[i] == "-b"
        || input[i] == ">" ||input[i] == ">>" ){
                check = false;
        }
    }
    if(check==true){
        for(let i = 0 ;i<input.length ; i++){
            display.fn(input[i]);
        }
    }
    }
}

