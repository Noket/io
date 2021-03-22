"use strict";

// import { Kinetic } from "../../components/Shapes/Kinetic";

function ShapeManager() {}

window.onmousemove = event => {
    ShapeManager.xpos = event.pageX;
    ShapeManager.ypos = event.pageY;
}

ShapeManager.shapeList = new Array();
ShapeManager.addShape = shape => {
    ShapeManager.shapeList.push(shape);
}
ShapeManager.getShapes = () => {
    return ShapeManager.shapeList;
}

ShapeManager.currentX = () => {
    return ShapeManager.xpos;
}

ShapeManager.currentY = () => {
    return ShapeManager.ypos;
}
// console.log(ShapeManager.getShapes());

export default ShapeManager;