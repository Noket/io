import { Kinetic } from "./Kinetic";
import React from "react";
import styles from "./circle.module.css";

export class Circle extends React.Component{

    constructor(args){
        super()
        this.props = {
            size: args.size
        }

    }

    render(child){
        console.log("props mar3")
        console.log(this.props)
        return(
            <div className={styles.self} style={{
                width: this.props.size+"px",
                height: this.props.size+"px",
            }}>
                <Kinetic>
                    {this.props.children}
                </Kinetic>
            </div>
        )    
    }
}