import { Kinetic } from "./Kinetic";
import React from "react";
import styles from "./circle.module.css";

export class Circle extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        console.log("props mar3")
        console.log(this.props)
        return(
            <div className={styles.self} style={{
                width: this.props.size,
                height: this.props.size
            }}>
                <Kinetic>
                    {this.props.children}
                </Kinetic>
            </div>
        )    
    }
}