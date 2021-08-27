var myPath = new Path();
myPath.strokeColor = 'black';

myPath.add(new Point(200, 200));
myPath.add(new Point(100, 100));

function onMouseDown(event) {
  console.log('You pressed the mouse!');
}

function onMouseDrag(event) {
  console.log('You dragged the mouse!');
}

function onMouseUp(event) {
  console.log('You released the mouse!');
}