import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { updateStepOne } from "../../ducks/reducer";

class StepOne extends Component {
     constructor(props) {
          super(props);
          this.state = {
               name: "",
               address: "",
               city: "",
               state: "",
               zip: "",
               redirect: false
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
               name: "",
               address: "",
               city: "",
               state: "",
               zip: ""
          })
     }

     componentDidMount() {
          const { name, address, city, state, zip } = this.props;
          this.setState({ name, address, city, state, zip })
     }

     render() {
          console.log(this.props);
          const { updateStepOne } = this.props;
          const { redirect } = this.state;

          if (redirect) {
          return <Redirect to='/' />;
          }

          const { name, address, city, state, zip } = this.state;
          return (
               <div className="App">
                    <h3>Name: </h3>
                    <input name="name" onChange={this.handleInputChange} value={name}></input>
                    <h3>Address: </h3>
                    <input name="address" onChange={this.handleInputChange} value={address}></input>
                    <h3>City: </h3>
                    <input name="city" onChange={this.handleInputChange} value={city}></input>
                    <h3>State: </h3>
                    <input name="state" onChange={this.handleInputChange} value={state}></input>
                    <h3>Zipcode: </h3>
                    <input name="zip" onChange={this.handleInputChange} value={zip}></input>
                    <Link to="/wizard/step2"><button onClick={() => updateStepOne(name, address, city, state, zip)}>Next Step</button></Link>
               </div>
          );
     }
}

function mapStateToProps(reduxState) {
     const { name, address, city, state, zip } = reduxState;
     return { name, address, city, state, zip };
}

export default connect(mapStateToProps, { updateStepOne })(StepOne);