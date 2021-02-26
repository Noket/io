"use strict";

/**
 * Square object module, inherits Physics module.
 */

import { Kinetic } from "./Kinetic"

const kin = new Kinetic();

export default function Square(size){
    
    let com = size/2;
    
    return(
        <div style="width:${size};height:${size};">testing</div>
    )
}