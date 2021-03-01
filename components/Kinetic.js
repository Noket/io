"use strict";

export default class Kinetics {

    constructor(){
        let xpos = 0;
        let ypos = 0;
        let children = <></>;    
    }
    //console.log(props.children.props.style);

    if(props){
        if(props.children){
            children = props.children;
        }
    }

    return (
    <div style={{

        position: "fixed",
        height: props.size,
        width: props.size,
        left: xpos,
        top: ypos
    }}>
        {children}
        {console.log(props)}
    </div>
    )
}

