const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

//start-here
//Your code goes here … replace this line with your code logic 
var input = userInput[0].split(" ")
var B = parseFloat(input[0])
var H = parseFloat(input[1])

var area = (H * B) / 2
console.log(area)
//end-here
});
