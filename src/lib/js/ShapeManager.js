"use strict";

// import { Kinetic } from "../../components/Shapes/Kinetic";

function ShapeManager() {}

ShapeManager.shapeList = new Array();
ShapeManager.addShape = shape => {
    ShapeManager.shapeList.push(shape);
}
ShapeManager.getShapes = function() {
    return ShapeManager.shapeList;
}

console.log(ShapeManager.getShapes());

export default ShapeManager;