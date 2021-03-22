
/**
 * Square object module, inherits Kinetic component.
 */

import { Kinetic } from "./Kinetic";
import React from "react";
import styles from "./square.module.css";

export class Square extends React.Component{

    constructor(props){
        super(props)
        // this.ref = React.createRef();
        this.currentRef = null;
    }

    render(){
        // console.log("props mar3")
        console.log(this.props)
        return(
            <div className={styles.self} style={{
                width: this.props.size,
                height: this.props.size
            }}>
                <Kinetic parentRef={this}>
                    {this.props.children}
                </Kinetic>
            </div>
        )    
    }
    componentDidMount(){
        this.setState({
            currentRef: React.createRef()
        })
    }
}