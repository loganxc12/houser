
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import axios from "axios";

class StepThree extends Component {
     constructor(props) {
          super(props);
          this.state = {
               mortgage: "",
               rent: ""
          }
          this.handleInputChange = this.handleInputChange.bind(this);
          this.resetState = this.resetState.bind(this);
          this.postHouseToServer = this.postHouseToServer.bind(this);
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

     postHouseToServer() {
          const { name, address, city, state, zipcode } = this.state;
          const newHouse = { name, address, city, state, zipcode };
          axios.post("/api/houses", newHouse).then(response => {
               this.resetState();
               this.setState({
                    redirect: true
               })
          })
     }

     render() {

          const { mortgage, rent } = this.state;
          return (
               <div className="App">
                    <input placeholder="Monthly mortgage amount" name="mortgage" onChange={this.handleInputChange} value={mortgage}></input>
                    <input placeholder="Desired monthly rent" name="rent" onChange={this.handleInputChange} value={rent}></input>
                    <Link to="/wizard/step2"><button>Previous Step</button></Link>
                    <button onClick={this.postHouseToServer}>Complete</button>
               </div>
          );
     }
}

export default StepThree;