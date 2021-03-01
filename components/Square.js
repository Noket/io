"use strict";

/**
 * Square object module, inherits Kinetic component.
 */

import Kinetic from "./Kinetic"

const kin = new Kinetic();

export default function Square(size){
    
    let com = size/2;
    
    console.log(size.children);

    return(
        <Kinetic>
            <div>
                {size.children}
            </div>
        </Kinetic>
    )
}