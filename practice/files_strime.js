const fs = require("fs");
const fileContent = fs.readFileSync("./practice/test.txt", "utf-8"); // sync
console.log("fs==>",fileContent );

 fs.readFile("./practice/test.txt", "utf-8",(err,data)=>{ // async
    if(err) console.log("fs_async==>",err )
    else console.log("fs_async==>",data )
})

fs.writeFileSync("./practice/test_create.txt","file created!") // sync
 fs.writeFile("./practice/test_create.txt", "async test", {flag:'a'}, (err,data)=>{ // async flag is used to append the text with excisting file content
    if(err) console.log("fs_async==>",err )
    else console.log("fs_async==>",data )
});

// promise fs

const pfs = require("fs/promises");
pfs.readFile("./practice/test.txt", "utf-8").then(data=>console.log("promise_fs_data==>",data ) )
.catch((err)=>console.log("promise_fs_err==>",err ));

//stream

const readebleStreame = fs.createReadStream("./practice/test.txt", {encoding:'utf-8', highWaterMark:3});
// console.log("readebleStreame==>", readebleStreame);
const writableStreame = fs.createWriteStream("./practice/test_create.txt");


// readebleStreame.on("data",(chunk)=>{
//     writableStreame.write(chunk)
//   console.log("readebleStreame_chunk==>",chunk );
// })

// or

readebleStreame.pipe(writableStreame)
