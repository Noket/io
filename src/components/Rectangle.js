
/**
 * Square object module, inherits Kinetic component.
 */

import { Kinetic } from "./Kinetic";
import React from "react";
import ReactDOM from "react-dom";

export class Rectangle extends React.Component{

    constructor(args){
        super()
        this.props = {
            height: args.height,
            width: args.width
        }

    }

    render(child){

        return(
            <Kinetic style={{
                display: "flex",
                flexDirection:"row",
                alignItems:"center",
                justifyContent:"center",
                border: "5px solid black",
                borderRadius: "5px",
                backgroundColor: "white",
                width: `${this.props.width}px`,
                height: `${this.props.height}px`
            }}>

                {this.props.children}
            
            </Kinetic>
        )    
    }
}