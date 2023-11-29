const SVG = require('./SVG');

describe('SVG class tests', () => {
  let svgTest;

  beforeEach(() => {
    svgTest = new SVG();
  });

  test('SVG render must return valid SVG string', () => {
    svgTest.setText('Hello', 'red');
    svgTest.setShape({ render: () => '<circle cx="50" cy="50" r="40" fill="blue" />' });

    const result = svgTest.render();

    expect(result).toContain('<svg width=\"300\" height=\"200\"><circle cx=\"50\" cy=\"50\" r=\"40\" fill=\"blue\" /><text x=\"150\" y=\"125\" font-size=\"40\" text-anchor=\"middle\" fill=\"red\">Hello</text></svg>');
    expect(result).toContain('<circle cx="50" cy="50" r="40" fill="blue" />');
    expect(result).toContain('<text x="150" y="125" font-size="40" text-anchor="middle" fill="red">Hello</text>');
  });

  test('setText method should set text element correctly', () => {
    svgTest.setText('Goodbye', 'green');

    expect(svgTest.textEl).toEqual('<text x="150" y="125" font-size="40" text-anchor="middle" fill="green">Goodbye</text>');
  });

  test('setShape method need to set shape element using provided render method', () => {
    const mockShape = { render: jest.fn(() => '<rect x="50" y="50" width="200" height="100" fill="yellow" />') };
    svgTest.setShape(mockShape);

    expect(svgTest.shapeEl).toEqual('<rect x="50" y="50" width="200" height="100" fill="yellow" />');
    expect(mockShape.render).toHaveBeenCalled();
  });
});






