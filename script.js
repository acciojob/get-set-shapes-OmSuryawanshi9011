class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  // Getter methods for width and height
  get width() {
    return this._width;
  }

  get height() {
    return this._height;
  }

  // Method to calculate area
  getArea() {
    return this._width * this._height;
  }
}

class Square extends Rectangle {
  constructor(side) {
    // Calling parent class constructor
    super(side, side);
  }

  // Method to calculate perimeter
  getPerimeter() {
    return 4 * this.width;
  }
}

// Example usage:
const rectangle = new Rectangle(5, 10);
console.log(`Rectangle Area: ${rectangle.getArea()}`); // Output: 50

const square = new Square(4);
console.log(`Square Area: ${square.getArea()}`); // Output: 16
console.log(`Square Perimeter: ${square.getPerimeter()}`); // Output: 16
