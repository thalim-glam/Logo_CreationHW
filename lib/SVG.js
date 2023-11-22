class SVG {
  constructor() {
    this.textEl = ""
    this.shapeEl = ""

  }
  render() {
    return `<svg width="300" height="200" > ${this.shapeEl} ${this.textEl}</svg>`
  }
  setText(text, color) {
    this.textEl = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}"> ${text}</text>`
  }
  setShape(shape) {
    this.shapeEl = shape.render()
  }
}
module.exports = SVG