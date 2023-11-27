const SVG = require("./lib/SVG")
const{Circle, Square, Triangle} = require("./lib/shapes")

const inquirer = require("inquirer")
const fs = require("fs")

// User Questions
const questions = [
  {
    type:"input",
    name:"text",
    message:"ENTER TEXT: Please enter upto 3 characters : ",
  },
  {
    type:"input",
    name:"text-color",
    message:"ENTER TEXT COLOR: Please enter the color of your text : ",
  },
  {
    type:"list",
    name:"pix-image",
    message:"ENTER SHAPE: Please choose a shape for your image : ",
    choices: ["Square", "Circle", "Triangle"],
  },
  {
    type:"input",
    name:"shape",
    message:"ENTER SHAPE COLOR: Please enter the color inside the shape : ",
  }
];

// User answers prompt
const answers = await inquirer.createPromptModule(questions);

// Text must be 3 chars
const userText = "";
if(answers.text.length > 0 && answers.text.length < 4)
{
  userText = answers.text;
}else{
  console.log("Invalid input. Please enter no more than 3 characters");
  return;
}
console.log("User input text : " + userText);

// Text color ---------------------------------- Not done--------------------------------------

// Shape selection



function writeToFile(fileName, data){
  console.log("Writing [" + data + "] to file [" + fileName + "]")
  FileSystem.writeToFile(fileName, data, function(err){
    if(err)
    { return console.log(err);}
    console.log("Success!! A new logo.svg is being generated.")

  });
}

async function init(){

// ------------------------------------------------------------------could not finish

}

