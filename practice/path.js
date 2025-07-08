
const path = require("path");

console.log("path_dir==>", __dirname, __filename); // C:\jayaram\node js\practice , C:\jayaram\node js\practice\path.js
console.log("path_dir==>", path.basename(__dirname)) //practice 
console.log("path_file==>", path.dirname(__filename)) // C:\jayaram\node js\practice
console.log("path_file==>", path.extname(__filename)) // .js
