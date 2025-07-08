
require("./path")
require("./events")
// require("./buffer")
require("./files_strime")
require("./http")

console.log("hello")
const add =  require('./add')
// import add from './add.js'
const express = require("express");
const app = express();

console.log(add(3,3));




