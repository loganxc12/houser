
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { updateStepThree } from "../../ducks/reducer";
import { clearStateValues } from "../../ducks/reducer";

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
          console.log('inside post');
          const { name, address, city, state, zip, imageUrl } = this.props;
          const { mortgage, rent } = this.state;
          const newHouse = { name, address, city, state, zip, imageUrl, mortgage, rent };
          axios.post("/api/houses", newHouse).then(response => {
               this.props.clearStateValues();
               // this.setState({
               //      redirect: true
               // })
          })
     }

     componentDidMount() {
          const { mortgage, rent } = this.props;
          this.setState({ mortgage, rent })
     }

     render() {
          const { updateStepThree } = this.props;
          const { mortgage, rent } = this.state;
          return (
               <div className="App">
                    <p>Monthly mortgage amount:</p>
                    <input name="mortgage" onChange={this.handleInputChange} value={mortgage}></input>
                    <p>Desired monthly rent:</p>
                    <input name="rent" onChange={this.handleInputChange} value={rent}></input>
                    <Link to="/wizard/step2"><button onClick={() => updateStepThree(mortgage, rent)}>Previous Step</button></Link>
                    <Link to="/"><button onClick={this.postHouseToServer}>Complete</button></Link>
               </div>
          );
     }
}

function mapStateToProps(reduxState) {
     const { name, address, city, state, zip, imageUrl, mortgage, rent } = reduxState;
     return { name, address, city, state, zip, imageUrl, mortgage, rent };
}

export default connect(mapStateToProps, {updateStepThree, clearStateValues})(StepThree);
