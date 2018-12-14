import React, { Component } from 'react';
import House from "../House/House";
import { Link } from "react-router-dom";
import axios from "axios";

class Dashboard extends Component {
     constructor(props) {
          super(props);
          this.state = {
               houses: []
          }
          this.getHousesFromServer = this.getHousesFromServer.bind(this);
          this.deleteHouseFromServer = this.deleteHouseFromServer.bind(this);
     }

     componentDidMount() {
          console.log('cdm');
          this.getHousesFromServer();
     }

     getHousesFromServer() {
          axios.get("/api/houses").then(response => {
               this.setState({ houses: response.data })
          })
     }

     deleteHouseFromServer(id) {
          axios.delete(`/api/houses/${id}`).then(response => {
               this.getHousesFromServer();
          })
     }

     render() {
          const { houses } = this.state;
          const housesToDisplay = houses.map(house => 
               <House key={house.id} house={house} deleteHouse={this.deleteHouseFromServer} /> 
          )
     return (
          <div className="App">
          DASHBOARD
          <Link to="/wizard/step1"><button>Add New Property</button></Link>
          { housesToDisplay }
          </div>
     );
     }
}

export default Dashboard;
