import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { updateStepTwo } from "../../ducks/reducer";

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
          const { updateStepTwo } = this.props;
          const { imageUrl } = this.state;
          return (
               <div className="App">
                    <input placeholder="ImageUrl" name="imageUrl" onChange={this.handleInputChange} value={imageUrl}></input>
                    <Link to="/wizard/step3"><button onClick={() => updateStepTwo(imageUrl)}>Next Step</button></Link>
                    <Link to="/wizard/step1"><button onClick={() => updateStepTwo(imageUrl)}>Previous Step</button></Link>
               </div>
          );
     }
}

function mapStateToProps(reduxState) {
     const { imageUrl } = reduxState;
     return { imageUrl };
}

export default connect(mapStateToProps, { updateStepTwo })(StepTwo);