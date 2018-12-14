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
               zipcode: "",
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
               zipcode: ""
          })
     }

     componentDidMount() {
          const { name, address, city, state, zipcode } = this.props;
          this.setState({ name, address, city, state, zipcode })
     }

     render() {
          console.log(this.props);
          const { updateStepOne } = this.props;
          const { redirect } = this.state;

          if (redirect) {
          return <Redirect to='/' />;
          }

          const { name, address, city, state, zipcode } = this.state;
          return (
               <div className="App">
                    <input name="name" onChange={this.handleInputChange} value={name}></input>
                    <input placeholder="address" name="address" onChange={this.handleInputChange} value={address}></input>
                    <input placeholder="city" name="city" onChange={this.handleInputChange} value={city}></input>
                    <input placeholder="state" name="state" onChange={this.handleInputChange} value={state}></input>
                    <input placeholder="zipcode" name="zipcode" onChange={this.handleInputChange} value={zipcode}></input>
                    <Link to="/wizard/step2"><button onClick={() => updateStepOne(name, address, city, state, zipcode)}>Next Step</button></Link>
               </div>
          );
     }
}

function mapStateToProps(reduxState) {
     const { name, address, city, state, zipcode } = reduxState;
     return { name, address, city, state, zipcode };
}

export default connect(mapStateToProps, { updateStepOne })(StepOne);