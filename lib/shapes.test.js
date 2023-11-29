const { Circle, Square, Triangle, Shapes } = require("./shapes.js")

describe("shape classes", () => {
  test("color should be set correctly", () => {
    const shape = new Shapes()
    shape.setColor("red")
    expect(shape.color).toBe("red")
  })
})

describe("Circle", () => {
  test("circle should render with correct color", () => {
    const circle = new Circle()
    circle.setColor("green")
    expect(circle.render()).toContain('fill="green"')
  })
})
describe("Square", () => {
  test("square should render with correct color", () => {
    const square = new Square()
    square.setColor("blue")
    expect(square.render()).toContain('fill="blue"')
  })
})
describe("Triangle", () => {
  test("Triangle should render with correct color", () => {
    const triangle = new Triangle()
    triangle.setColor("yellow")
    expect(triangle.render()).toContain('fill="yellow"')
  })
})