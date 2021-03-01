
/**
 * Square object module, inherits Kinetic component.
 */

import { Kinetic } from "./Kinetic";
import React from "react";
import ReactDOM from "react-dom";

export class Square extends React.Component{

    constructor(child){
        super()
        this.props = {
            size: child.size,
            height: child.size,
            width: child.size,
        }

        console.log("within constructor");
        console.log(this.props);

    }

    render(child){
        console.log("within render")
        console.log(this)

        return(
            <Kinetic style={{
                position: "absolute",
                border: "2px solid black",
                backgroundColor: "white",
                width: `${this.props.size}px`,
                height: `${this.props.size}px`
            }}>
                {this.props.children}
            </Kinetic>
        )    
    }
}