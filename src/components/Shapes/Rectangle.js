
/**
 * Square object module, inherits Kinetic component.
 */

import { Kinetic } from "./Kinetic";
import React from "react";
import styles from './rectangle.module.css';

export class Rectangle extends React.Component{

    constructor(args){
        super()
        this.props = {
            height: args.height,
            width: args.width
        }

    }

    render(){
        return(
            <div className={styles.self} styles={{
                width: this.props.width+"px",
                height: this.props.height+"px"
            }}>
                <Kinetic>
                    {this.props.children}
                </Kinetic>
            </div>
        )    
    }
}