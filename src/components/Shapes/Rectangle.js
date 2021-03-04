
/**
 * Square object module, inherits Kinetic component.
 */

import { Kinetic } from "./Kinetic";
import React from "react";
import styles from './rectangle.module.css';

export class Rectangle extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className={styles.self} styles={{
                width: this.props.width,
                height: this.props.height
            }}>
                <Kinetic>
                    {this.props.children}
                </Kinetic>
            </div>
        )    
    }
}