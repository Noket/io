import React from "react";
import ShapeManager from "../../lib/js/ShapeManager";
import styles from "./kinetic.module.css";

class Kinetic extends React.Component {
    constructor(props){
        super(props);
        this.currentRef = React.createRef();
        this.interval = null;
        this.refresh = this.refresh.bind(this);
    }
    
    render(){
        return(
            <div ref={this.currentRef} className={styles.self}>
                {this.props.children}<br/>
                Mouse X-Position: {this.getMouseX()}<br/>
                Mouse Y-Position: {this.getMouseY()}<br/><br/>
                Object state: <br/>
                > getKineticX: {this.getKineticX()}<br/>
                > getKineticY: {this.getKineticY()}<br/>
                > getParentX: <br/>
                > getParentY: <br/>
                <br/><br/>
                ShapeManager currentX: {ShapeManager.currentX()}<br/>
                ShapeManager currentY: {ShapeManager.currentY()}
                {/* myRef: {JSON.stringify(this.myRef)} */}
                {/* ShapeManager: <br/> */}
                {/* {JSON.stringify(ShapeManager.getShapes())} */}
                {/* {JSON.stringify(this.props)} */}
            </div>
        );
    }

    getMouseX(){
        if(this.state){
            return this.state.mouseX;
        }
    }

    getMouseY(){
        if(this.state){
            return this.state.mouseY;
        }
    }

    getKineticX(){
        if(this.currentRef.current){
            return this.currentRef.current.offsetLeft;
        }else{
            return 0;
        }
    }
    getKineticY(){
        if(this.currentRef.current){
            return this.currentRef.current.offsetTop;
        }else{
            return 0;
        }
    }

    getParentX(){
        if(this.props.parentRef){

        }
    }

    getParentY(){
        if(this.currentRef.current){

        }
    }

    componentDidMount(){
        ShapeManager.addShape(this.currentRef.current);
        this.interval = setInterval(this.refresh,1000);
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    componentDidUpdate(){
        console.log(this);
    }

    refresh(){
        this.setState({
            mouseX: ShapeManager.currentX(),
            mouseY: ShapeManager.currentY(),
            objectX: this.currentRef.current.offsetLeft,
            objectY: this.currentRef.current.offsetTop
            // parentX: this.props.parentRef.style.top,
            // parentX: this.props.parentRef
        });
        // console.log("current X: "+ShapeManager.currentX());
        // console.log("current Y: "+ShapeManager.currentY());
    }
}

// console.log(Kinetic.props.hi);

export { Kinetic };

// export class Kinetic extends React.Component{
//     constructor(props){
//         super(props)
//         this.ref = React.createRef()
//     }

//     getRef(){
//         return this.ref;
//     }

//     getX(){
//     }

//     getY(){
//     }

//     render(){
//         return (
//             <div ref={this.props.inputRef}>
//                 {this.props.children}
//                 {console.log(this.ref)}
//             </div>
//             )
//     }

//     componentDidMount(){
//         console.log("kinetic ref")
//     }

//     useLayoutEffect(){
//         console.log("hi")
//     }
// }

