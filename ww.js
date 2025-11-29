let figure = {
  leftTop: { x: 2, y: 3 },
  rightBottom: { x: 10, y: 8 }
};


function showFigure(figure) {
  console.log("Ліва верхня: (" + figure.leftTop.x + ", " + figure.leftTop.y + ")");
  console.log("Права нижня: (" + figure.rightBottom.x + ", " + figure.rightBottom.y + ")");
}


function getWidth(figure) {
  return figure.rightBottom.x - figure.leftTop.x;
}


function getHeight(figure) {
  return figure.rightBottom.y - figure.leftTop.y;
}


function getArea(figure) {
  return getWidth(figure) * getHeight(figure);
}


function getPerimeter(figure) {
  return 2 * (getWidth(figure) + getHeight(figure));
}


function changeWidth(figure, d) {
  figure.rightBottom.x += d;
}


function changeHeight(figure, d) {
  figure.rightBottom.y += d;
}


function changeSize(figure, w, h) {
  figure.rightBottom.x += w;
  figure.rightBottom.y += h;
}


function moveX(figure, dx) {
  figure.leftTop.x += dx;
  figure.rightBottom.x += dx;
}


function moveY(figure, dy) {
  figure.leftTop.y += dy;
  figure.rightBottom.y += dy;
}


function moveXY(figure, dx, dy) {
  moveX(figure, dx);
  moveY(figure, dy);
}


function isInside(figure, x, y) {
  return x >= figure.leftTop.x && x <= figure.rightBottom.x &&
         y >= figure.leftTop.y && y <= figure.rightBottom.y;
}


showFigure(figure);
console.log("Ширина:", getWidth(figure));
console.log("Висота:", getHeight(figure));
console.log("Площа:", getArea(figure));
console.log("Периметр:", getPerimeter(figure));

changeWidth(figure, 5);
changeHeight(figure, 3);
showFigure(figure);

moveXY(figure, -2, -1);
showFigure(figure);

console.log("Точка (4,5) всередині?", isInside(figure, 4, 5));