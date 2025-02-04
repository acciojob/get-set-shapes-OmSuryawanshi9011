//complete this code
class Rectangle {
	constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  get width() {
    return this._width;
  }

  get height() {
    return this._height;
  }
	getArea(){
		return this.width * this.height;
	}
}

class Square extends Rectangle {
	constructor(side){
		super(side, side);
	}
	getPerimeter(){
		return 4 * this.width;
	}
}

let myRectangle = new Rectangle(10, 20);
console.log(myRectangle.getArea());
let mySquare = new Square(5);
console.log(mySquare.getArea());
console.log(mySquare.getPerimeter());
