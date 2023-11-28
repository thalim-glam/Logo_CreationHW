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
//----------------------------------------------------------------------------------------------------------------------------------------

// init function starts here

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
      if (data.text.length > 3) {
        console.log("Maximum 3 characters")
        init()
      } else {
        writeToFile("./example/circle.svg", mySvg.render());
      }
    });
}

init();