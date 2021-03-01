import { Kinetic } from "./Kinetic";
import React from "react";
import ReactDOM from "react-dom";

export class Circle extends React.Component{

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
                // position: "absolute",
                flexDirection:"row",
                alignItems:"center",
                justifyContent:"center",
                border: "3px solid black",
                borderRadius: "50%",
                backgroundColor: "white",
                width: `${this.props.size}px`,
                height: `${this.props.size}px`
            }}>

                {this.props.children}
            
            </Kinetic>
        )    
    }
}