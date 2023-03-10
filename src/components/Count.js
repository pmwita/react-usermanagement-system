import React, { Component } from 'react'

class Count extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         c: 0
      }
    }
 
    increase(){
        // this.state.c = this.state.c + 1;
        //the setState happens asynchronously
        //call back fxn ensures val is updated before console output
        // this.setState({
        //     c: this.state.c +1 
        // }, () =>{
        //     console.log (this.state.c);
        // });
    
 //if you have to get previous value u have to pass a fxn
        this.setState((prevState, props) => ({
            c: prevState.c +1 
        }), ()=>{console.log(this.state.c)});
    }
  render() {
    return (
      <div>
        Count Component {this.state.c}
        <button onClick={() => this.increase()}>Increase </button>
      </div>
    )
  }
}

export default Count
