"use strict";

import { Kinetic } from "./Kinetic"

const kin = new Kinetic();

export default function Square(radius){
    let width = radius;
    let height = radius;
    return(
        <div style="width:${width};height:${height};border-radius:${radius/2}">testing</div>
    )
}