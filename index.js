const SVG = require("./lib/SVG")
const{Circle, Square, Triangle} = require("./lib/shapes")

const inquirer = require("inquirer")
const fs = require("fs")

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