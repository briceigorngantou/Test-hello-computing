import { Figure } from './Figure';

export class Rectangle extends Figure {
  width: number;
  length: number;
  perimeter: number;
  area: number;

  constructor(
    name = 'rectangle',
    pic = './../assets/rectangle.png'
  ) {
    super(name, pic);
  }
  getWidth() {
    return this.width;
  }
  getLength() {
    return this.length;
  }

  setWidth(value: number) {
    this.width = value;
  }
  setLength(value: number) {
    this.length = value;
  }

  getPerimeter() {
    if (this.width > 0 && this.length > 0) {
      this.perimeter = (this.width + this.length) * 2;
      return this.perimeter;
    } else {
      // alert('incorrect value');
      return 0;
    }
  }

  getArea() {
    if (this.width > 0 && this.length > 0) {
      this.area = this.width * this.length;
      return this.area;
    } else {
      // alert('incorrect value');
      return 0;
    }
  }
}
