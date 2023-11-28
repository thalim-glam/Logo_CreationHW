const SVG = require("./lib/SVG")
const { Circle, Square, Triangle } = require("./lib/shapes")
const path = require("path")
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
    name: "textcolor",
    message: "ENTER TEXT COLOR: Please enter the color of your text : ",
  },
  {
    type: "list",
    name: "piximage",
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
fs.writeFileSync(path.join(fileName), data)
}

//--------------------------------------------------------------------------------------------------------------------------

// User answers prompt
//const answers = await inquirer.createPromptModule(questions);

// // Text must be 3 chars
// const userText = "";
// if (answers.text.length > 0 && answers.text.length < 4) {
//   userText = answers.text;
// } else {
//   console.log("Invalid input. Please enter no more than 3 characters");
//   return;
// }
// console.log("User input text : " + userText);

// // Text color ---------------------------------- Not done--------------------------------------

// // Shape selection
// const userShape = "";
// const user_shape = "";
// if (user_shape === "Square" || user_shape === "square") {
//   userShape = new Square();
//   console.log(" User selection is Square shape");
// }
// else if (user_shape === "Circle" || user_shape === "circle") {
//   userShape = new Circle();
//   console.log(" User selection is Circle shape");
// }
// else if (user_shape === "Triangle" || user_shape === "triangle") {
//   userShape = new Triangle();
//   console.log(" User selection is Triangle shape");
// }
// else {
//   console.log(" invalid Entry! Please choose a shape from the choices.");
// }

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
  inquirer.prompt(questions)
    .then(function (data) {
      let shapechoice;
      switch (data.piximage) {
        case "Square":
          shapechoice = new Square()
          break;
        case "Circle":
          shapechoice = new Circle()
          break;
        case "Triangle":
          shapechoice = new Triangle()
          break;
      }
      shapechoice.setColor(data.shape)
      const mySvg = new SVG()
      mySvg.setShape(shapechoice)
      mySvg.setText(data.text, data.textcolor)
      if(data.text.length > 3 ){
        console.log("Maximum 3 characters")
        init()
      }else{
      writeToFile("./example/logo.svg", mySvg.render());
    }
    });
}

init();