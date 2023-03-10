import React from "react";
import "./Display.css";

//NON ES6 WAY the javaript way

// function  Display  (props) {
//     return (
//         <div>
//             <h4>Hello props.firstName props.lastName</h4>
//         </div>
//     );
// }


const Display = (props) =>{
    console.log(props);

    //props has immutable or unchageable properties as below
    //props.firstName= "XYZ";

    return (
        <div>
        <div style={{margin:"auto", backgroundColor:"skyblue",border:"1px solid grey", height:"120px", width:"200px"}}>
            <h3>Hello {props.firstName} {props.lastName} </h3>
            <h4 className="text-styling">Your age is : {props.age}</h4>
        </div>
        {props.children }
        </div>
    ) ;
}


export default Display;