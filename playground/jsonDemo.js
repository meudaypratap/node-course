const fs = require("fs");

const object = {
  name :"Uday",
  age : 10

} 
fs.writeFileSync("jsonDemo.json",JSON.stringify(object))
const user = JSON.parse(fs.readFileSync("jsonDemo.json").toString());
user.name = "Sunny"
fs.writeFileSync("jsonDemo.json",JSON.stringify(user))
console.log(JSON.parse(fs.readFileSync("jsonDemo.json").toString()).name);