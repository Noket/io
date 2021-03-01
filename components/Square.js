"use strict";

/**
 * Square object module, inherits Kinetic component.
 */

import Kinetic from "./Kinetic"

const kin = new Kinetic();

export default function Square(props){

    let size = 0;
    // console.log(props)
    if(props.size){
        size = props.size;
    }
    
    return(
        <Kinetic size={size}>
            <div style={{
                border: "2px solid red",
                width: size,
                height: size
            }}>
                Testing
            </div>
        </Kinetic>
    )
}