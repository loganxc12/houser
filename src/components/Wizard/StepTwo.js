import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import axios from "axios";

class StepTwo extends Component {
     constructor(props) {
          super(props);
          this.state = {
               imageUrl: ""
          }
          this.handleInputChange = this.handleInputChange.bind(this);
          this.resetState = this.resetState.bind(this);
     }

     handleInputChange(e) {
          this.setState({
               [e.target.name] : e.target.value
          })
     }

     resetState() {
          this.setState({
               imageUrl: ""
          })
     }

     render() {

          const { imageUrl } = this.state;
          return (
               <div className="App">
                    <input placeholder="ImageUrl" name="imageUrl" onChange={this.handleInputChange} value={imageUrl}></input>
                    <Link to="/wizard/step3"><button>Next Step</button></Link>
                    <Link to="/wizard/step1"><button>Previous Step</button></Link>
               </div>
          );
     }
}

export default StepTwo;