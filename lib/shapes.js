class Shapes{
  constructor(){
    this.color = '';

  }
  setColor(color){
    this.color = color;
  }
}
class Circle extends Shapes{
  render(){
    return `<circle cx="150" cy="100" r="90" stroke="black" stroke-width="2" fill="${this.color}" />`
  }
}
class Square extends Shapes{
  render(){
    return `<rect x="80" y="25" width="150" height="150" stroke="black" stroke-width="2" fill="${this.color}" />`
  }
}
class Triangle extends Shapes{
  render(){
    return `<polygon points="150,18 244,180 56,180" stroke="black" stroke-width="2" fill="${this.color}" />`
  }
}
module.exports = {Circle, Square, Triangle, Shapes}