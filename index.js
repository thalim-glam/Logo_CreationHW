const SVG = require("./lib/SVG")
const { Circle, Square, Triangle } = require("./lib/shapes")

const inquirer = require("inquirer")
const fs = require("fs")

// User Questions
const questions = [
  {
    type: "input",
    name: "text",
    message: "ENTER TEXT: Please enter upto 3 characters : ",
  },
  {
    type: "input",
    name: "text-color",
    message: "ENTER TEXT COLOR: Please enter the color of your text : ",
  },
  {
    type: "list",
    name: "pix-image",
    message: "ENTER SHAPE: Please choose a shape for your image : ",
    choices: ["Square", "Circle", "Triangle"],
  },
  {
    type: "input",
    name: "shape",
    message: "ENTER SHAPE COLOR: Please enter the color inside the shape : ",
  }
];

function writeToFile(fileName, data) {
  console.log("Writing [" + data + "] to file [" + fileName + "]");
  const content = generateLogo(data);

  fs.writeToFile(fileName, content, function (error) {
    if (error) { return console.log(error); }
    console.log("Success!! A new logo.svg is being generated.")

  });
}

//--------------------------------------------------------------------------------------------------------------------------

// User answers prompt
//const answers = await inquirer.createPromptModule(questions);

// Text must be 3 chars
const userText = "";
if (answers.text.length > 0 && answers.text.length < 4) {
  userText = answers.text;
} else {
  console.log("Invalid input. Please enter no more than 3 characters");
  return;
}
console.log("User input text : " + userText);

// Text color ---------------------------------- Not done--------------------------------------

// Shape selection
const userShape = "";
const user_shape = "";
if (user_shape === "Square" || user_shape === "square") {
  userShape = new Square();
  console.log(" User selection is Square shape");
}
else if (user_shape === "Circle" || user_shape === "circle") {
  userShape = new Circle();
  console.log(" User selection is Circle shape");
}
else if (user_shape === "Triangle" || user_shape === "triangle") {
  userShape = new Triangle();
  console.log(" User selection is Triangle shape");
}
else {
  console.log(" invalid Entry! Please choose a shape from the choices.");
}

//----------------------- Shape color ---------------- not done yet --------------------------------
// const svg = new SVG();
// svg.setTextEl(userText, user_font_color);
// svg.setShapeEl(userShape);
// svgString = svg.render();
//
// console.log("Final Shape:\n\n" + svgString); // Final logo
// console.log("Shape Complete");
// console.log("Writing shape to the svg file");
// 
//----------------------------------------------------------------------------------------------------------------------------------------

function init() {
  inquirer.createPromptModule(questions)
    .then(function (data) {
      const fileName = 'logo.svg';
      writeToFile(fileName, data);
    });
}

init();