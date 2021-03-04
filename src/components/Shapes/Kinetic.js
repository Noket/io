import React from "react";
import styles from "./kinetic.module.css"

class Kinetic extends React.Component {
    constructor(props){
        super(props)
        this.myRef = React.createRef();
    }
    render(){
        return(
            <div ref={this.myRef} className={styles.self}>
                Testing
            </div>
        );
    }

    componentDidMount(){
        console.log(this)
        document.getEle
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

