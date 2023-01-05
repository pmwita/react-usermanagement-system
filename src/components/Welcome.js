import React, {Component} from "react";

class Welcome extends Component{

    constructor(){
        super(); //call super class constructor
        //data in state can be modified
        this.state = { name: "Peter Mwita", age: 27  };
    }
    changeData(){
        //debugger;
        this.setState({
            name: "Jon Doe",
            age: 28
        });
    }
    render(){
        return(
            <div>
            <h2>Name is {this.state.name} and age is {this.state.age}</h2>
            <button onClick={()=> this.changeData()}>Change details</button>
            </div>
        );
    }
}

export default Welcome;