import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import { clearStateValues } from "../../ducks/reducer";

class Wizard extends Component {
     
     render() {
          const { clearStateValues } = this.props;
          return (
               <div className="App">
               <div className="app-background">
                    <div className="dash-container">
                    <Switch>
                         <Route path="/wizard/step1" component={StepOne} />
                         <Route path="/wizard/step2" component={StepTwo} />
                         <Route path="/wizard/step3" component={StepThree} />
                    </Switch>
                    <Link to="/"><button onClick={clearStateValues}>Cancel</button></Link>
                    </div>
               </div>
               
               </div>
          );
     }
}

export default connect(null, { clearStateValues })(Wizard);
