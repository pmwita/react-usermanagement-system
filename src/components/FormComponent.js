import React, { Component } from 'react'

export class FormComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         email: '',
         query: '',
         timeToReach: ''
      }
    }
 onChangeEmail = (event)=> {
    //gives the data entered  into the input box
    //console.log(event.target.value);
    this.setState({
        email: event.target.value
    });

 }
 
 onChangeQuery = (event) =>{
    this.setState({
        query: event.target.value
    });
 }

 onChangetimeToReach = (event) =>{
    this.setState({
        timeToReach: event.target.value
    });
 }

 onSubmitEnquiry = (event) =>{
    //prevent page from submitting first on click and refreshing
    event.preventDefault();
    console.log("form submitted");
    console.log(`Email: ${this.state.email}, Query: ${this.state.query}, TTR: ${this.state.timeToReach}`);

 } 
 
 //componenct didmount is called after constructor and all elements of DOM has been loaded
componentDidMount(){
    //onload API call
    console.log("componentDidMount has been called");
    this.setState({
        //default time on page load
        timeToReach: 'evening'
    });
}


 render() {
    return (
      <div>
       Enquiry Form
        <form onSubmit={this.onSubmitEnquiry}>
            <div>
                <label>Email</label>
                <input type="email" value={this.state.email}
                onChange={this.onChangeEmail}
                />
            </div>

            <div>
                <label>Query</label>
                <textarea value={this.state.query} onChange={this.onChangeQuery}></textarea>
            </div>

            <div>
                <label>Preferred time to reach</label>
                <select value={this.state.timeToReach} onChange={this.onChangetimeToReach}>
                    <option value="morning">Morning</option>
                    <option value="afternoon">Afternoon</option>
                    <option value="evening">Evening</option>
                </select>
            </div>
        
        <button type="submit">Send Enquiry</button>

        </form>
      </div>
    )
  }
}

export default FormComponent
