
/**
 * Square object module, inherits Kinetic component.
 */

import { Kinetic } from "./Kinetic";
import React from "react";
import styles from "./square.module.css";

export class Square extends React.Component{

    constructor(props){
        super(props)
        this.ref = React.createRef();
    }

    render(){

        return(
                <Kinetic>
                    {this.props.children}
                </Kinetic>
        )    
    }
}