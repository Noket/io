
/**
 * Square object module, inherits Kinetic component.
 */

import { Kinetic } from "./Kinetic";
import React from "react";
import ReactDOM from "react-dom";

export class Square extends React.Component{

    constructor(args){
        super()
        this.props = {
            size: args.size
        }

    }

    render(child){

        return(
            <Kinetic style={{
                display: "flex",
                flexDirection:"row",
                alignItems:"center",
                justifyContent:"center",
                // position: "absolute",
                border: "3px solid black",
                borderRadius: "5px",
                backgroundColor: "white",
                width: `${this.props.size}px`,
                height: `${this.props.size}px`
            }}>

                {this.props.children}
            
            </Kinetic>
        )    
    }
}