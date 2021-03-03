
/**
 * Square object module, inherits Kinetic component.
 */

import { Kinetic } from "./Kinetic";
import React from "react";
import styles from "./square.module.css";

export class Square extends React.Component{

    constructor(args){
        super()
        this.props = {
            size: args.size
        }

    }

    render(child){

        return(
            <div className={styles.self} style={{
                width: this.props.size+"px",
                height: this.props.size+"px"
            }}>
                <Kinetic>
                    {this.props.children}
                </Kinetic>
            </div>
        )    
    }
}