import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import axios from "axios";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

class Wizard extends Component {
     
     render() {
          
          return (
               <div className="App">
                    WIZARD
                    <Route path="/wizard/step1" component={StepOne} />
                    <Route path="/wizard/step2" component={StepTwo} />
                    <Route path="/wizard/step3" component={StepThree} />
                    <Link to="/"><button>Cancel</button></Link>
               </div>
          );
     }
}

export default Wizard;
