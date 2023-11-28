const SVG = require('./SVG');

describe('SVG class tests', () => {
  let svg;

  beforeEach(() => {
    svg = new SVG();
  });

  test('SVG render method should return valid SVG string', () => {
    svg.setText('Hello', 'red');
    svg.setShape({ render: () => '<circle cx="50" cy="50" r="40" fill="blue" />' });

    const result = svg.render();

    expect(result).toContain('<svg width=\"300\" height=\"200\"><circle cx=\"50\" cy=\"50\" r=\"40\" fill=\"blue\" /><text x=\"150\" y=\"125\" font-size=\"40\" text-anchor=\"middle\" fill=\"red\">Hello</text></svg>');
    expect(result).toContain('<circle cx="50" cy="50" r="40" fill="blue" />');
    expect(result).toContain('<text x="150" y="125" font-size="40" text-anchor="middle" fill="red">Hello</text>');
  });

  test('setText method should set text element correctly', () => {
    svg.setText('Goodbye', 'green');

    expect(svg.textEl).toEqual('<text x="150" y="125" font-size="40" text-anchor="middle" fill="green">Goodbye</text>');
  });

  test('setShape method should set shape element using provided render method', () => {
    const mockShape = { render: jest.fn(() => '<rect x="50" y="50" width="200" height="100" fill="yellow" />') };
    svg.setShape(mockShape);

    expect(svg.shapeEl).toEqual('<rect x="50" y="50" width="200" height="100" fill="yellow" />');
    expect(mockShape.render).toHaveBeenCalled();
  });
});






