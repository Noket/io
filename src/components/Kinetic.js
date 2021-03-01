import React from "react";

export class Kinetic extends React.Component{

    //console.log(props.children.props.style);

    constructor(args){
        super()
        this.props = args
        // this.props.style.top = "0px";
        // this.props.style.left = "0px";
        // // this.render.bind(this);
    }

    render(){
        console.log(this.props);
        return (
            <div style={this.props.style}>
                {this.props.children}
            </div>
            )
    }
}

