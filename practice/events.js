const event = require("events");
const eventEmmiter = new event()

eventEmmiter.on("test",(name)=>{
console.log("event==>", name)
});

eventEmmiter.emit("test","jay")